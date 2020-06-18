import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import './style.scss';



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
      {/* <h3 onClick={showState}>**********</h3> */}
      <section className='backImg'>
        <img src={require('../../asset/main.jpg')} />
        <a href='#search'>LET'S GET STARTED</a>
      </section>
      <section className="search" id='search'>
        <form onSubmit={getData} action='#result'>
          <input name='city' placeholder="TYPE THE NAME OF THE CITY :" />
          <button type='submit'>submit</button>
        </form>
      </section>
      <section className="result" id='result'> 
        {weather.map((data,idx)=>(
          <div className="card">
            <img src={require(`../../asset/${data.icon}.png`)} alt={data.icon} />
            <div className="info">
              <h3>{data.time}</h3>
              <p>{data.forecast}</p>
            </div>
          </div>
        ))
        }
      </section>
    </>
  );
}



export default Location ;