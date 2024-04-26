import React, { useRef, useEffect, useContext } from 'react'
import Canvas from '../../../Components/Canvas';
import * as U from '../../../Utils/ImagesSrc';
import * as M from '../../../Utils/Rope';
import "./Style.css"
import GlobalStateContext from '../../../Global/GlobalStateContext';
import BackgroundHowToPlay from '../../../Components/Background/BackgroundHowToPlay';
import useCanvas from '../../../Hooks/useCanvas';
import * as S from '../../../Components/style'

function PhaseOne() {
    let { states, setters } = useContext(GlobalStateContext)



    const mario = (context, currentFrame, loops, won, mario, luigi, princess, yoshi) => {
        const height = context.canvas.height;
        const width = context.canvas.width;
        if (won) {
            // BackGround
            context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
            // BackGround End

            //Jumps
            let jumps = 16 - loops
            context.font = "100px Arial";
            var txt = jumps < 10 ? `0${jumps}` : `${jumps}`;
            var x = width - 140;
            var y = height - 410;
            context.fillText(txt, x, y)

            context.font = "50px Arial";
            var txt2 = `Jumps`;
            var x2 = width - 160;
            var y2 = height - 370;
            context.fillText(txt2, x2, y2)

            //Jumps End

            // Mario
            const marioPlay = {
                image: won ? (mario ? U.marioJumpsRef : U.marioFrontRef) : U.marioFallsRef,
                x: won ? (mario ? width - 655 : width - 670) : width - 650,
                y: won ? (mario ? width - 935 : width - 855) : width - 820,
                w: won ? (mario ? width - 710 : width - 700) : width - 800,
                h: won ? (mario ? height - 270 : height - 300) : height - 400
            }

            context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
            // Mario End

            // Rope

            const rope = {
                x: 0,
                y: 0,
                w: width,
                h: height,
                movements: [
                    M.move1Ref,
                    M.move2Ref,
                    M.move3Ref,
                    M.move4Ref,
                    M.move5Ref,
                    M.move6Ref,
                    M.move7Ref,
                    M.move8Ref,
                    M.move9Ref,
                    M.move10Ref,
                    M.move11Ref,
                    M.move12Ref,
                    M.move13Ref,
                    M.move14Ref,
                    M.move15Ref,
                    M.move16Ref,
                    M.move17Ref,
                    M.move18Ref,
                    M.move19Ref,
                    M.move20Ref,
                    M.move21Ref,
                    M.move22Ref,
                    M.move23Ref
                ]
            }

            context.drawImage(rope.movements[currentFrame], rope.x, rope.y, rope.w, rope.h);

            // Rope End

            // Coins 
            const coins = {
                image: U.coinRef,
                x: 5,
                y: 5,
                w: width - 960,
                h: height - 560
            }
            // for (let y = 4; y > attempts; y++) {

            //     let div = d.createElement('div');
            //     choc.appendChild(div);

            //     for (let x = 0; x < form.length.value; x++) {
            //         div.appendChild(q('img', q('template').content).cloneNode(true))
            //     }
            // }
            context.drawImage(coins.image, coins.x, coins.y, coins.w, coins.h);
            // Coins End
        } else {
            context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)

        }

        // Try Again


        // Try Again End
    }
    console.log(states.failure)
    // const BackgroundTextBox = (context, currentFrame, loops) => {

    // }

    return (
        <>
            <Canvas id="phaseOne" draw={mario} height="600" width="1000" />
        </>
    )
}
export default PhaseOne;