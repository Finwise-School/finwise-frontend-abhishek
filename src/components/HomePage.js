import React, { useState, useEffect } from 'react';
import Layout from './Homepage/Layout';
import Hero from './Homepage/Hero';
import FinancialTools from './Homepage/FinancialTools';
import Testimonials from './Homepage/Testimonials';
import FAQ from './Homepage/FAQ';
import CallToAction from './EarlyAccessTemplate';
import VideoPopup from './VideoPopup'; // Import the VideoPopup component

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Hero />
      <FinancialTools />
      <Testimonials />
      <FAQ />
      <CallToAction />
      
      {showPopup && <VideoPopup />}
    </Layout>
  );
};

export default HomePage;
