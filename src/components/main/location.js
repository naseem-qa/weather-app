import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.js';

function Location (props){
  const [location, setLocation] = useState({});
  // useFetch('http://localhost:3030/location',{},setLocation);
  
  // console.log('__STATE__', location);
  
  const gitData = (cityName)=>{

    fetch('http://localhost:3030/location')
      .then(data => {
        data.json()
          .then(data => setLocation(data));
      });
  };
  const showState = () => {
  // .then(data => console.log('tessst', data));
    console.log('__STATE__ 2', location);
  };

  return(
    <>
      <h3 onClick={showState}>********** </h3>
      <form>
        <input type='radial' value='seattle' />
      </form>
    </>
  );
}

export default Location ;