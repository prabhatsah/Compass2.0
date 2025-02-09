import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import QuotesBanner from "./QuotesBanner";
import { Button } from "../../components/ui/button";
import CustomButton from "../CommonComponents/CustomButton";
import BgVideo from "../CommonComponents/BgVideo.jsx";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <BgVideo />
      <section class="relative mx-auto">
        <div className="h-[60vh] flex rounded-2xl items-center ms-20 mt-20 text-center justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-2xl text-white">
              Need a&nbsp;
              <strong className=" text-[50px] bg-white rounded-lg text-sky-800 px-3">
                travel buddy
              </strong>
              &nbsp;or want to&nbsp;
              <span className="block mt-4">
                <strong className="text-white text-[50px]">
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
                {/* <button className="bg-sky-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Search
                </button> */}
                <CustomButton text="Search" rounded="rounded-full" />
              </div>
            </div>
            <div className="flex gap-2 text-gray-300 justify-center items-center mt-3">
              <div>100+ Trips </div>
              <span>|</span>
              <div>60+ People</div>
            </div>
          </div>
        </div>
      </section>
      <QuotesBanner />
    </>
  );
}
