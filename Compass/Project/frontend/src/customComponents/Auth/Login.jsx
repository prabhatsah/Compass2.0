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
import { LoginForm } from "@/components/login-form_old";

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
    <div className=" backdrop-contrast-50 rounded-lg p-8 max-w-md w-[30vw] ">
      <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
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
        <p className="float-end text-gray-100">Forgot your password ?</p>
        <button
          type="submit"
          className="w-full !bg-sky-900 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-400">
          Don't have an account?
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="text-white font-semibold ml-1 cursor-pointer"
          >
            Register
          </button>
        </p>
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
      <section class=" mt-24 ml-36 w-full p-6 ">
        <LoginModal
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={getInputData}
        />
      </section>
      {/* <div className="flex mt-20 w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div> */}
    </>
  );
}
