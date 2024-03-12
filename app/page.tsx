import React from "react";
import { CardWithForm } from "./_components/card";
import { ThreeDCardDemo } from "./_components/3dcard";

function Home() {
  return (
    <div className="flex mt-10 align-middle justify-center ">
      {/* <CardWithForm /> */}
      <ThreeDCardDemo/>
    </div>
  );
}

export default Home;

// import { Button } from "@/components/ui/button";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {

// // //   useEffect(() => {

// // // }, [])
// var ms = 0,
// s = 0,
// m = 0,
// h = 0;
// var timer: any;
// var display = document.querySelector(".timer-Display");
// // var laps = document.querySelector(".laps");
// // const resetLap = () => {
// // laps!.innerHTML = "";
// // };
// const getTimer = () => {
// return (
//   (h < 10 ? "0" + h : h) +
//   " : " +
//   (m < 10 ? "0" + m : m) +
//   " : " +
//   (s < 10 ? "0" + s : s) +
//   " : " +
//   (ms < 10 ? "0" + ms : ms)
// );
// // };

// // const lap = () => {
// // if (timer) {
// //   var Li = document.createElement("li");
// //   Li.innerHTML = getTimer();
// //   laps!.appendChild(Li);
// // }
// // };
// // const reset = () => {
// // stopTimer();
// // ms = 0;
// // s = 0;
// // m = 0;
// // h = 0;
// // display!.innerHTML = getTimer();
// // };
// // const start = () => {
// // if (!timer) {
// //   timer! = setInterval(run, 10);
// // }
// // };
// // const restart = () => {
// // if (timer) {
// //   reset();
// //   start();
// // }
// // };
// // const stopTimer = () => {
// // clearInterval(timer!);
// // timer = false;
// // };
// // const pause = () => {
// // stopTimer();
// // };
// // const run = () => {
// // display!.innerHTML = getTimer();
// // ms++;
// // if (ms == 100) {
// //   ms = 0;
// //   s++;
// // }
// // if (s == 60) {
// //   s = 0;
// //   m++;
// // }
// // if (m == 60) {
// //   m = 0;
// //   h++;
// // }

// // if (h == 13) {
// //   h = 1;
// // }
// // };
// const [timer, setTimer] = useState<number>(0);
// const [isRunning, setIsRunning] = useState<boolean>(false);

// const timeInterval = useRef<NodeJS.Timeout | null>(null);

// const start = (): void => {
//   if (isRunning) return;
//   setIsRunning(true);
//   timeInterval.current = setInterval(() => {
//     setTimer((prev: number) => prev + 1);
//   }, 10);
// };

// const pause = (): void => {
//   if (!isRunning) return;
//   setIsRunning(false);
//   clearInterval(timeInterval.current!);
// };

// const reset = (): void => {
//   setIsRunning(false);
//   clearInterval(timeInterval.current!);
//   setTimer(0);
// };

// const formatTime = (timer: number): { minutes: string, seconds: string, milliseconds: string } => {
//   const minutes: string = Math.floor(timer / 60000)
//     .toString()
//     .padStart(2, "0");
//   const seconds: string = Math.floor((timer / 1000) % 60)
//     .toString()
//     .padStart(2, "0");
//   const milliseconds: string = (timer % 1000).toString().padStart(3, "0");

//   return { minutes, seconds, milliseconds };
// };

// const { minutes, seconds, milliseconds } = formatTime(timer);
//   return (
//     <>
//     <div>
//       <div>00 : 00 : 00 : 00</div>
//       <ul></ul>
//       <div>

//         <a onClick={start}>
//           <Button id="startTimer">Start</Button>
//         </a>

//         <a onClick={pause}>
//           <Button id="pauseTimer">Pause</Button>
//         </a>

//         <a onClick={reset}>
//           <Button id="resetTime">Reset</Button>
//         </a>

//         {/* <a onClick={() => restart()}>
//           <Button id="restartTimer">Restart</Button>
//         </a>

//         <a onClick={() => lap()}>
//           <Button id="lap">Lap</Button>
//         </a>

//         <a onClick={() => resetLap()}>
//           <Button id="resetLap">Reset Laps</Button>
//         </a> */}
//       </div>
//     </div>

//   </>
//   );
// }

// // import { Button } from "@/components/ui/button";
// // import { useEffect } from "react";
// // export default function Home() {

// // //   useEffect(() => {

// // // }, [])
// //   var ms = 0,
// //     s = 0,
// //     m = 0,
// //     h = 0;
// //   var timer: any;
// //   var display = document.querySelector(".timer-Display");
// //   var laps = document.querySelector(".laps");
// //   const resetLap = () => {
// //     laps!.innerHTML = "";
// //   };
// //   const getTimer = () => {
// //     return (
// //       (h < 10 ? "0" + h : h) +
// //       " : " +
// //       (m < 10 ? "0" + m : m) +
// //       " : " +
// //       (s < 10 ? "0" + s : s) +
// //       " : " +
// //       (ms < 10 ? "0" + ms : ms)
// //     );
// //   };

// const lap = () => {
//   if (timer) {
//     var Li = document.createElement("li");
//     Li.innerHTML = getTimer();
//     laps!.appendChild(Li);
//   }
// };
// //   const reset = () => {
// //     stopTimer();
// //     ms = 0;
// //     s = 0;
// //     m = 0;
// //     h = 0;
// //     display!.innerHTML = getTimer();
// //   };
// //   const start = () => {
// //     if (!timer) {
// //       timer! = setInterval(run, 10);
// //     }
// //   };
// //   const restart = () => {
// //     if (timer) {
// //       reset();
// //       start();
// //     }
// //   };
// //   const stopTimer = () => {
// //     clearInterval(timer!);
// //     timer = false;
// //   };
// //   const pause = () => {
// //     stopTimer();
// //   };
// //   const run = () => {
// //     display!.innerHTML = getTimer();
// //     ms++;
// //     if (ms == 100) {
// //       ms = 0;
// //       s++;
// //     }
// //     if (s == 60) {
// //       s = 0;
// //       m++;
// //     }
// //     if (m == 60) {
// //       m = 0;
// //       h++;
// //     }

// //     if (h == 13) {
// //       h = 1;
// //     }
// //   };

// //   return (
//     // <>
//     //   <div>
//     //     <div>00 : 00 : 00 : 00</div>
//     //     <ul></ul>
//     //     <div>
//     //       <a onClick={() => start()}>
//     //         <Button id="startTimer">Start</Button>
//     //       </a>

//     //       <a onClick={() => pause()}>
//     //         <Button id="pauseTimer">Pause</Button>
//     //       </a>

//     //       <a onClick={() => reset()}>
//     //         <Button id="resetTime">Reset</Button>
//     //       </a>

//     //       <a onClick={() => restart()}>
//     //         <Button id="restartTimer">Restart</Button>
//     //       </a>

//     //       <a onClick={() => lap()}>
//     //         <Button id="lap">Lap</Button>
//     //       </a>

//     //       <a onClick={() => resetLap()}>
//     //         <Button id="resetLap">Reset Laps</Button>
//     //       </a>
//     //     </div>
//     //   </div>
//     //   <script src="script.js"></script>
//     // </>
// //   );
// // }
