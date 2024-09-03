import React from 'react';
import Heroos from '../Homepage/Hero/Hero.gif'

const Hero = () => {
  return (
    <section className="relative">
      <img loading="lazy" src={Heroos} alt="Hero background" className="object-contain w-full aspect-[1.90]  max-md:max-w-full" />
    </section>
  );
};

export default Hero;