import profilePic from "../../assets/UserProfile.jpeg";

export default function BasicDetails({ user }) {
  if (!user) return null;

  return (
    <div className="h-full bg-blue-50 rounded-2xl flex flex-col items-center pt-[5vh] gap-5">
      <img
        src={user.profile_image}
        alt="profile-pic"
        className="rounded-full h-[20vh]"
      />
      <div className="flex flex-col items-center">
        <span className="font-bold text-gray-700">Alisha Barik</span>
        <span className="text-gray-500 text-sm">alisha.barik@gmail.com</span>
      </div>
      <div className="bg-white rounded-lg w-[85%] py-5 ">
        <div className="flex gap-3 justify-center mb-4">
          <div className="flex flex-col items-center">
            <span className="text-xs bg-purple-200 px-2 py-1 rounded-lg text-purple-900">
              Trips completed
            </span>
            <span className="text-sm font-bold text-gray-600">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs bg-purple-200 px-2 py-1 rounded-lg text-purple-900">
              Trips completed
            </span>
            <span className="text-sm font-bold text-gray-600">100</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-xs bg-purple-200 px-2 py-1 rounded-lg text-purple-900">
              Trips completed
            </span>
            <span className="text-sm font-bold text-gray-600">100</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs bg-purple-200 px-2 py-1 rounded-lg text-purple-900">
              Trips completed
            </span>
            <span className="text-sm font-bold text-gray-600">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
