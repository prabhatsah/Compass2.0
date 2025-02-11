import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import QuotesBanner from "./QuotesBanner";
import { Button } from "../../components/ui/button";
import CustomButton from "../CommonComponents/CustomButton";
import BgVideo from "@/CustomComponents/CommonComponents/BgVideo.jsx";
import jungleMountain4K from "@/assets/Meta Assets/LP-Gallery/jungleMountain4K.mp4";
import forestCampfire from "@/assets/Meta Assets/LP-Gallery/forest-campfire.jpg";
import BottomCarousel from "./BottomCarousel";
import { PlacesCarousel } from "./PlacesCarousel";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <section class="w-full">
        {/* <BgVideo /> */}
        <div
          style={{ backgroundImage: `url(${forestCampfire})` }}
          className="custom-card z-10 bg-cover bg-center w-full flex flex-col h-[80vh] mb-5"
        >
          <div className="flex flex-col h-full justify-center items-center ">
            <div>
              <p className="text-2xl text-white/90 font-blackOps">
                Need a&nbsp;
                <strong className=" text-[50px] text-primary px-3">
                  travel buddy
                </strong>
                &nbsp;or want to&nbsp;
                <span className="block mt-4">
                  <strong className=" text-[50px]">
                    share your experience?
                  </strong>
                </span>
              </p>
            </div>
            <div className="flex items-center w-5/12 bg-white rounded-full p-2 mt-7">
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
              <CustomButton
                text="Search"
                rounded="rounded-full"
                bgColor="primary"
              />
            </div>
            <div className="flex justify-center gap-2 text-gray-300 mt-3">
              <p>100+ Trips </p>
              <span>|</span>
              <p>60+ People</p>
            </div>
          </div>
          <div>
            <QuotesBanner />
          </div>
        </div>
        <div className="custom-card h-full w-full bg-bgPrimary flex justify-center">
          {/* <BottomCarousel /> */}
          <PlacesCarousel />
        </div>
      </section>
    </>
  );
}
