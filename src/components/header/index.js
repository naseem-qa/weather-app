import React from 'react';
import './header.scss';

export default function Header (){
  return(
    <header>
      <h1 className='logo'>
        NASEEM's <span>Weather</span>  
      </h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
        </ul>
      </nav>
    </header>
  );
}