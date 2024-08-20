"use client"
import PrayerTime from "@/components/PrayerTime";
import RefreshButton from "@/components/RefreshButton";
import TimeBox from "@/components/TimeBox";
import React, { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state in the parent component

  return (
    <main className="flex m-auto items-center flex-col gap-3 px-6 py-10 max-w-lg">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <TimeBox />
          <PrayerTime setLoadingParent={setIsLoading} /> {/* Pass the setter function */}
        </>
      )}
    </main>
  );
}