import React from 'react';
import Hero from '../Components/Homepage/Hero-Homepage';
import Stack from '../Components/Homepage/Stack-Homepage';
import About from '../Components/Homepage/About-Homepage';
import PortfolioHomepage from '../Components/Homepage/Portfolio-Homepage';
import Contact from '../Components/Homepage/Contact-Homepage';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stack/>
      <About/>
      <PortfolioHomepage/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
 