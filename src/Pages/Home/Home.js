import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import BackgroundHome from '../../Components/Background/BackgroundHome'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from './Style'

function Home() {
    let { setters } = useContext(GlobalStateContext)


    useEffect(() => {

    }, [])

    const buttons = (context) => {

        // const grd = context.createLinearGradient(1200, 80, 50, 100);
        // grd.addColorStop(0, 'rgba(60, 60, 60, 0.5)');
        // grd.addColorStop(1, 'rgba(240, 240, 240)');

        // context.fillStyle = grd;
        // context.fillRect(660, 360, 350, 110);
        // context.fillRect(340, 480, 660, 110);
        context.drawImage(U.playButtonRef, 660, 300, 900, 650)
        context.drawImage(U.howToPlayButtonRef, 350, 420, 900, 650)


    }

    return (
        <S.Container>
            <BackgroundHome />
            <Canvas draw={buttons} width="1000" height="600" style={{ position: 'relative', margin: '-80% 0 4% 10%' }} />
        </S.Container>
    );
}

export default Home;