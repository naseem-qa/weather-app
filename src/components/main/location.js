import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.js';

function Location (props){
  const [location, setLocation] = useState({});
  const [weather , setWeather] = useState([]);
  // useFetch('http://localhost:3030/location',{},setLocation);
  
  // console.log('__STATE__', location);
  
  const getData = (e)=>{
    e.preventDefault();
    console.log('cityName',e.target.city.value);
    let cityName = e.target.city.value;
    fetch('http://localhost:3030/location', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ cityName: cityName }),
    })
      .then(res => {
        res.json()
          .then(data => {
            setLocation(data);
            getWeather(data);
          });
      });
  };

  const getWeather =(cityInfo) =>{
    let lat = cityInfo.latitude;
    let lng = cityInfo.longitude;
    fetch('http://localhost:3030/weather', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ lat: lat , lng:lng }),
    })
      .then(res =>{
        res.json()
          .then(data=>{
            setWeather(data);
          });
      });
  };

  const showState = () => {
  // .then(data => console.log('tessst', data));
    console.log('__STATE__ 2', location);
    console.log('__STATE__ 3', weather);
  };

  return(
    <>
      <h3 onClick={showState}>**********</h3>
      <form onSubmit={getData}>
        <input name='city' />
        <button type='submit'>submit</button>
      </form>
      <div>
        {weather.map((data,idx)=>(
          <p>
            {data.forecast}{data.time}
          </p>
        ))
        }
      </div>
    </>
  );
}



export default Location ;