import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/AfterNav';
import 'bootstrap/dist/css/bootstrap.css';
import Mobiling from './components/Mobiling';
import FooterSection from './components/FooterSection';
import HeaderLine from './components/FirstSection';


function App() {
  return (
    
    <div>
     <HeaderLine />
          <Mobiling />
     <FooterSection style={{background: "#021E35"}}/>

    </div>
  );
}

export default App;
