import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.js';

function Location (props){
  const [location, setLocation] = useState({});
  useFetch('http://localhost:3030/location',{},setLocation);
  console.log('__STATE__', location);

  const showState = () => {
    console.log('__STATE__ 2', location);
  };

  return(
    <>
      <h3 onClick={showState}>********** </h3>
    </>
  );
}

export default Location ;