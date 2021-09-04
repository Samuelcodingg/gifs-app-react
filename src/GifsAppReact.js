import React, { useState } from 'react';
import { ContainerSection } from './components/ContainerSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const GifsAppReact = () => {

  const [categories, setCategories] = useState([]);
  const [listCategories, setListCategories] = useState([]);

  return (
    <>
      <Header />
      <ContainerSection listCategories={listCategories} setListCategories={setListCategories} setCategories={setCategories} categories={categories}/> 
      <Footer />
    </>
  );
}

export default GifsAppReact;
