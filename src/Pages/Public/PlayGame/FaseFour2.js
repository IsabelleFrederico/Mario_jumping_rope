import React, { useEffect, useContext, useState, useRef } from 'react'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import Canvas from '../../../Components/Canvas';
import marioFront from '../../../img/MarioFront.png'
import marioJumps from '../../../img/MaurioJumps.png'
import luigiFront from '../../../img/LuigiFront.png'
import luigiJumps from '../../../img/LuigiJumps.png'
import princessPeachFront from '../../../img/PrincessPeachFront.png'
import princessPeachJumps from '../../../img/PrincessPeach_jumps.webp'
import yoshiFront from '../../../img/YoshiFront.png'
import yoshiJumps from '../../../img/YoshiJumps.webp'
import background from '../../../img/background.mp4'
import useCanvas from '../../../Hooks/useCanvas';
// import GlobalStateContext from '../../../Global/GlobalStateContext'

// function HomePageUnit() {
//     const history = useHistory()
//     // let { setters } = useContext(GlobalStateContext)

//     const [mario, setMario] = useState(false)
//     const [luigi, setLuigi] = useState(false)
//     const [princess, setPrincess] = useState(false)
//     const [yoshi, setYoshi] = useState(false)
//     const [nextStep, setNextStepe] = useState(true)
//     const [currentTime, setCurrentTime] = useState(0);
//     const [isTimeRunning, setIsTimeRunning] = useState(false);
//     const timeOut = useRef(null)
//     const play = useRef(null)
//     const [canvasRef,] = useCanvas('../../../img/background.mp4', 1000, 870);
//     // const { draw, ...rest } = props
//     // const ref = useCanvas(draw)


//     // const backgroundVideo = play.current;

//     // const background = document.createElement("video");

//     // background.src = '../../../img/background.mp4'


//     // Seconds calculation
//     const seconds = Math.floor((currentTime % 6000) / 100);

//     // Milliseconds calculation
//     const milliseconds = currentTime % 100;

//     // Method to start and stop timer
//     const startAndStop = () => {
//         setIsTimeRunning(!isTimeRunning);
//     };

//     // Method to reset timer back to 0
//     const resetTimer = () => {
//         setCurrentTime(0);
//     };


//     const draw = (context, count, canvas, backgroundVideo) => {
//         // context.drawImage(background, 1000, 110);
//         // context.drawImage(backgroundVideo, 0, 0, canvas.width, canvas.height)
//         // context.drawImage(marioFrontImg, 0, 0, 100, 100)
//         context.clearRect(0, 0, context.canvas.width, context.canvas.height)
//         context.fillStyle = 'grey'
//         const d = count % 800
//         context.fillRect(10 + d, 10, 100, 100)
//     }


//     useEffect(() => {
//         let intervalTimer
//         if (isTimeRunning) {
//             intervalTimer = setInterval(() => setCurrentTime(currentTime + 1), 10)
//         }
//         return () => clearInterval(intervalTimer)

//     }, [isTimeRunning, currentTime])

//     useEffect(() => {
//         if (seconds === 15 && milliseconds === 53) {
//             resetTimer()
//         }
//     }, [seconds, milliseconds])
//     // mario, luigi, princess, yoshi, realy

//     const keyPush = (e) => {
//         clearTimeout(timeOut.current)
//         switch (e.key) {
//             case "z": // Mario jumps
//                 if (((currentTime >= 126 && currentTime <= 130) || (currentTime >= 399 && currentTime <= 406) || (currentTime >= 384 && currentTime <= 386) || (currentTime >= 506 && currentTime <= 507) || (currentTime >= 610 && currentTime <= 613) || (currentTime >= 707 && currentTime <= 710) || (currentTime >= 823 && currentTime <= 824) || (currentTime >= 942 && currentTime <= 944) || (currentTime >= 1050 && currentTime <= 1053) || (currentTime >= 1167 && currentTime <= 1171) || (currentTime >= 1252 && currentTime <= 1253) || (currentTime >= 1319 && currentTime <= 1321) || (currentTime >= 1432 && currentTime <= 1434) || (currentTime >= 1490 && currentTime <= 1501))) {
//                     setNextStepe(true)
//                 } else {
//                     setNextStepe(false)
//                 }
//                 return (setMario(true), setPrincess(false), setLuigi(false), setYoshi(false),
//                     // setJump(play.current.currentTime),
//                     timeOut.current = setTimeout(() => {
//                         setMario(false);
//                     }, 300)
//                 )
//             case "x": // Luigi jumps
//                 if (((currentTime === 135 || currentTime <= 141) || (currentTime >= 252 || currentTime <= 255) || (currentTime >= 370 || currentTime <= 373) || (currentTime >= 496 || currentTime <= 499) || (currentTime >= 605 || currentTime <= 606) || (currentTime >= 701 || currentTime <= 705) || (currentTime >= 822 || currentTime <= 826) || (currentTime >= 941 || currentTime <= 943) || (currentTime >= 1055 || currentTime <= 1057) || (currentTime >= 1180 || currentTime <= 1186) || (currentTime >= 1258 || currentTime <= 1260) || (currentTime >= 1449 || currentTime <= 1453))) {
//                     setNextStepe(true)
//                 } else {
//                     setNextStepe(false)
//                 }

//                 return (setMario(false), setPrincess(false), setLuigi(true), setYoshi(false),
//                     timeOut.current = setTimeout(() => {
//                         setLuigi(false);
//                     }, 300)
//                 )
//             case "c": // Princess Peach jumps
//                 if (((currentTime >= 150 || currentTime <= 155) || (currentTime >= 262 || currentTime <= 267) || (currentTime >= 381 || currentTime <= 385) || (currentTime >= 507 || currentTime <= 512) || (currentTime >= 612 || currentTime <= 615) || (currentTime >= 713 || currentTime <= 716) || (currentTime >= 838 || currentTime <= 840) || (currentTime >= 954 || currentTime <= 958) || (currentTime >= 1067 || currentTime <= 1076) || (currentTime >= 1193 || currentTime <= 1197) || (currentTime >= 1267 || currentTime <= 1268) || (currentTime >= 1461 || currentTime <= 1465))) {
//                     setNextStepe(true)
//                 } else {
//                     setNextStepe(false)
//                 }

//                 return (setMario(false), setPrincess(true), setLuigi(false), setYoshi(false),
//                     timeOut.current = setTimeout(() => {
//                         setPrincess(false);
//                     }, 300)
//                 )
//             case "v": // Yoshi jumps
//                 if (((currentTime >= 160 || currentTime <= 163) || (currentTime >= 275 || currentTime <= 276) || (currentTime >= 395 || currentTime <= 397) || (currentTime >= 519 || currentTime <= 521) || (currentTime >= 619 || currentTime <= 621) || (currentTime >= 723 || currentTime <= 726) || (currentTime >= 849 || currentTime <= 852) || (currentTime >= 962 || currentTime <= 974) || (currentTime >= 1082 || currentTime <= 1088) || (currentTime >= 1201 || currentTime <= 1204) || (currentTime >= 1343 || currentTime <= 1347) || (currentTime >= 1467 || currentTime <= 1469))) {
//                     setNextStepe(true)
//                 } else {
//                     setNextStepe(false)
//                 }

//                 return (setMario(false), setPrincess(false), setLuigi(false), setYoshi(true),
//                     timeOut.current = setTimeout(() => {
//                         setYoshi(false);
//                     }, 300)
//                 )
//             default:
//                 return false
//         };
//     }

//     const onClickPlay = () => {
//         play.current.play()
//         startAndStop()
//     }

//     const pause = () => {
//         play.current.pause()
//         startAndStop()
//     }
//     const reset = () => {
//         play.current.currentTime = 0
//         resetTimer()
//     }


//     const action = () => {
//         return (
//             <>
//                 {!mario ?
//                     <S.Character marioFront src={marioFront}></S.Character>
//                     :
//                     <S.Character marioJumps src={marioJumps} ></S.Character>
//                 }
//                 {!luigi ?
//                     <S.Character luigiFront src={luigiFront} ></S.Character>
//                     :
//                     <S.Character luigiJumps src={luigiJumps} ></S.Character>
//                 }
//                 {!princess ?
//                     <S.Character princessFront src={princessPeachFront} ></S.Character>
//                     :
//                     <S.Character princessJumps src={princessPeachJumps} ></S.Character>
//                 }
//                 {!yoshi ?
//                     <S.Character yoshiFront src={yoshiFront} ></S.Character>

//                     :
//                     <S.Character yoshiJumps src={yoshiJumps} ></S.Character>
//                 }
//             </>
//         )
//     }

//     return (
//         <>
//             <S.ContainerAll onKeyDown={keyPush} tabIndex={0}>
//                 {/* {realy ?
//                 <div>
//                     <S.Button main onClick={() => setRealy(false)}>Start</S.Button>
//                 </div> : */}
//                 <S.Container>
//                     {/* <canvas ref={canvasRef} draw={draw} width={1500} height={870} style={{ border: '1px solid black' }} /> */}

//                     <Canvas ref={canvasRef} draw={draw} width={1500} height={870} style={{ border: '1px solid black' }} />
//                     <S.Video width={1500} height={870} ref={play}>
//                         <S.Source src="../../../img/background.mp4" type='video/mp4' />
//                     </S.Video>
//                     {/* <button onClick={() => onClickPlay()}>PLAY</button>

//                     <button onClick={() => pause()}>pause all</button>
//                     <button onClick={() => reset()}>reset</button>
//                     <button onClick={() => resetTimer()}>reset timer</button>
//                     {/* {action()} */}
//                     {/* {nextStep ?
//                         action() :
//                         play.current.pause()
//                         // <> Perdeu uma moeda</>
//                     } */}

//                     {/* : */}
//                     {/* <>Perdeu uma moeda{reset()}</> */}
//                     {/* } */}

//                 </S.Container>

//             </S.ContainerAll >
//             <span style={{ fontSize: '32px' }}>Current Time:   </span>

//         </>
//     );
// }

// export default HomePageUnit;