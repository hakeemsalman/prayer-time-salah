"use client"
import PrayerList from './PrayerList'
import React, { useState, useEffect } from 'react'
import { useModifiedTimings } from './useModifiedTimings';
import {useGetTimings} from './useGetTimings';

const PrayerTime = ({setSalahTimes}) => {
 
  const {error , timings} = useGetTimings();
  const modifiedTimings = useModifiedTimings(timings);

  useEffect(() => {
    setSalahTimes(modifiedTimings)
  }, [timings])
  

  return (
    <div className='flex flex-col w-full gap-5 px-3'>
      {!error ?
        modifiedTimings && modifiedTimings.map(item => (
          <PrayerList key={item.keys} time={item.keys} value={item.value} />
        ))
        : <span>{error}</span>
      } 
    </div>
  );
};

export default PrayerTime;
