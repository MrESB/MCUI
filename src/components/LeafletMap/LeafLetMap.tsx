import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button } from "@mui/material";
import { LatLngExpression } from "leaflet";

interface LocationMapProps {
  onClose: () => void;
}

const LocationMap: React.FC<LocationMapProps> = ({ onClose }) => {
  // State to store current position
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  // Fetch user's current position using geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update state with the user's current coordinates
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting current position", error);
          // Handle geolocation error if needed
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  if (!position) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ color: "white" }}>Loading your location...</Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "white",
          color: "black",
          "&:hover": { backgroundColor: "gray" },
        }}
      >
        Close
      </Button>
      <Box sx={{ width: "90%", height: "80%" }}>
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Your current location!</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default LocationMap;
