import React from 'react'
import Canvas from '../../Components/Canvas';
import * as U from '../../Utils/ImagesSrc';

function BackgroundHowToPlay() {

    const background = (context) => {
        context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)
    }

    return (

        <Canvas draw={background} width="1000" height="600" style={{ border: '1px solid black' }} />

    )
}
export default BackgroundHowToPlay;