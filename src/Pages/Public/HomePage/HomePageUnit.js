import React, { useEffect, useState, useRef } from 'react'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import marioFront from '../../../img/MarioFront.png'
import marioJumps from '../../../img/MaurioJumps.png'
import luigiFront from '../../../img/LuigiFront.png'
import luigiJumps from '../../../img/LuigiJumps.png'
import princessPeachFront from '../../../img/PrincessPeachFront.png'
import princessPeachJumps from '../../../img/PrincessPeach_jumps.webp'
import yoshiFront from '../../../img/YoshiFront.png'
import yoshiJumps from '../../../img/YoshiJumps.webp'
import background from '../../../img/background.mp4'
// import videojs from 'video.js';

function HomePageUnit() {
    const history = useHistory()
    const [mario, setMario] = useState(false)
    const [luigi, setLuigi] = useState(false)
    const [princess, setPrincess] = useState(false)
    const [yoshi, setYoshi] = useState(false)
    const [realy, setRealy] = useState(true)
    const [currentTime, setCurrentTime] = useState(0);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const timeOut = useRef(null)
    const play = useRef()

    // Seconds calculation
    const seconds = Math.floor((currentTime % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = currentTime % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsTimeRunning(!isTimeRunning);
    };

    // Method to reset timer back to 0
    const resetTimer = () => {
        setCurrentTime(0);
    };


    useEffect(() => {
        let intervalTimer
        if (isTimeRunning) {
            intervalTimer = setInterval(() => setCurrentTime(currentTime + 1), 10)
        }
        return () => clearInterval(intervalTimer)

    }, [isTimeRunning, currentTime])

    useEffect(() => {
        if (seconds === 15 && milliseconds === 53) {
            resetTimer()
        }
    }, [seconds, milliseconds])
    // mario, luigi, princess, yoshi, realy

    const keyPush = (e) => {
        clearTimeout(timeOut.current)
        switch (e.key) {
            case "z": // Mario jumps
                return (setMario(true), setPrincess(false), setLuigi(false), setYoshi(false),
                    timeOut.current = setTimeout(() => {
                        setMario(false);
                    }, 300)
                )
            case "x": // Luigi jumps
                return (setMario(false), setPrincess(false), setLuigi(true), setYoshi(false),
                    timeOut.current = setTimeout(() => {
                        setLuigi(false);
                    }, 300)
                )
            case "c": // Princess Peach jumps
                return (setMario(false), setPrincess(true), setLuigi(false), setYoshi(false),
                    timeOut.current = setTimeout(() => {
                        setPrincess(false);
                    }, 300)
                )
            case "v": // Yoshi jumps
                return (setMario(false), setPrincess(false), setLuigi(false), setYoshi(true),
                    timeOut.current = setTimeout(() => {
                        setYoshi(false);
                    }, 300)
                )
            default:
                return false
        };
    }


    const onClickPlay = () => {
        play.current.play()
        startAndStop()
    }

    return (
        <S.ContainerAll onKeyDown={keyPush} tabIndex={0}>
            {/* {realy ?
                <div>
                    <S.Button main onClick={() => setRealy(false)}>Start</S.Button>
                </div> : */}
            <S.Container>
                <S.Video ref={play}>
                    <S.Source src={background} type='video/mp4' />
                </S.Video>
                {/* <video
                    style={{ width: "100%" }}
                    ref={play}
                    className="video-js"
                /> */}

                <button onClick={() => onClickPlay()}>PLAY</button>

                <button onClick={() => resetTimer()}>reset timer</button>
                {!mario ?
                    <S.Character marioFront src={marioFront} ></S.Character>
                    :
                    mario && currentTime !== 115 ? <>Perdeu uma moeda</> :
                        <S.Character marioJumps src={marioJumps} ></S.Character>
                }
                {luigi ?
                    <S.Character luigiJumps src={luigiJumps} ></S.Character>
                    :
                    <S.Character luigiFront src={luigiFront} ></S.Character>
                }
                {princess ?
                    <S.Character princessJumps src={princessPeachJumps} ></S.Character>
                    :
                    <S.Character princessFront src={princessPeachFront} ></S.Character>
                }
                {yoshi ?
                    <S.Character yoshiJumps src={yoshiJumps} ></S.Character>
                    :
                    <S.Character yoshiFront src={yoshiFront} ></S.Character>
                }
            </S.Container>
            <span>Current Time: {currentTime}</span>
            {/* } */}
        </S.ContainerAll >
    );
}

export default HomePageUnit;