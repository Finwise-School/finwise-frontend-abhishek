import React from 'react';
import Layout from './Homepage/Layout';
import Hero from './Homepage/Hero';
import FinancialTools from './Homepage/FinancialTools';
import Testimonials from './Homepage/Testimonials';
import FAQ from './Homepage/FAQ';
import CallToAction from './EarlyAccessTemplate';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FinancialTools />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;