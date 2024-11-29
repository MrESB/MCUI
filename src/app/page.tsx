'use client';
import * as React from 'react'; 

import Header from "@/components/Header/Header"
import NewsCards from "@/components/NewsCard/NewsCards"
import FSHImg from "@/components/FSHImg/FSHImg"
export default function Home() {  
  return (
    <>
    <Header></Header>
    <FSHImg></FSHImg>
    <NewsCards></NewsCards>
    </>
  );
}
