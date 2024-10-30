import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function useGetTimings() {

  const [timings, setTimings] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log('inside useEffect prayer')
    const fetchPrayerTimes = async () => {

      const currentDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date()).replace(/\//g, '-');
      

      try {
        const responseIP = await axios.get(`https://api.ipify.org?format=json`);
        const response = await axios.get(`https://ipinfo.io/${responseIP.data.ip}/json`);
        const arr = response.data.loc.split(',');
        const responseData = await axios.get(`http://api.aladhan.com/v1/timings/${currentDate}?latitude=${arr[0]}&longitude=${arr[1]}&method=1`);
        setTimings(responseData.data.data.timings);
        console.log('inside try')
        console.log(timings)
      } catch (err) {
        setError("Failed to fetch prayer times.");
      }
    }

    fetchPrayerTimes();
  }, []);
  return {error, timings}
}
