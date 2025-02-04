import { FaUser } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import "./Tabs.css";

export default function Tabs({ activeTab, handleTabClick }) {
  const tabList = [
    { name: "Basic Details", icon: <FaUser className=" text-lg" /> },
    { name: "Trips", icon: <BiTrip className=" text-lg" /> },
    { name: "Destinations", icon: <FaMapLocationDot className=" text-lg" /> },
    { name: "Bucket List", icon: <FaBitbucket className=" text-lg" /> },
    { name: "Settings", icon: <IoSettings className=" text-lg" /> },
  ];

  return (
    // <div className=" ">
    //   {tabList.map((tab, index) => (
    //     <div
    //       key={index}
    //       className={`tab ${activeTab === tab.name ? "active" : ""} grid grid-cols-6 gap-4`}
    //       onClick={handleTabClick}
    //     >
    //       <span className="col-start-1 col-end-2 ...">{tab.icon}</span>
    //       <span className="col-span-4 col-end-7 ...">{tab.name}</span>
    //     </div>
    //   ))}
    // </div>

    <ul className="w-[90%] mx-auto ">
      {tabList.map((tab, index) => (
        <li
          key={index}
          onClick={handleTabClick}
          className={`tab1 ${activeTab === tab.name ? "active" : ""} `}
        >
          <span>{tab.icon}</span>
          <a>{tab.name}</a>
        </li>
      ))}
    </ul>
  );
}
