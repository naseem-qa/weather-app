import React from 'react';

import Header from './header/';
import Location from './main/location.js';
import Footer from './footer/';

import './app.scss';

export default function App(){
  return(
    <>
      <Header />
      <Location />
      <Footer />
    </>
  );
}
