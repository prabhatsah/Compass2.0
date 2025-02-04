import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Discover from "./Discover";
import LandingPage from "./Landing Page/LandingPage.jsx";
import Trip from "./Trip Details/TripComponent.jsx";
import ProfileLandingPage from "./UserProfile/ProfileLandingPage.jsx";
import Header from "./Header.jsx";
import Register from "./Auth/Register.jsx";
import Footer from "./Footer.jsx";

export default function Body() {
  return (
    <Router>
      <div className="body-container">
        <Header />
        <div className="content min-h-[90vh]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/profile" element={<ProfileLandingPage />} />
          </Routes>
        </div>
        <Footer /> {/* Footer added here */}
      </div>
    </Router>
  );
}
