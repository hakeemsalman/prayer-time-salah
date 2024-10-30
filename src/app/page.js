"use client"
import PrayerTime from "@/components/PrayerTime";
import RefreshButton from "@/components/RefreshButton";
import TimeBox from "@/components/TimeBox";
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [currentSalahTime, setcurrentSalahTime] = useState('')
  const handleCurrentTime = ({hour, minute})=>{
    console.log('hour, minute', hour, minute);
  }

  const handleSalahTimes = (data) => {
  //    let result = data.map(item=>(
  //   console.log('item', item)
  //  ))
  //  setcurrentSalahTime(result);
  }
  
   return (
    <main className="flex m-auto items-center flex-col gap-3 px-6 py-10 max-w-lg">
          <TimeBox setCurrentTime={handleCurrentTime}/>
          <PrayerTime setSalahTimes={handleSalahTimes}/>
    </main>
  );
}
