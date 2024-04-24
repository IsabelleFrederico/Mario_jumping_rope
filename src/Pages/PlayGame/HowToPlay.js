import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import BackgroundHowToPlay from '../../Components/Background/BackgroundHowToPlay'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'
import './Style.css'

function HowToPlay() {
    let { request } = useContext(GlobalStateContext)


    const buttonPlay = (context) => {

        context.drawImage(U.playButtonRef, -15, -60, 900, 650)

    }

    const buttonHowToPlay = (context) => {

        context.drawImage(U.howToPlayButtonRef, -15, -60, 900, 650)

    }

    return (
        <S.Container>
            <BackgroundHowToPlay />
            <Canvas id='buttonPlay' draw={buttonPlay} height="100" onClick={() => { request.renderScreen("Play") }} />
        </S.Container>
    );
}

export default HowToPlay;