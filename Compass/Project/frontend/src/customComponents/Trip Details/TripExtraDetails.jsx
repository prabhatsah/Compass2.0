import { useState } from "react";
import Megh1 from "../../assets/Meghalaya/Megh1.jpeg";
import Megh2 from "../../assets/Meghalaya/Megh2.jpeg";
import Megh3 from "../../assets/Meghalaya/Megh3.jpg";
import Megh4 from "../../assets/Meghalaya/Megh4.jpeg";
import Megh5 from "../../assets/Meghalaya/Megh4.jpeg";

export default function TripExtraDetails() {
  const [activeTab, setActiveTab] = useState("glimpsesOfthePlace");

  function handleTabClick(tabClicked) {
    setActiveTab(tabClicked);
  }

  return (
    <div class="w-full">
      <div class="relative right-0">
        <div class="w-full">
          <div class="relative right-0">
            <ul
              class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md border"
              data-tabs="tabs"
              role="list"
            >
              <li class="z-30 flex-auto text-center rounded-md">
                <a
                  onClick={() => handleTabClick("glimpsesOfthePlace")}
                  class={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 rounded-lg  ${
                    activeTab === "glimpsesOfthePlace"
                      ? "bg-blue-900 text-white"
                      : "bg-white"
                  }`}
                >
                  <span class="ml-1">Glipses of the place</span>
                </a>
              </li>
              <li
                onClick={() => handleTabClick("staysAndFooding")}
                class="z-30 flex-auto text-center rounded-md "
              >
                <a
                  class={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 rounded-lg cursor-pointer ${
                    activeTab === "staysAndFooding"
                      ? "bg-blue-900 text-white"
                      : "bg-white"
                  }`}
                >
                  <span class="ml-1">Stays and fooding</span>
                </a>
              </li>
              <li
                onClick={() => handleTabClick("activities")}
                class="z-30 flex-auto text-center rounded-md "
              >
                <a
                  class={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 rounded-lg cursor-pointer ${
                    activeTab === "activities"
                      ? "bg-blue-900 text-white"
                      : "bg-white"
                  }`}
                >
                  <span class="ml-1">Activities</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div data-tab-content="" class="py-5">
          <div
            class={`block opacity-100 act ${
              activeTab === "glimpsesOfthePlace" ? "" : "hidden"
            }`}
            id="glipses"
          >
            <div
              role="tabpanel"
              class="grid w-full grid-cols-3 gap-4  font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="html"
            >
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh1}
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh2}
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh3}
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh4}
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh5}
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  class="w-full h-40 max-w-full rounded-lg"
                  src={Megh3}
                  alt="image-photo"
                />
              </div>
            </div>
          </div>
          <div
            class={`block opacity-100 act ${
              activeTab === "staysAndFooding" ? "" : "hidden"
            }`}
            id="stays"
          >
            Stays and fooding
          </div>
          <div
            class={`block opacity-100 act ${
              activeTab === "activities" ? "" : "hidden"
            }`}
            id="activities"
          >
            Activities
          </div>
        </div>
      </div>
    </div>
  );
}
