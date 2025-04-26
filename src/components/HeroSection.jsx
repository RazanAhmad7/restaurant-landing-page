import React from 'react';
import "../styles/HeroSectionStyle.css";
import MainButton from '../common/MainButton';

const HeroSection = () => {
  return (
    <div className="hero-container container-fluid">
      <div className="hero-content">
        <div className="text-content">
          <h1>مرحبا بك في مطعم الجود</h1>
          <p>مكانك المثالي للاستمتاع بأطباق مبتكرة وشهية تم إعدادها بأعلى معايير الجودة</p>
          <MainButton text={"احجز الآن"}/>
        </div>
        <div className="image-container">
          <img className='img-fluid' src="src/assets/Screenshot_2025-04-03_010405-removebg-preview.png" alt="طبق باستا" />
        </div>
      </div>
      <div className="wave-background">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="5%" stopColor="#D60F14"></stop>
              <stop offset="95%" stopColor="#FFE5E5"></stop>
            </linearGradient>
          </defs>
          <path d="M 0,700 L 0,397 C 122.10714285714289,372.4821428571429 244.2148571428578,407.9642857142857 347,422 C 449.7857142857142,436.0357142857143 533.2499999999998,428.625 669,368 C 804.7500000000002,307.375 992.7857142857144,193.5357142857143 1130,342 C 1267.2142857142856,90.4642857142857 1353.6071428571427,151.23214285714285 1440,112 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;