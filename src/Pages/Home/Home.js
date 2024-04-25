import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import BackgroundHome from '../../Components/Background/BackgroundHome'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'
import './Style.css'

function Home() {
    let { requests } = useContext(GlobalStateContext)


    useEffect(() => {

    }, [])

    const buttonPlay = (context) => {

        context.drawImage(U.playButtonRef, -15, -60, 900, 650)

    }

    const buttonHowToPlay = (context) => {

        context.drawImage(U.howToPlayButtonRef, -15, -60, 900, 650)

    }

    return (
        <S.Container>
            <BackgroundHome />
            <Canvas id='buttonPlay' draw={buttonPlay} height="100" onClick={() => { requests.renderScreen("Play") }} />
            <Canvas id='buttonHowToPlay' draw={buttonHowToPlay} height="100" width="600" onClick={() => { requests.renderScreen("HowToPlay") }} />
        </S.Container>
    );
}

export default Home;