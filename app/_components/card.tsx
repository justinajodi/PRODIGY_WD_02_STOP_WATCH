"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Lap from "./lap";
// interface LapTime {
//   hours: number;
//   minutes: number;
//   seconds: number;
//   miliSeconds: number;
// }
export function CardWithForm() {
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
    <>
      <Card className="w-[350px] bg-transparent   backdrop-blur-sm ">
        <CardHeader className="flex grid-cols-1 items-center">
          <CardTitle className="font-black text-4xl  text-white">Stop Watch</CardTitle>
          <CardDescription className="text-muted text-zinc-400">start using it now.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div >
            <h1 className="font-extrabold text-4xl ml-4 text-zinc-100">{formatWithLeadingZero(hours)} : {formatWithLeadingZero(minutes)}: {formatWithLeadingZero(seconds)} : {formatWithLeadingZero(miliSeconds)}
            </h1>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handlePause}>Pause</Button>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleLap}>Lap</Button>
        </CardFooter>

      <div className="text-zinc-100 ">
      <Lap laps={laps} />
      </div>
      </Card>
    </>
  );
}
