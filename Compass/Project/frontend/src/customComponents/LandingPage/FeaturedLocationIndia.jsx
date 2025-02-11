import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedLocationIndia = () => {
  const travelData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      location: "Paris, France",
      date: "June 15, 2023",
      description:
        "Exploring the romantic streets of Paris, visiting the iconic Eiffel Tower and enjoying French cuisine.",
      author: {
        name: "Emily Parker",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        designation: "Travel Blogger",
      },
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
      location: "Bali, Indonesia",
      date: "July 2, 2023",
      description:
        "Discovering the beautiful beaches, ancient temples, and rich culture of Bali.",
      author: {
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        designation: "Photography Enthusiast",
      },
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
      location: "Santorini, Greece",
      date: "August 10, 2023",
      description:
        "Experiencing the breathtaking sunsets and white-washed buildings of Santorini.",
      author: {
        name: "Sofia Martinez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        designation: "Travel Writer",
      },
    },
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

  const nextSlide = () => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((index) =>
        index === travelData.length - 1 ? 0 : index + 1
      )
    );
  };

  const prevSlide = () => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((index) =>
        index === 0 ? travelData.length - 1 : index - 1
      )
    );
  };

  return (
    <section>
      <div className="mt-[5vh] w-[80vw] mx-auto">
        <div className="text-center">
          <h2 className="text-[30px] font-bold text-gray-700">
            Travel buddy in India
          </h2>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentIndices.map((index, i) => (
            <div
              key={i}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={travelData[index].image}
                alt={travelData[index].location}
                className="w-full h-[300px] object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {travelData[index].location}
                  </h2>
                  <span className="text-sm text-gray-600">
                    {travelData[index].date}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 text-sm">
                  {travelData[index].description}
                </p>

                <div className="flex items-center border-t pt-4">
                  <img
                    src={travelData[index].author.avatar}
                    alt={travelData[index].author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {travelData[index].author.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {travelData[index].author.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          <FaChevronRight className="text-gray-600" />
        </button>

        <div className="flex justify-center mt-4 gap-2 ">
          {travelData.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndices([index, (index + 1) % 3, (index + 2) % 3])
              }
              className={`w-3 h-3 rounded-full ${
                currentIndices.includes(index) ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocationIndia;
