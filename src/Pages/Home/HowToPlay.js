import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import BackgroundHowToPlay from '../../Components/Background/BackgroundHowToPlay'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'
import './Style.css'

function HowToPlay() {
    let { requests } = useContext(GlobalStateContext)

    const BackgroundTextBox = (context) => {
    }

    const title = (context) => {

        context.drawImage(U.howToPlayButtonRef, -25, -60, 900, 650)

    }

    const textBox = (context) => {

        context.font = "27px Arial";
        var txt = "Your goal is to jump rope, in each stage a charac-\n\nter will be added who will hold the commands res-\n\npectively: z, x, c, v. \n\nCoins indicate your number of attempts, which in-\n\ncreases as the stage progresses.\n\nThe scoreboard shows you how many jumps are\n\nstill needed to finish the stage.";
        var x = 10;
        var y = 35;
        var lineheight = 15;
        var lines = txt.split('\n');

        for (var i = 0; i < lines.length; i++) {
            context.fillText(lines[i], x, y + (i * lineheight))
        }
    }

    const playButton = (context) => {

        context.drawImage(U.playButtonRef, -25, -60, 900, 650)

    }



    return (
        <S.Container>
            <BackgroundHowToPlay />
            <Canvas id='backgroundTextBox' draw={BackgroundTextBox} />
            <Canvas id='title' draw={title} height="100" width="600" />
            <Canvas id='text' draw={textBox} height="300" width="600" />
            <Canvas id='play' draw={playButton} height="100" width="300" onClick={() => { requests.renderScreen("Play") }} />
        </S.Container>
    );
}

export default HowToPlay;