import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button } from "@mui/material";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

interface LocationMapProps {
  onClose: () => void;
}

const LocationMap: React.FC<LocationMapProps> = ({ onClose }) => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    const fetchLocationByIP = async () => {
      try {
        const apiKey = "f61d1b1f4b614a0ba54271e875e9df21";
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
        const data = await response.json();
  
        if (data.latitude && data.longitude) {
          setPosition([data.latitude, data.longitude]);
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLocationByIP();
  }, []);

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
        <Box sx={{ color: "white", direction: "rtl" }}>در حال بارگذاری...</Box>
      </Box>
    );
  }

  const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

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
          <Marker position={position} icon={customIcon}>
            <Popup>موقعیت مکانی تقریبی شما!</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default LocationMap;
