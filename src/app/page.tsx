'use client';
import * as React from 'react'; 

import Header from "@/components/Header/Header"
import FSHImg from "@/components/FSHImg/FSHImg"
import NewsList from '@/components/NewsList/Newslist';
export default function Home() {  
  return (
    <>
      <Header></Header>
      <FSHImg></FSHImg>
      <NewsList></NewsList>
    </>
  );
}
