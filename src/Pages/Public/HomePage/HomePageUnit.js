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
import background from '../../../img/backgroud.mp4'

function HomePageUnit() {
    const history = useHistory()
    const [mario, setMario] = useState(false)
    const [luigi, setLuigi] = useState(false)
    const [princess, setPrincess] = useState(false)
    const [yoshi, setYoshi] = useState(false)
    const [realy, setRealy] = useState(true)
    const timeOut = useRef(null)
    const play = useRef()

    useEffect(() => {
    }, [mario, luigi, princess, yoshi, realy])

    const keyPush = (e) => {
        console.log(e)
        clearTimeout(timeOut.current)
            ;
        switch (e.key) {
            case "z": // Mario jumps
                return (setMario(true),
                    timeOut.current = setTimeout(() => {
                        setMario(false);
                    }, 300)
                )
            case "x": // Luigi jumps
                return (setLuigi(true),
                    timeOut.current = setTimeout(() => {
                        setLuigi(false);
                    }, 300)
                )
            case "c": // Princess Peach jumps
                return (setPrincess(true),
                    timeOut.current = setTimeout(() => {
                        setPrincess(false);
                    }, 300)
                )
            case "v": // Yoshi jumps
                return (setYoshi(true),
                    timeOut.current = setTimeout(() => {
                        setYoshi(false);
                    }, 300)
                )
            default:
                break;
        }
    }

    const onClickPlay = () => {
        play.current.play()
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
                <button onClick={() => onClickPlay()}>PLAY</button>

            {mario ?
                <S.Character marioJumps src={marioJumps} ></S.Character>
                :
                <S.Character marioFront src={marioFront} ></S.Character>
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
            {/* } */ }
        </S.ContainerAll >
    );
}

export default HomePageUnit;