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
    // Check sessionStorage if the popup has already been shown in this tab
    const hasPopupShown = sessionStorage.getItem('videoPopupShown');

    if (!hasPopupShown) {
      // Set the timer to show the popup after 10 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Mark in sessionStorage that the popup has been shown
        sessionStorage.setItem('videoPopupShown', 'true');
      }, 10000);

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
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
