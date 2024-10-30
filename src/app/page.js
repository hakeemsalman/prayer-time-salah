"use client"
import PrayerTime from "@/components/PrayerTime";
import RefreshButton from "@/components/RefreshButton";
import TimeBox from "@/components/TimeBox";
import React, { useEffect, useState } from 'react';

export default function Home() {
   return (
    <main className="flex m-auto items-center flex-col gap-3 px-6 py-10 max-w-lg">

          <TimeBox />
          <PrayerTime/> {/* Pass the setter function */}

    
    </main>
  );
}
