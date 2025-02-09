import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Meta/Logo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button.tsx";
import { LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomButton from "./CommonComponents/CustomButton.jsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [position, setPosition] = React.useState("bottom");

  const user = useSelector((state) => state.user.user);

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
    setTimeout(() => navigate("/"), 200);
  };

  function handleLogoClick() {
    navigate("/");
  }
  function handlelogin() {
    navigate("/Login");
  }

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full h-[8vh] sticky top-5 z-[1] mb-5">
      <div
        className={`h-full w-full flex items-center justify-between px-10 mb-5 
          ${isScrolled ? "bg-transparent" : "bg-transparent"} 
        `}
      >
        <div
          className=" flex items-center cursor-pointer"
          onClick={() => handleLogoClick()}
        >
          <Logo />
        </div>
        <div className="">
          <div
            className={`flex gap-8  items-center text-sky-900 bg-white px-5 py-2 rounded-full bg-opacity-75 pe-3`}
          >
            <a href="#" className=" hover:opacity-90">
              Find buddy
            </a>
            <a href="#" className=" hover:opacity-90">
              About us
            </a>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="@shadcn"
                      id="user-avatar"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleLogout()}
                    className="text-red-900 hover:!bg-red-900 hover:!text-white"
                  >
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // <Button
              //   className="bg-sky-900 hover:opacity-90 hover:bg-sky-900 rounded-full "
              //   onClick={() => handlelogin()}
              // >
              //   <LogIn /> Login
              // </Button>
              <CustomButton
                text="Login"
                rounded="rounded-full"
                icon={<LogIn />}
                clickHandle={() => handlelogin()}
              />
            )}

            {/* user profile icon */}
            {/* {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="@shadcn"
                      id="user-avatar"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={() => handlelogin()}
                    className="text-red-900 hover:!bg-red-900 hover:!text-white"
                  >
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )} */}
          </div>
        </div>
      </div>
    </header>
    //</div>
  );
}
