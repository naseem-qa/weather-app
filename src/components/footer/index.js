import React from 'react';
import './footer.scss';

export default function Footer (){
  return(
    <footer id='contactUs'>
      <div className='info'>
        <a className='location' href='https://goo.gl/maps/HiQnLpz2M1PLSLcD6' target='_blank' rel='noopener'><i className=" fa fa-map-marker"></i>Amman, Jordan</a>
        <a className='mobile' href='tel:+962772000000'><i className=" fa fa-phone"></i>+962 77 20 00 00 0</a>
        <a className='email' href='mailto:izzatnaseem30@gmail.com'><i className=" fa fa-send"></i>izzatnaseem30@gmail.com</a>
      </div>

      <div className='contact'>
        <h2>About The Application:</h2>
        <p>This appliction provides the user with a detailed forecast.</p>
        <div className='social'>
          <a href='https://www.facebook.com/nasa.eq' target='_blank' rel='noopener'><i className="facebook fa fa-facebook-f"></i></a>
          <a href='https://github.com/naseem-qa' target='_blank' rel='noopener'><i className="github fa fa-github"></i></a>
          <a href=' https://www.linkedin.com/in/nassem-qatameen-cemp®-0b4654194' target='_blank' rel='noopener'><i className="twitter fa fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}