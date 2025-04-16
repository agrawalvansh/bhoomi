import React from 'react';
import NavTile from './NavTile'; // Adjust the path as needed
import GardenServicesCards from './GardenServicesCards';
import Categories from './Categories';
import AppDownloadSection from './AppDownloadSection';
import FeaturedProducts from './FeaturedProducts';
const LandingPage = () => {
  return (
    <>
      <NavTile />
      <Categories /> 
      <GardenServicesCards />
      <FeaturedProducts />  
      <AppDownloadSection />
    </>
  );
};

export default LandingPage;
