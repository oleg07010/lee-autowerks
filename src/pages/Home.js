import React from 'react';
import Hero from '../components/Hero/Hero';
import Divider from '@mui/material/Divider';
import CardLayout from '../components/CardLayout/CardLayout';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Divider /> 
        <CardLayout /> 
    </div>
  )
}

export default Home;