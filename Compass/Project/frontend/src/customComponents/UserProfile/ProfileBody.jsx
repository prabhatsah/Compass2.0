import {
  FaEdit,
  FaPhone,
  FaFacebook,
  FaSnapchat,
  FaInstagram,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./ProfileBody.css";
import { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../../utils/contant";
import toast from "react-hot-toast";
import EditModal from "./EditModal";

export default function ProfileBody({ user }) {
  const [personalInfo, setPersonalInfo] = useState(user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date("1800-01-01"));

  // Open modal and set field to edit
  const handleEditModal = (field, value) => {
    // setCurrentField(field);
    // setEditedValue(value);
    setIsModalOpen(true);
  };

  // Save the edited value
  const handleSave = () => {
    setPersonalInfo((prev) => ({
      ...prev,
      [currentField]: editedValue,
    }));
    setIsModalOpen(false);

    updateUserData({ [currentField]: editedValue });
  };

  const updateUserData = async (updatedInfo) => {
    try {
      const updatedData = { [currentField]: editedValue };

      const res = await axios.post(`${API_END_POINT}/updateUser`, updatedInfo, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const basicSettings = [
    { key: "Email", val: "prabhat.kumar@gmail.com" },
    { key: "Password", val: "Password last changed 2 months ago" },
    {
      key: "Sign-in with",
      val: [
        <FaPhone className="text-green-800 " />,
        <FcGoogle />,
        <FaFacebook className="text-blue-800 " />,
      ],
    },
    {
      key: "Social Profile",
      val: [
        <FaSnapchat className="text-yellow-500 " />,
        <FaInstagram className="text-red-800 " />,
        <FaFacebook className="text-blue-800 " />,
      ],
    },
  ];

  return (
    <section className=" mt-[5vh] text-gray-600">
      <div>
        <h2 className="text-2xl font-bold">Profile</h2>
        <p>Welcome back to your home. Here to check yout details you saved.</p>
      </div>

      {/* personal info */}
      <div className="border rounded-md p-2 mt-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-md">Personal Information</h2>
          <FaEdit
            className="text-sky-900 cursor-pointer"
            onClick={() => handleEditModal()}
          />
        </div>

        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Name</span>
          <span className="col-span-8">{personalInfo.name}</span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Email</span>
          <span className="col-span-8">{personalInfo.email}</span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Gender</span>
          <span className="col-span-8">{personalInfo.gender}</span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Birthday</span>
          <span className="col-span-8">
            {personalInfo.birthday ? personalInfo.birthday : "YYYY-MMM-DD"}
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Address</span>
          <span className="col-span-8">
            {personalInfo.address ? personalInfo.address : "Your location"}
          </span>
        </div>
        <div className="grid grid-cols-12 flex items-center mt-4">
          <span className="col-span-3">Here since</span>
          <span className="col-span-8">{personalInfo.created_at}</span>
        </div>
      </div>

      {/* basic setting */}
      <div className="border rounded-md p-2 mt-5">
        <h2 className="font-bold text-md">Basic settings</h2>
        {basicSettings.map((setting) =>
          typeof setting.val === "object" ? (
            <div className="grid grid-cols-12 flex items-center mt-4">
              <span className="col-span-3">{setting.key}</span>
              <span className="col-span-8 flex gap-3 text-xl">
                {setting.val.map((icon) => (
                  <div className="border rounded-full p-2 text-md">{icon}</div>
                ))}
              </span>

              <span className="col-span-1">
                <FaEdit
                  className="text-sky-900 cursor-pointer"
                  onClick={handleEditModal}
                />
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-12 flex items-center mt-4">
              <span className="col-span-3">{setting.key}</span>
              <span className="col-span-8">{setting.val}</span>
              <span className="col-span-1">
                <FaEdit
                  className="text-sky-900 cursor-pointer"
                  onClick={handleEditModal}
                />
              </span>
            </div>
          )
        )}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <EditModal
          handleSave={handleSave}
          setEditedValue={setEditedValue}
          setIsModalOpen={setIsModalOpen}
          user={user}
        />
      )}
    </section>
  );
}
