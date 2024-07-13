"use client"
import { Mulish, Source_Sans_3 } from "next/font/google";
import { useEffect, useState } from "react";


const mulish = Mulish({ subsets: ["latin"] });
const source3 = Source_Sans_3({ subsets: ["latin"] });


const CurrentTime : React.FC = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect( () => {
    let timerId: NodeJS.Timeout;
      timerId = setInterval(() => {
        let dt = new Date();
        setHour(dt.getHours());
        setMinute(dt.getMinutes());
        setSecond(dt.getSeconds());
      }, 1000);
  
      // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

 

  return (
      <div className={`${source3.className } font-bold text-3xl md:text-6xl text-white`}>
        <span>{( hour <= 9) ? '0'+hour : hour }:</span>
        <span>{ (minute <=9 ) ? '0'+minute : minute}:</span>
        <span>{ (second <=9 ) ? '0'+second : second}</span>
      </div>
  );
};

export default CurrentTime;


// function formatAMPM(date) {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0'+minutes : minutes;
//   var strTime = hours + ':' + minutes + ' ' + ampm;
//   return strTime;
// }