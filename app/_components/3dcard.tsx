"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

// import { button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Lap from "./lap";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "./3dcardcomponent";
import {
  Clock,
  History,
  HistoryIcon,
  Pause,
  Play,
  RotateCcw,
  Timer,
} from "lucide-react";

export function ThreeDCardDemo() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [miliSeconds, setMiliSeconds] = useState<number>(0);
  const [laps, setLaps] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const formatWithLeadingZero = (number: number): string => {
    if (number < 10) return "0" + number;
    else return number.toString();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setMiliSeconds((miliSeconds) => {
          if (miliSeconds >= 99) {
            setSeconds((seconds) => {
              if (seconds >= 59) {
                setMinutes((minutes) => {
                  if (minutes >= 59) {
                    setHours((prevHours) => prevHours + 1);
                    return 0;
                  } else {
                    return minutes + 1;
                  }
                });
                return 0;
              } else {
                return seconds + 1;
              }
            });
            return 0;
          } else {
            return miliSeconds + 1;
          }
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = (): void => {
    setIsRunning(true);
  };

  const handlePause = (): void => {
    setIsRunning(false);
  };

  const handleLap = (): void => {
    const lapTime: string =
      formatWithLeadingZero(hours) +
      ":" +
      formatWithLeadingZero(minutes) +
      ":" +
      formatWithLeadingZero(seconds) +
      "." +
      formatWithLeadingZero(miliSeconds);
    setLaps((prevLaps) => [...prevLaps, lapTime]);
  };

  const handleReset = (): void => {
    setIsRunning(false);
    setMiliSeconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setLaps([]);
  };
  return (
    <div>
      <CardContainer className="inter-var w-[340px]">
        <CardBody className="bg-gradient-to-b from-zinc-100 to-zinc-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border   text-black ">
          <CardItem translateZ="50" className="font-black text-4xl flex justify-items-center ">
            <Timer className="m-2 mt-1 mr-2 ml-4" size={30} strokeWidth={2} /> Stop Watch
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4 ">
            <div>
              {/* <h1 className="font-extrabold text-3xl text-center">
                {formatWithLeadingZero(hours)} :{" "}
                {formatWithLeadingZero(minutes)}:{" "}
                {formatWithLeadingZero(seconds)} :{" "}
                {formatWithLeadingZero(miliSeconds)}
              </h1> */}
               <h1 className="font-extrabold text-3xl ml-8">{formatWithLeadingZero(hours)} : {formatWithLeadingZero(minutes)}: {formatWithLeadingZero(seconds)} : {formatWithLeadingZero(miliSeconds)}  </h1>
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-4 ml-10 mr-10">
            <CardItem translateZ={50}>
              <button
                className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black"
                onClick={handleStart}
              >
                <Play strokeWidth={2} />
              </button>
            </CardItem>
            <CardItem translateZ={50}>
              <button
                className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black"
                onClick={handlePause}
              >
                <Pause strokeWidth={2} />
              </button>
            </CardItem>
            <CardItem translateZ={50}>
              {" "}
              <button
                className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black"
                onClick={handleReset}
              >
                <RotateCcw strokeWidth={2} />
              </button>
            </CardItem>
            <CardItem translateZ={50}>
              {" "}
              <button
                className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black"
                onClick={handleLap}
              >
                <History strokeWidth={2} />
              </button>
            </CardItem>
          </div>

          <div className="mt-10 ">
            <Lap laps={laps} />
          </div>
        </CardBody>
      </CardContainer>
    </div>
    // <Card className="w-[350px] bg-transparent   backdrop-blur-sm ">
    // <CardHeader className="flex grid-cols-1  items-center">
    //   <CardTitle className="font-extrabold text-4xl text-zinc-100 tracking-tighter flex"> <Timer className="m-2 mt-1" size={30} strokeWidth={2} /> Stop Watch </CardTitle>

    // </CardHeader>
    // <CardContent className="flex justify-between">
    //   <div >
    //     <h1 className="font-extrabold text-4xl ml-4 text-zinc-100">{formatWithLeadingZero(hours)} : {formatWithLeadingZero(minutes)}: {formatWithLeadingZero(seconds)} : {formatWithLeadingZero(miliSeconds)}
    //     </h1>
    //   </div>
    // </CardContent>
    // <CardFooter className="flex justify-between ml-10 mr-10">

    //   <button  className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black"onClick={handleStart}><Play  strokeWidth={2}/></button>
    //   <button className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black " onClick={handlePause}><Pause  strokeWidth={2}/></button>
    //   <button className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black " onClick={handleReset}><RotateCcw  strokeWidth={2}/></button>
    //   <button  className="font-normal hover:text-zinc-900 text-zinc-100 transition ease-in-out  rounded-full hover:bg-zinc-300 p-2 bg-black "onClick={handleLap}><History strokeWidth={2}/></button>
    // </CardFooter>

    // <div className="text-zinc-100 ">
    // <Lap laps={laps} />
    // </div>
    // </Card>
  );
}
