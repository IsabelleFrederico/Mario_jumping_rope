import React, { useRef, useState } from 'react'
import Canvas from '../../../Components/Canvas';
import * as U from '../../../Utils/ImagesSrc';
import useCanvas from '../../../Hooks/useCanvas';
import * as S from '../../../Components/style'

function PhaseFour() {
    const ropeRef = useRef(null)
    ropeRef.current = "../../img/background.mp4"


    const draw = (context, angle, DEG2RAD, t, dt, mario, luigi, princess, yoshi, phase) => {
        const height = context.canvas.height;
        const width = context.canvas.width;
        phase = 4
        // BackGround
        context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
        // BackGround End

        // Mario
        const marioPlay = {
            image: mario ? U.marioJumpsRef : U.marioFrontRef,
            x: mario ? width - 890 : width - 905,
            y: mario ? width - 935 : width - 855,
            w: mario ? width - 710 : width - 700,
            h: mario ? height - 270 : height - 300
        }

        context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
        // Mario End

        // Luigi
        const luigiPlay = {
            image: luigi ? U.luigiJumpsRef : U.luigiFrontRef,
            x: luigi ? width - 730 : width - 670,
            y: luigi ? width - 940 : width - 855,
            w: luigi ? width - 710 : width - 835,
            h: luigi ? height - 270 : height - 330
        }

        context.drawImage(luigiPlay.image, luigiPlay.x, luigiPlay.y, luigiPlay.w, luigiPlay.h)
        // Luigi End

        // Princess
        const princessPlay = {
            image: princess ? U.princessPeachJumpsRef : U.princessPeachFrontRef,
            x: princess ? width - 510 : width - 510,
            y: princess ? width - 920 : width - 880,
            w: princess ? width - 800 : width - 800,
            h: princess ? height - 300 : height - 300
        }

        context.drawImage(princessPlay.image, princessPlay.x, princessPlay.y, princessPlay.w, princessPlay.h)
        // Princess End

        // Yoshi
        const yoshiPlay = {
            image: yoshi ? U.yoshiJumpsRef : U.yoshiFrontRef,
            x: yoshi ? width - 300 : width - 410,
            y: yoshi ? width - 870 : width - 895,
            w: yoshi ? width - 850 : width - 650,
            h: yoshi ? height - 350 : height - 250
        }

        context.drawImage(yoshiPlay.image, yoshiPlay.x, yoshiPlay.y, yoshiPlay.w, yoshiPlay.h)
        // Yoshi End

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
            <Canvas id="phaseFour" draw={draw} height="600" width="1000" />
        </>
    )
}

export default PhaseFour;