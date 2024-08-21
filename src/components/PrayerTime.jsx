"use client"
import PrayerList from './PrayerList'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Custom hook to fetch the user's current location
const useUserLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    const getUserCurrentLocation = () => {
      return new Promise((resolve, reject) => {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };

        function success(pos) {
          const crd = pos.coords;
          setLatitude(crd.latitude);
          setLongitude(crd.longitude);
          resolve();
        }

        function error(err) {
          setLocationError(`ERROR(${err.code}): ${err.message}`);
          reject(err);
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
          setLocationError("Geolocation is not supported by this browser.");
        }
      });
    };

    getUserCurrentLocation();
  }, []);

  return { latitude, longitude, locationError };
};

// Custom hook to fetch prayer times based on date and location
const usePrayerTimes = (latitude, longitude, date) => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      if (!latitude || !longitude || !date) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=1`);
        setPrayerTimes(response.data.data.timings);
      } catch (err) {
        setError("Failed to fetch prayer times.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [latitude, longitude, date]);

  return { prayerTimes, loading, error };
};

const PrayerTime = () => {
  const [date, setDate] = useState(null);

  // Use custom hooks to get location and prayer times
  const { latitude, longitude, locationError } = useUserLocation();
  const { prayerTimes, loading, error } = usePrayerTimes(latitude, longitude, date);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString().replace(/\//g, '-');
    setDate(currentDate);
  }, []);

  return (
    <div className='flex flex-col w-full gap-5 px-3'>
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : locationError ? (
        <span>{locationError}</span>
      ) : (
        prayerTimes && Object.entries(prayerTimes).map(([time, value], index) => (
          <PrayerList key={index} time={time} value={value} />
        ))
      )}
    </div>
  );
};

export default PrayerTime;
