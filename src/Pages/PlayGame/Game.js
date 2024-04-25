import React, { useEffect, useContext, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Canvas from '../../Components/Canvas'
import * as S from '../Style'
import PhaseOne from '../../Components/Phases/PhaseOne'
import PhaseTwo from '../../Components/Phases/PhaseOne'
import PhaseThree from '../../Components/Phases/PhaseOne'
import PhaseFour from '../../Components/Phases/PhaseOne'
import './Style.css'

function Game() {
    let { states, setters, requests } = useContext(GlobalStateContext)
    const [aqui, setAqui] = useState(false)


    useEffect(() => {
        if (aqui === true) {
            phases(states.phase)
            setAqui(false)
        }
    }, [])

    const phases = (phase) => {

        switch (phase) {
            // case 1: // Mario 
            //     return <PhaseOne />
            case 2: // Mario Luigi
                console.log('aqui oh')
                return <PhaseTwo />
            case 3: // Mario Luigi Princess
                return <PhaseThree />
            case 4: // Mario Luigi Princess Yoshi
                return <PhaseFour />
            default:
                return <PhaseOne />
        };
    }

    const nextfase = () => {
        setAqui(true)
        setters.setPhase(states.phase + 1)
    }

    return (
        <S.Container>
            {phases()}
            <button onClick={() => nextfase()}> proxima fase aqui</button>
        </S.Container>
    );
}

export default Game;