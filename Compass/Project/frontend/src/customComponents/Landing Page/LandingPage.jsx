import LocateMap from "@/assets/Meta Assets/LocateMap.svg";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner.jsx";
import FeaturedLocationIndia from "./FeaturedLocationIndia.jsx";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Testimony from "./Testimony.jsx";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  function handleLoginButton() {
    navigate("/login");
  }
  return (
    <>
      <section class="relative mx-auto">
        <div className="h-[60vh] flex bg-sky-800 mx-10 rounded-2xl items-center justify-around shadow">
          <div className="flex flex-col justify-center">
            <p className="text-2xl text-white">
              Need a&nbsp;
              <strong className=" text-[50px] bg-white rounded-lg text-sky-800 px-3">
                travel buddy
              </strong>
              &nbsp;or want to&nbsp;
              <span className="block mt-4">
                <strong className="text-sky-400 text-[50px]">
                  share your experience?
                </strong>
              </span>
            </p>

            <div>
              <div className="flex items-center justify-center max-w-xl mx-auto bg-white rounded-full p-2 mt-7">
                <FaSearch className="text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search destinations or activities..."
                  className="w-full px-4 py-2 outline-none text-gray-700 border-none bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-sky-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-2 text-gray-300 justify-center items-center mt-3">
              <div>100+ Trips </div>
              <span>|</span>
              <div>60+ People</div>
            </div>
          </div>
          <div class="">
            <img src={LocateMap} alt="bgImage" className="h-[50vh] " />
          </div>
        </div>
      </section>

      {/* Banner */}
      <Banner />

      {/* Featured locations */}
      <FeaturedLocationIndia />

      {/* Testimony */}
      <Testimony />
    </>
  );
}
