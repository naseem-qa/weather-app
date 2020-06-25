import React from 'react';

import './app.scss';
import Header from './header/';
import Location from './main/location.js';
import Footer from './footer/';


export default function App(){
  return(
    <>
      <Header />
      <Location />
      <Footer />
    </>
  );
}
