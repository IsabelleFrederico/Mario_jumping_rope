import React, { useRef, useState } from 'react'
import Canvas from '../Canvas';
import * as U from '../../Utils/ImagesSrc';
import "./Style.css"
import useCanvas from '../../Hooks/useCanvas';
import * as S from '../style'

function PhaseOne(props) {
    const ropeRef = useRef(null)
    ropeRef.current = "../../img/background.mp4"


    const mario = (context, angle, DEG2RAD, t, dt, mario) => {
        const height = context.canvas.height;
        const width = context.canvas.width;

        // BackGround
        context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
        // BackGround End

        // Mario
        const marioPlay = {
            image: mario ? U.marioJumpsRef : U.marioFrontRef,
            x: mario ? width - 655 : width - 670,
            y: mario ? width - 935 : width - 855,
            w: mario ? width - 710 : width - 700,
            h: mario ? height - 270 : height - 300
        }

        context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
        // Mario End

        // Rope
        // ropeRef.current = ref.current = "../../img/background.mp4"

        const rope = {
            image: U.ropeRef,
            video: ropeRef.current,
            x: 0,
            y: 0,
            w: 1000,
            h: 3000
        }

        // context.drawImage(rope.image, rope.x, rope.y, rope.w, rope.h)
        context.drawImage(rope.image, rope.x, rope.y, rope.w, rope.h);

        context.save();
        context.translate(width / 2, height / 2); // move cursor to canvas center
        context.rotate(DEG2RAD * angle); // rotate canvas
        context.drawImage(rope.image, -rope.w / 2, -rope.h / 2); // draw img center at cursor center
        angle += dt / 16.67 * 6; // increment angle ~ 360 deg/sec
        context.restore();

        // Rope End

    }


    return (
        <>
            <Canvas id="phaseOne" draw={mario} height="600" width="1000" />
        </>
    )
}
export default PhaseOne;