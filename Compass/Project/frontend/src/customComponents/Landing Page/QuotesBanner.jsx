import React from "react";
import AugustineofHippo from "../../assets/Meta Assets/QuotesPersonality/Augustine of Hippo.jpg";
import DalaiLama from "../../assets/Meta Assets/QuotesPersonality/Dalai Lama.jpeg";
import GayleForman from "../../assets/Meta Assets/QuotesPersonality/GayleForman.jpg";
import IbnBattuta from "../../assets/Meta Assets/QuotesPersonality/Ibn Battuta.jpg";
import AndreGide from "../../assets/Meta Assets/QuotesPersonality/AndreGide.jpg";
import MarkTwain from "../../assets/Meta Assets/QuotesPersonality/MarkTwain.jpg";
import SusanHeller from "../../assets/Meta Assets/QuotesPersonality/SusanHeller.jpeg";
import PicoIyer from "../../assets/Meta Assets/QuotesPersonality/PicoIyer.jpeg";
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

const QuotesBanner = () => {
  const badges = [
    {
      id: 1,
      text: "The world is a book and those who do not travel read only one page.",
      img: AugustineofHippo,
      name: "Augustine of Hippo",
    },
    {
      id: 2,
      text: "Once a year, go someplace you’ve never been before.",
      img: DalaiLama,
      name: "Dalai Lama",
    },
    {
      id: 3,
      text: "Traveling is not something you’re good at. It’s something you do. Like breathing.",
      img: GayleForman,
      name: "Gayle Forman",
    },
    {
      id: 4,
      text: "Traveling. It leaves you speechless, then turns you into a storyteller.",
      img: IbnBattuta,
      name: "Ibn Battuta",
    },
    {
      id: 5,
      text: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
      img: AndreGide,
      name: "Andre Gide",
    },
    {
      id: 6,
      text: "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did.",
      img: MarkTwain,
      name: "Mark Twain",
    },
    {
      id: 7,
      text: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.",
      img: SusanHeller,
      name: "Susan Heller",
    },
    {
      id: 8,
      text: "A person susceptible to ‘wanderlust’ is not so much addicted to movement as committed to transformation.",
      img: PicoIyer,
      name: "Pico Iyer",
    },
  ];

  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...badges, ...badges].map((badge, index) => (
          <div
            key={`${badge.id}-${index}`}
            className=" inline-flex items-center gap-5 mx-4 px-2 py-2 text-gray-800 bg-white bg-opacity-25 backdrop-blur-sm rounded-full shadow-md cursor-pointer 
            transform transition-all duration-800 hover:scale-110 hover:shadow-lg min-w-[30vw]"
            onClick={() => console.log(`Clicked ${badge.text}`)}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={badge.img}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-md w-[22vw] whitespace-normal">
                "{badge.text}"
              </p>
              <p className="text-sm text-gray-600 float-end">~ {badge.name}</p>
            </div>
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default QuotesBanner;
