import React from 'react'
import Canvas from '../../Components/Canvas';
import * as U from '../../Utils/ImagesSrc';

function BackgroundHome() {

    const background = (context) => {
        context.drawImage(U.backgroundHomeRef, 0, 0, context.canvas.width, context.canvas.height)
    }

    return (

        <Canvas draw={background} width="1000" height="600" style={{ marginLeft: '10%', border: '1px solid black', width: '80%' }} />

    )
}
export default BackgroundHome;