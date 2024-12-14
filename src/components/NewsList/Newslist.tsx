"use client";
import { Grid2 } from "@mui/material";
import axios from "axios";
import NewsCard from "@/components/NewsCard/NewsCards";
import { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    axios
      .get("/api/news-cards")
      .then(function (response) {
        if (response?.data?.data) {
          setNews(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Grid2 container justifyContent="center" alignItems="center" spacing={2}>
      {news?.map((item, index) => <NewsCard key={index} data={item} />)}
    </Grid2>
  );
};
export default NewsList;
