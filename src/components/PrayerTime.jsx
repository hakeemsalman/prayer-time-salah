"use client"
import PrayerList from './PrayerList'
import React, {useState, useEffect}from 'react'
import axios from 'axios'



const PrayerTime = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [location, setLocation] = useState('Secunderabad');

  function getPrayerTimes() {
    
  }

  
  useEffect( () => {
    console.log('inside useeffect');
    setLoading(true);
    setError(null);
    
      axios.get(`https://api.aladhan.com/v1/timingsByCity/10-07-2024?city=${location}&country=India&method=1`)
      .then(response => {
        console.log(response.data);
        const data = response.data.data;
        setPrayerTimes(data.timings);
        }
      );

      getPrayerTimes();
    setLoading(false);
  },[] )
  

  return (
    <div className='flex flex-col w-full gap-5 px-3'>
      {!prayerTimes ? (
        <span>Loading...</span>
      ) : (
        Object.entries(prayerTimes).map(([time, value], index) => (
          <PrayerList key={index} time={time} value={value} />
        ))
      )}
    </div>
  );
  
}

export default PrayerTime