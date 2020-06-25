import React, { useEffect } from 'react';
import './header.scss';

export default function Header (){
  useEffect(()=>{
    const header = document.querySelector('header');
    const sectionOne = document.querySelector('.backImg');

    const sectionOneOptions = {
      rootMargin: '-500px 0px 0px 0px',
    };

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver,
    ) {

      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

  });
  return(
    <header>
      <img  src={require(`../../asset/logo.png`)} />
      <nav>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#contactUs'>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}