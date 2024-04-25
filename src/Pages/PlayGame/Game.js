import React, { useEffect, useContext } from 'react'
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

    const phases = () => {

        switch (states.phase) {
            case 1: // Mario 
                return <PhaseOne />
            case 2: // Mario Luigi
                return <PhaseTwo />
            case 3: // Mario Luigi Princess
                return <PhaseThree />
            case 4: // Mario Luigi Princess Yoshi
                return <PhaseFour />
            default:
                return <PhaseOne />
        };
    }

    return (
        <S.Container>
            {phases()}
        </S.Container>
    );
}

export default Game;