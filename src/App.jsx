import React from "react";
import Navbar from "./common/Navbar";
import HeroSection from "./components/HeroSection";
import Specials from "./components/Specials";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import SocialMedia from "./common/Footer";
import FAQ from "./components/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./common/Footer";
import FoxComponent from "./components/FoxComponent";



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
      <FAQ />
      <FoxComponent/>
      <Footer />

    </div>
  );
}

export default App;
