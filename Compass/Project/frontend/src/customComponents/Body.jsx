import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Discover from "./Discover.jsx";
import LandingPage from "./LandingPage/LandingPage.Jsx";
import Trip from "./TripDetails/TripComponent.jsx";
import ProfileLandingPage from "./UserProfile/ProfileLandingPage.jsx";
import Header from "./MainComponents/Header.jsx";
import Register from "./Auth/Register.jsx";
import Footer from "./Footer.jsx";
import mountains from "../assets/Meta Assets/mountains-002.jpg";

export default function Body() {
  return (
    <Router>
      {/* <div className="body-container ">
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
        <Footer />
      </div> */}

      {/* <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{ backgroundImage: `url(${mountainsVideo})` }}
        ></div>

        <div className="relative z-10">
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
          <Footer />
        </div>
      </div> */}

      <div className="relative w-[98vw] h-[95vh] overflow-hidden rounded-3xl my-5 mx-auto">
        {/* Content (Header, Body, Footer) */}
        <div className="relative z-10">
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
          <Footer />
        </div>
      </div>
    </Router>
  );
}
