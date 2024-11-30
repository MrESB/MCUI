'use client';
import { Grid } from "@mui/material";
import axios from "axios";
import NewsCard from "@/components/NewsCard/NewsCards";
import { useEffect, useState } from "react";

const NewsList = () => {
  const [news , setNews] = useState([]);
  const getNews = async () => {
    axios  
      .get("/api/news-cards")
      .then(function (response) {
        // handle success
        if (response?.data?.data) {
            setNews(response.data.data)
            console.log(response.data.data)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  
        useEffect(() => {
        getNews();
        console.log("sssss")
    }, []);

  return (
    <Grid container justifyContent="center" 
                    alignItems="center"
                    spacing={2}>
      {news?.map((item, index) => (
        <NewsCard key={index} data={item} />
      ))}
    </Grid>
  );
};
export default NewsList;
