import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "30vh",
  position: "relative",
};

const fullScreenStyle = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: "white",
};

const buttonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 10,
  padding: "8px 12px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const GoogleMapComponent = ({ apiKey, source, destination }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mapRef = useRef(null);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    if (mapRef.current && source && destination) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(source);
      bounds.extend(destination);
      mapRef.current.fitBounds(bounds);
    }
  }, [source, destination, isFullScreen]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div
        style={isFullScreen ? fullScreenStyle : containerStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)} // Mobile touch support
        onTouchEnd={() => setIsHovering(false)}
      >
        {/* Toggle Fullscreen Button */}
        <button
          style={{
            ...buttonStyle,
            display: isFullScreen || isHovering ? "block" : "none",
            backgroundColor: isFullScreen ? "#dc3545" : "#007bff",
          }}
          onClick={toggleFullScreen}
        >
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </button>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={isFullScreen ? fullScreenStyle : containerStyle}
          center={source} // Default center; auto-adjusted via bounds
          zoom={10}
          onLoad={(map) => {
            mapRef.current = map;
            if (source && destination) {
              const bounds = new window.google.maps.LatLngBounds();
              bounds.extend(source);
              bounds.extend(destination);
              map.fitBounds(bounds);
            }
          }}
        >
          <Marker position={source} label="Source" />
          <Marker position={destination} label="Destination" />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
