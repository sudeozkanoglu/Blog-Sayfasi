import React from 'react';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 
        heading="HAKKIMDA"
        text="Ben Junior Backend Developer Atakan Bayrak"  
      />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;