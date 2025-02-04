import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import meghalaya from "../../assets/Meghalaya.jpg";
import darjeeling from "../../assets/darjeeling.webp";
import Kedarkanth from "../../assets/Kedarkanth.jpg";
import Ladhak from "../../assets/Ladhak.webp";
import Sundarban from "../../assets/Sundarban.jpg";
import TajMahal from "../../assets/TajMahal.jpg";
import ProfilePic from "../../assets/UserProfile.jpeg";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";

const BottomCarousel = () => {
  const navigate = useNavigate();
  function openTripComp() {
    navigate("/trip");
  }
  const cards = [
    {
      id: 1,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "Meghalaya",
      description:
        "Experience the thrill of mountain climbing and waterfall and many more.",
      image: meghalaya,
    },
    {
      id: 2,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "Sundarban Jungle Safari",
      description:
        "Sundarbans is a mangrove forest area in the Ganges Delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Spread across parts of India and Bangladesh, this forest is the largest mangrove forest in the world.",
      image: Sundarban,
    },
    {
      id: 3,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "Darjeeling",
      description: "Adventure through vast mountains.",
      image: darjeeling,
    },
    {
      id: 4,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "Slow land",
      description: "Explore snow fall and white vast land.",
      image: Kedarkanth,
    },
    {
      id: 5,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "TajMahal - The sign of Love",
      description: "Discover urban landscapes",
      image: TajMahal,
    },
    {
      id: 6,
      userName: "Prabhat Kumar",
      profilePic: ProfilePic,
      title: "Leh Ladhak",
      description: "Visit beautiful mountains",
      image: Ladhak,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 5 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= cards.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? cards.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="relative max-full mx-auto px-4 py-2">
      <div className="flex items-center">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 absolute left-0 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Cards container */}
        <div className="flex gap-6 overflow-hidden mx-12">
          {cards.slice(currentIndex, currentIndex + 3).map((card) => (
            <div
              className=" p-5 w-[35vw] border rounded-lg bg-white shadow"
              key={card.id}
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg w-[30vw] h-[25vh]"
              />
              <div className="">
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mt-2 flex items-center gap-2">
                    <FaLocationDot />
                    {card.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-500 flex items-center gap-2">
                    <FaRegCalendarAlt className="text-lg" />
                    2025/01/02 - 2025/01/08 (flexible)
                  </p>
                  <p className="h-[90px] overflow-hidden line-clamp-3 py-4 rounded-lg mt-[-10px]">
                    {card.description}
                  </p>
                </div>
                <div className="flex mt-6 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <img
                      src={card.profilePic}
                      alt={card.profilePic}
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <h3>{card.userName}</h3>
                  </div>
                  <div>
                    <a
                      href="#"
                      onClick={openTripComp}
                      className="hover:opacity-90 px-5 py-2 rounded-md bg-blue-900 text-white flex gap-2"
                    >
                      <FaLongArrowAltRight className="text-2xl" />
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 absolute right-0 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-2 h-2 rounded-full transition-all ${
              Math.floor(currentIndex / 3) === index
                ? "bg-blue-600 w-4"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomCarousel;
