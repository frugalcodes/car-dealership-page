import React from 'react';
import NavBar from './NavBar';
import MainSection from './AfterNav';
import backgroundblue from '../images/backgroundblue.svg';
import '../styles/FirstSection.css';

const HeaderLine = () => (
  <div className="page-container">
    <NavBar />
    <MainSection />
    <img src={backgroundblue} alt="Background" className="background-image svg-image" />
  </div>
);

export default HeaderLine;
