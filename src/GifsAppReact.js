import React, { useState } from 'react';
import { ContainerSection } from './components/ContainerSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const GifsAppReact = () => {

  const [categories, setCategories] = useState([]);

  return (
    <>
      <Header />
      <ContainerSection setCategories={setCategories} categories={categories}/> 
      <Footer />
    </>
  );
}

export default GifsAppReact;
