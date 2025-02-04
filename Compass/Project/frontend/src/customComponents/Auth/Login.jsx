import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoginImage from "@/assets/Meta Assets/LoginImage.svg";
import axios from "axios";
import { API_END_POINT } from "@/utils/contant";
import { login } from "@/redux/slices/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "@/Global.css";

// Login Modal
const LoginModal = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-[30vw] ">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#245C7C]">Login</h2>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <div className="input-with-icon">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-with-icon">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full !bg-sky-900 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="text-[#245C7C] font-semibold ml-1"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    //if (isLogin) {
    const user = { email, password };
    try {
      const res = await axios.post(`${API_END_POINT}/login`, user, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(login(res.data.user));
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section class="relative mx-auto h-">
        <div className="h-[60vh] flex bg-sky-800 mx-10 rounded-2xl items-center justify-around shadow">
          <div className="flex flex-col justify-center">
            <LoginModal
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={getInputData}
            />
          </div>
          <div class="">
            <img src={LoginImage} alt="bgImage" className="h-[50vh] " />
          </div>
        </div>
      </section>
    </>
  );
}
