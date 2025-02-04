import { FaEnvelope, FaUser, FaTransgender } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMapLocationDot } from "react-icons/fa6";
import { useState } from "react";

export default function EditModal({ handleSave, setIsModalOpen, user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [gender, setGender] = useState(user.gender);
  const [address, setAddress] = useState(user.address);
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //   <div className="bg-white p-6 rounded-lg shadow-lg w-96">
    //     <h2 className="text-lg font-semibold mb-4">Edit {currentField}</h2>
    //      <input
    //       type="text"
    //       value={editedValue}
    //       onChange={(e) => setEditedValue(e.target.value)}
    //       className="w-full border p-2 rounded"
    //     />
    //     <input
    //       type="text"
    //       value={editedValue}
    //       onChange={(e) => setEditedValue(e.target.value)}
    //       className="w-full border p-2 rounded"
    //     />
    //     <input
    //       type="text"
    //       value={editedValue}
    //       onChange={(e) => setEditedValue(e.target.value)}
    //       className="w-full border p-2 rounded"
    //     />
    //     <input
    //       type="text"
    //       value={editedValue}
    //       onChange={(e) => setEditedValue(e.target.value)}
    //       className="w-full border p-2 rounded"
    //     />
    //     <div className="mt-4 flex justify-end">
    //       <button
    //         className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
    //         onClick={() => setIsModalOpen(false)}
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         className="bg-blue-500 text-white px-4 py-2 rounded"
    //         onClick={handleSave}
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-[100vw]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">
          Personal Information
        </h2>
        <form className="space-y-4">
          <div className="input-with-icon">
            <FaUser />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-with-icon">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-with-icon">
            <SlCalender />
            <div>
              <input
                type="date"
                placeholder="Birthday"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
              />
            </div>
          </div>
          <div className="dropdown-with-icon ">
            <FaTransgender />
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-with-icon">
            <FaMapLocationDot />
            <input
              type="text"
              placeholder="Address"
              value={birthday}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[#245C7C] text-white px-4 py-2 rounded"
              onClick={handleSave}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
