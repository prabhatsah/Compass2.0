import { Routes, Route } from "react-router-dom";
import Login from "@/CustomComponents/Auth/Login.jsx";
import Discover from "@/CustomComponents/Discover.jsx";
import LandingPage from "@/CustomComponents/LandingPage/LandingPage.Jsx";
import Trip from "@/CustomComponents/TripDetails/TripComponent.jsx";
import ProfileLandingPage from "@/CustomComponents/UserProfile/ProfileLandingPage.jsx";
import Register from "@/CustomComponents/Auth/Register";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/profile" element={<ProfileLandingPage />} />
    </Routes>
  );
}
