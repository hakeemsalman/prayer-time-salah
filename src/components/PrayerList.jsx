import {  Source_Sans_3 } from 'next/font/google';
import React from 'react'

const source3 = Source_Sans_3({ subsets: ["latin"] });

const PrayerList = ({time, value}) => {
  return (
    <div className={`${source3} flex font-bold text-xl bg-white px-5 py-3 rounded-xl shadow-xl justify-between w-full `}>
      <span>{time}</span>
      <span>{value}</span>
    </div>
  )
}

export default PrayerList