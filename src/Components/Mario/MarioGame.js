import React from 'react'
import Canvas from '../../../Components/Canvas';
import * as U from '../../../Utils/ImagesSrc';

function MarioGame() {

    const mario = (context, count, mario) => {
        const height = context.canvas.height;
        const width = context.canvas.width;

        const marioPlay = {
            image: mario ? U.marioJumpsRef : U.marioFrontRef,
            x: mario ? width - 655 : width - 655,
            y: mario ? width - 935 : width - 855,
            w: mario ? width - 710 : width - 730,
            h: mario ? height - 270 : height - 300
        }

        context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
    }

    return (

        <Canvas draw={mario} width="1000" height="600" style={{ border: '1px solid black' }} />

    )
}
export default MarioGame;