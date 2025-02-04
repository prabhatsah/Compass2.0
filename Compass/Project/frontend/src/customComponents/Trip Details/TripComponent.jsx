import Header from "../Header";
import { FaDotCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsBookmarkHeartFill } from "react-icons/bs";
import TripExtraDetails from "./TripExtraDetails";
import NameCard from "./NameCard";
import { FaCarSide } from "react-icons/fa6";
import GoogleMapComponent from "./GoogleMap";

export default function Trip() {
  const apiKey = "AIzaSyCDMMvQ_8n2x8jc3jXwxi-dNA_S-SostPs"; //process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Map API key
  const source = { lat: 25.5788, lng: 91.8933 }; // Shillong
  const destination = { lat: 22.5726, lng: 88.3639 }; // Los Angeles

  const tripDetails = {
    title: "Meghalay : The Heaven of NorthEast",
    source: "Kolkata, West Bnegal",
    destination: "Shillong, Meghalaya",
    meetPoint: "Howrah, West Bengal",
    desc: "Discover the breathtaking beauty of Shillong, Cherrapunji, and Dawki as you explore misty hills, cascading waterfalls, and pristine rivers in the 'Abode of Clouds' .Trek through dense forests to witness Meghalaya’s famous Double Decker Living Root Bridge, a marvel of bio-engineering made entirely of natural roots.",
    userName: "Prabhat Kumar",
    userAddress: " Salt Lake, Kolkata",
  };
  return (
    <>
      {/* <Header /> */}
      <div class="w-[70%] mx-auto mt-[10vh] text-gray-700">
        <div className="grid grid-cols-12">
          <div className="col-span-8 me-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Meghalay : The Heaven of NorthEast
              </h3>
              <div className="flex gap-3">
                <BsBookmarkHeartFill className="text-4xl" />
                {/* <a
                  href="#"
                  className="hover:opacity-90 px-5 py-2 rounded-md bg-green-900 text-white flex gap-2"
                >
                  <MdConnectWithoutContact className="text-2xl" />
                  Connect
                </a> */}
              </div>
            </div>
            <div className="mt-[2vh]">
              <div className="flex gap-2 items-center">
                <FaDotCircle className="text-red-600 text-2xl" />
                <p className="text-xl">Kolkata</p>
              </div>
              <div className="font-bold text-gray-600 ms-2">
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaMapLocationDot className="text-green-600 text-2xl" />
                <p className="text-xl">Kolkata</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              {/* <img src={GoogleMap} alt="google-map" className="rounded-md" /> */}
              <GoogleMapComponent
                apiKey={apiKey}
                source={source}
                destination={destination}
              />
              <a
                href="#"
                className="hover:opacity-90 px-5 py-2 rounded-md bg-green-900 text-white flex gap-2 justify-center"
              >
                <FaCarSide className="text-2xl" />
                Request to join
              </a>
            </div>
          </div>
        </div>
        <div className="  h-[20vh] mt-[5vh] w-full">
          <p className="text-xl font-bold">Description</p>
          <p className="h-[20vh] overflow-y-auto py-2 text-lg">
            The unforgettable landscapes of Meghalaya will stay in your heart,
            long after your journey is over. The table-top heights of Sohra
            (Cherrapunjee) are brimful with waterfalls, streams, and forest
            trails. Gaze at the Bangladeshi plains from the many vantage points
            on the state’s southern ridges. The outskirts of Shillong and the
            high plateau around Mylliem and Smit offer postcard perfect
            representations of the simple life – complete with pastel green
            meadows, tall pine groves, crisp cool air, and quiet villages with
            quaint cottages and wooden fences spread across the countryside.
            Further west, the Garo Hills burst into all the shades of green that
            you can think of. It is a region where you can travel on winding
            roads that pass through undisturbed forests where pachyderms and
            predators still rule and discover rarely-breached ecosystems.
            Meghalaya’s largely agrarian society has also contributed to this
            vibrant mosaic. Paddy fields neatly carved out of the hills and
            betel plantations that blend into the forest are just some examples
            you will come across. On the eastern part of the state, the Jaintia
            Hills offer more even enchanting views – a mix of heady cliffs,
            river-crossed tableland, rapids and waterfalls, and primeval forests
            that still remain unexplored in places. Meghalaya is home to some of
            the longest and most complex cave systems in the world – from west
            to east, there are many subterranean tunnels and spots marked with
            ancient fossils and home to rare species. During the monsoons, the
            fast-moving rivers swell and drop into the plains in imposing,
            powerful cascades – a reason why Meghalaya is also termed as a land
            of waterfalls.
          </p>
        </div>
        <div className="grid grid-cols-12 text-gray-700 mt-[8vh]">
          <div className="col-span-8 me-10">
            <div>
              <TripExtraDetails />
            </div>
          </div>
          <div className="col-span-4 ">
            <NameCard />
          </div>
        </div>
      </div>
    </>
  );
}
