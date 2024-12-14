import React from "react";
import { Box, CardMedia } from "@mui/material";

const FullScreenImage = () => {
  return (
    <CardMedia
      component="img"
      sx={{
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      image="/img/FSHImg.jpg"
    ></CardMedia>
  );
};

export default FullScreenImage;
