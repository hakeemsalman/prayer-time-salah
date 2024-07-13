"use client"
import PrayerTime from "@/components/PrayerTime";
import RefreshButton from "@/components/RefreshButton";
import TimeBox from "@/components/TimeBox";

import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define the type for the context state
interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

export default function Home() {

  const timings = null;

  return (
    <main className="flex m-auto items-center flex-col gap-3 px-6 py-10 max-w-lg">
      <TimeBox/>
      <PrayerTime/>
    </main>
  );
}
