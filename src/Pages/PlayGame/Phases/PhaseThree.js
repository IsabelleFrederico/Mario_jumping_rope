import React, { useRef, useState, useContext } from 'react'
import Canvas from '../../../Components/Canvas';
import * as U from '../../../Utils/ImagesSrc';
import useCanvas from '../../../Hooks/useCanvas';
import * as S from '../../../Components/style'
import GlobalStateContext from '../../../Global/GlobalStateContext';

function PhaseThree() {
    const ropeRef = useRef(null)
    ropeRef.current = "../../img/background.mp4"
    let { requests } = useContext(GlobalStateContext)


    const draw = (context, angle, DEG2RAD, t, dt, mario, luigi, princess, yoshi, phase) => {
        const height = context.canvas.height;
        const width = context.canvas.width;
        phase = 3
        // BackGround
        context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
        // BackGround End

        // Mario
        const marioPlay = {
            image: mario ? U.marioJumpsRef : U.marioFrontRef,
            x: mario ? width - 790 : width - 805,
            y: mario ? width - 935 : width - 855,
            w: mario ? width - 710 : width - 700,
            h: mario ? height - 270 : height - 300
        }

        context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
        // Mario End

        // Luigi
        const luigiPlay = {
            image: luigi ? U.luigiJumpsRef : U.luigiFrontRef,
            x: luigi ? width - 630 : width - 570,
            y: luigi ? width - 940 : width - 855,
            w: luigi ? width - 710 : width - 835,
            h: luigi ? height - 270 : height - 330
        }

        context.drawImage(luigiPlay.image, luigiPlay.x, luigiPlay.y, luigiPlay.w, luigiPlay.h)
        // Luigi End

        // Princess
        const princessPlay = {
            image: princess ? U.princessPeachJumpsRef : U.princessPeachFrontRef,
            x: princess ? width - 410 : width - 410,
            y: princess ? width - 920 : width - 880,
            w: princess ? width - 800 : width - 800,
            h: princess ? height - 300 : height - 300
        }

        context.drawImage(princessPlay.image, princessPlay.x, princessPlay.y, princessPlay.w, princessPlay.h)
        // Princess End

        // Rope
        // ropeRef.current = ref.current = "../../img/background.mp4"

        // const rope = {
        //     image: U.ropeRef,
        //     video: ropeRef.current,
        //     x: 0,
        //     y: 0,
        //     w: 1000,
        //     h: 3000
        // }

        // // context.drawImage(rope.image, rope.x, rope.y, rope.w, rope.h)
        // context.drawImage(rope.image, rope.x, rope.y, rope.w, rope.h);

        // context.save();
        // context.translate(width / 2, height / 2); // move cursor to canvas center
        // context.rotate(DEG2RAD * angle); // rotate canvas
        // context.drawImage(rope.image, -rope.w / 2, -rope.h / 2); // draw img center at cursor center
        // angle += dt / 16.67 * 6; // increment angle ~ 360 deg/sec
        // context.restore();

        // Rope End

    }


    return (
        <>
            <Canvas id="phaseThree" draw={draw} height="600" width="1000" />
            <button onClick={() => { requests.renderScreen("PhaseFour") }}> proxima fase aqui</button >

        </>
    )
}

export default PhaseThree;