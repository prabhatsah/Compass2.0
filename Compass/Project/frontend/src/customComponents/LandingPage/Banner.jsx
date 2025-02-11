import React from "react";
import meghalaya from "../../assets/Meghalaya.jpg";
import Darjeeling from "../../assets/darjeeling.webp";
import Kedarkanth from "../../assets/Kedarkanth.jpg";
import Ladhak from "../../assets/Ladhak.webp";
import Sundarban from "../../assets/Sundarban.jpg";
import TajMahal from "../../assets/TajMahal.jpg";
import Megh1 from "../../assets/Meghalaya/Megh1.jpeg";
import Megh2 from "../../assets/Meghalaya/Megh2.jpeg";
import Megh3 from "../../assets/Meghalaya/Megh3.jpg";
import Megh4 from "../../assets/Meghalaya/Megh4.jpeg";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaPython,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

const Banner = () => {
  const badges = [
    // { id: 1, text: "Kedarkanth", icon: <FaReact className="text-blue-500" /> },
    // { id: 2, text: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    // { id: 3, text: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    // { id: 4, text: "CSS3", icon: <FaCss3 className="text-blue-600" /> },
    // { id: 5, text: "Node.js", icon: <FaNode className="text-green-500" /> },
    // { id: 6, text: "Python", icon: <FaPython className="text-blue-400" /> },
    // { id: 7, text: "Database", icon: <FaDatabase className="text-gray-600" /> },
    // { id: 8, text: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    // { id: 9, text: "Docker", icon: <FaDocker className="text-blue-500" /> },
    // { id: 10, text: "AWS", icon: <FaAws className="text-orange-500" /> },
    { id: 1, text: "Kedarkanth", img: Kedarkanth },
    { id: 2, text: "Ladhak", img: Ladhak },
    { id: 3, text: "Darjeeling", img: Darjeeling },
    { id: 4, text: "Sundarban", img: Sundarban },
    { id: 5, text: "Tajmahal", img: TajMahal },
    { id: 6, text: "Shillong", img: Megh1 },
    { id: 7, text: "Sohra", img: Megh2 },
    { id: 8, text: "Meghalaya", img: Megh3 },
    { id: 9, text: "Cherrapunji", img: Megh4 },
    { id: 10, text: "Jungle", img: Sundarban },
  ];

  return (
    <div className="w-full bg-gray-100 overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...badges, ...badges].map((badge, index) => (
          <div
            key={`${badge.id}-${index}`}
            className=" inline-flex items-center min-w-[12vw] gap-5 mx-4 px-2 py-2 bg-white rounded-full shadow-md cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-gray-50 hover:shadow-lg"
            onClick={() => console.log(`Clicked ${badge.text}`)}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={badge.img}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {badge.text}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
