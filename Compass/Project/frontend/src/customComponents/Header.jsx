import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";
import { BiSolidLogOutCircle } from "react-icons/bi";
import Logo from "./Meta/Logo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const user = useSelector((state) => state.user.user);

  // Toggle select visibility
  const toggleProfileMenu = () => setProfileMenuVisible(!isProfileMenuVisible);

  // Close menu if clicked outside
  const handleClickOutside = (e) => {
    if (
      e.target.id !== "user-avatar" &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setProfileMenuVisible(false);
    }
  };

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
  function openProfilePage() {
    navigate("/profile");
    setProfileMenuVisible(!isProfileMenuVisible);
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

    // click event listener to close menu when clicked outside
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full h-[8vh] sticky top-0 z-[1] mb-5">
      <div
        className={`h-full border-b-[1px] border-sky-800 w-full flex items-center justify-between px-10 ${
          isScrolled ? "bg-white" : "bg-white"
        } mb-5`}
      >
        <div
          className=" flex items-center cursor-pointer"
          onClick={() => handleLogoClick()}
        >
          <Logo />
        </div>
        <div className="">
          <div className={`flex gap-8  items-center text-gray-600`}>
            <a href="#" className=" hover:opacity-90">
              Find buddy
            </a>
            <a href="#" className=" hover:opacity-90">
              About us
            </a>
            {user ? (
              <a
                href="#"
                onClick={() => handleLogout()}
                className="hover:opacity-90 px-5 py-2 rounded-md bg-red-900 text-white flex gap-2"
              >
                <BiSolidLogOutCircle className="text-2xl" />
                Logout
              </a>
            ) : (
              <a
                href="#"
                onClick={() => handlelogin()}
                className="hover:opacity-90 px-5 py-2 rounded-md bg-sky-900 text-white flex gap-2"
              >
                <BiSolidLogInCircle className="text-2xl" />
                Login
              </a>
            )}

            {/* user profile icon */}
            {user && (
              <div className="avatar">
                <div
                  className="w-12 rounded-full cursor-pointer"
                  onClick={toggleProfileMenu}
                >
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    id="user-avatar"
                  />
                </div>
              </div>
            )}

            {/* user profile mwnu */}
            {isProfileMenuVisible && (
              <div className="absolute right-10 top-16" ref={menuRef}>
                <ul className="menu bg-white rounded-box w-30 shadow-lg border">
                  <li
                    className="cursor-pointer hover:opacity-75 hover:bg-gray-100"
                    onClick={openProfilePage}
                  >
                    <a>
                      <FaUser />
                      Profile
                    </a>
                  </li>
                  <li className="cursor-pointer hover:opacity-75 hover:bg-gray-100">
                    <a>
                      <FaGear />
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    //</div>
  );
}
