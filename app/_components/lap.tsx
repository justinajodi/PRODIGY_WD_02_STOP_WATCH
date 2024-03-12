 "use client"
import * as React from "react"
interface LapsProps {
  laps: string[];
}

const Laps: React.FC<LapsProps> = ({ laps }) => {

  const calculateTimeDifference = (timeString1: string, timeString2: string): string => {
    const time1 = new Date(`1970-01-01T${timeString1}Z`);
    const time2 = new Date(`1970-01-01T${timeString2}Z`);
    const timeDiff = Math.abs(Number(time2)-Number(time1));
    const hours = Math.floor(timeDiff / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((timeDiff % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((timeDiff % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = ((timeDiff % 1000) / 10).toString().padStart(2, '0');
    const resultString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    return resultString;
  };

  return (

    <div className="laps" style={{ display: (laps.length) ? 'block' : 'none' }}>
      <div className="flex justify-between ml-20 mr-20 font-bold text-xl ">
    
      <h3>Time</h3>
      <h3>Total</h3>
     </div> 
      <ul className="ml-12 mr-12 mb-10">
        {laps.map((lap, index) => (
          <li key={index}>
           <div className="flex justify-between">
            <span>{calculateTimeDifference(lap, (index !== 0) ? laps[index - 1] : "00:00:00.00")}</span>
            <span>{lap}</span>
           </div>
          </li>
        ))}
      </ul>
</div>
  );
};

export default Laps;



