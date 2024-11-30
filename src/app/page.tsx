'use client';
import * as React from 'react'; 
import { Container, ThemeProvider } from '@mui/material';
import Header from "@/components/Header/Header"
import FSHImg from "@/components/FSHImg/FSHImg"
import NewsList from '@/components/NewsList/Newslist';

export default function Home() {  
  return (
    <>
      <Header/>
      <FSHImg></FSHImg>
      <NewsList></NewsList>
    </>
  );
}
