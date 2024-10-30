import React, { useEffect, useState } from 'react'

export function useModifiedTimings(timings) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('inside modified prayer')

    if (timings) {
      const modifiedData = Object.entries(timings).map(([key, value]) => ({
        "keys": key,
        "value": value
      }));
      setData(modifiedData);
    } else {
      setData([]);
    }
  }, [timings]);

  return data;
}