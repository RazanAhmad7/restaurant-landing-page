import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Specials from "./components/Specials";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import FAQ from "./components/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Specials />
      <Menu />
      <Reservations />
      <Testimonials />
      <Contact />
      <SocialMedia />
      <FAQ />
    </div>
  );
}

export default App;
