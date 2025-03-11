import React from 'react';
import BannerCarousel from './BannerCarousel'; // Adjust the path as needed
import ShopPage from '../../user/user/shop';
import GardenServicesCards from './GardenServicesCards';
import WhyBhoomi from './WhyBhoomi';

const LandingPage = () => {
  // ... your existing code

  return (
    <>
      {/* Your header here, if any */}
      < BannerCarousel />      
      <GardenServicesCards />
      <ShopPage />
      <WhyBhoomi />

      {/* The rest of your existing sections */}
      <section className="relative overflow-hidden">
        {/* ... existing hero section or other sections */}
      </section>
      {/* etc. */}
    </>
  );
};

export default LandingPage;
