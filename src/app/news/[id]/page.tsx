"use client";
import * as React from "react";
import {Typography, Box, CardMedia } from "@mui/material";
import { useParams } from "next/navigation";
import axios from "axios";

type news = {
  id: string;
  title: string;
  image: string;
};
type newsdetails = {
  response: string;
  data: news;
};

export default function about() {
  const param = useParams();
  const newsId = param?.id;
  const [news, setNews] = React.useState<news>();
  async function getnewsInfo() {
    const res = await axios.get<newsdetails>(`/api/news-cards/${newsId}`);
    setNews(res.data.data);
  }

  React.useEffect(() => {
    getnewsInfo();
  }, []);

  return (
    
      <Box display={"flex"} flexDirection={"column"} gap={2} margin={2} alignItems={"center"} sx={{backgroundColor:"orange", borderRadius:"5px"}}>
        <CardMedia
      component= "img"
      sx={{
        height: "40%",
        width: "40%", 
        borderRadius:"5px",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}
      image = {news?.image}
    >
    </CardMedia>
    <Typography>
      Your title is: {news?.title}
    </Typography>
      </Box>

  );
}
