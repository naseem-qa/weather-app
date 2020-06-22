import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.js';

import $ from 'jquery';
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

  const getTime = () =>{
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    $('.hour').html(h);
    $('.minute').html(m);
    $('.second').html(s);

    // let r = parseInt(s) * 1;
    // let g = parseInt(s) * 3;
    // let b = parseInt(s) * 5;

    // $('.search').css('background', `rgb(${r},${g},${b})`);
  };

  useEffect(()=>{
    let interval = setInterval(getTime, 1000);
  },[]);

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
        <div className='clock-box' test={$('.clock-box').html()}>
          <h2>THE TIME NOW IS</h2>
          <div className='clock'>
            <div><span className='hour'>00</span><span>Hours</span></div>
            <div><span className='minute'>00</span><span>Minutes</span></div>
            <div><span className='second'>00</span><span>Seconds</span></div>
          </div>
          {/* <div className='date'>DD - MM - YYYY</div> */}
        </div>
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