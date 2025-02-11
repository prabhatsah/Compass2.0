import { FaStar, FaStarHalf } from "react-icons/fa";
import profilePic from "../../assets/UserProfile.jpeg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSnapchat } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

export default function NameCard() {
  return (
    <>
      <div>
        <p className="text-xl font-bold">Posted by</p>
      </div>
      <div class="relative w-full my-6 bg-white border p-5 rounded-lg">
        <div className="flex ">
          <div class="px-5 w-[15rem]">
            <img
              src={profilePic}
              alt="card-image"
              class="h-[7rem] w-[7rem] rounded-md md:rounded-full object-cover"
            />
          </div>
          <div class=" w-full">
            <div>
              <div className="flex items-center justify-between w-full">
                <div class="rounded-full bg-yellow-600 py-0.5 px-2 text-sm text-white shadow-sm w-20 text-center">
                  Wonderer
                </div>
                <div className="flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
              </div>
              <h4 class="mb-2 text-slate-800 text-2xl font-semibold">
                Alisha Barik
              </h4>
            </div>
            <div className="flex mt-5">
              <section className="flex  flex-col items-center">
                <FcGoogle className="text-3xl " />
                <p className="text-center">Verified by Google</p>
              </section>
              <section className="flex  flex-col items-center">
                <FaPhone className="text-2xl text-teal-600" />
                <p className="text-center mt-1">Verified by number</p>
              </section>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between border-t-2 mt-5 py-5 pb-0">
          <div className=" flex text-4xl gap-2">
            <FaFacebook className="text-blue-900" />
            <RiInstagramFill className="text-orange-900" />
            <FaSnapchat className="text-yellow-600" />
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="hover:opacity-90 flex items-center justify-center py-1 rounded-md bg-green-900 text-white gap-2 w-[6vw]"
            >
              <FaUserPlus className="text-lg" />
              Connect
            </a>
            <a
              href="#"
              className="hover:opacity-90 flex items-center justify-center py-1 rounded-md bg-blue-900 text-white  gap-2 w-[4.5vw]"
            >
              <FaLongArrowAltRight className="text-xl" />
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
