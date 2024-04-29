import React, { useRef, useEffect, useContext } from 'react'
import Canvas from '../../../Components/Canvas';
import * as U from '../../../Utils/ImagesSrc';
import * as M from '../../../Utils/Rope';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import * as S from '../../Style'

function PhaseOne() {
    let { states, setters } = useContext(GlobalStateContext)

    const mario = (context, currentFrame, loops, won, framesControl, framesControlCompar, mouseX, mouseY, mario, luigi, princess, yoshi) => {
        const height = context.canvas.height;
        const width = context.canvas.width;

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

        // Try Again
        // if (!won && framesControl > framesControlCompar) {
        context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)
        // Failure text
        const failure = {
            image: U.failureRef,
            x: width - 730,
            y: height - 490,
            w: width - 100,
            h: height - 60
        }

        context.drawImage(failure.image, failure.x, failure.y, failure.w, failure.h)
        //Try again Style
        const tryAgain = {
            x: width - 600, // 400
            y: height - 300, // 300
            w: width - 730, // 270
            h: height - 510, // 90
            cursor: 'pointer'
        }

        context.lineWidth = 4;
        context.strokeStyle = '#000000';
        context.fillStyle = 'rgba(225,225,225,0.8)';
        context.beginPath();
        const button = context.roundRect(tryAgain.x, tryAgain.y, tryAgain.w, tryAgain.h, 20)
        context.stroke();
        context.fill();
        context.moveTo(mouseX, mouseY)
        context.closePath();


        context.font = '35pt Kremlin Pro Web';
        context.fillStyle = '#000000';
        context.fillText('Try Again', tryAgain.x + (tryAgain.w - 230), tryAgain.y + 64);

        // Try again action
        console.log(mouseX, mouseY)


        if (mouseX - width === tryAgain.w && mouseX - height === tryAgain.h) {
            // console.log(mouseY, mouseX)

            context.canvas.style.cursor = tryAgain.cursor;
        } else {
            context.canvas.style.cursor = 'default';

        }

        if (context.isPointInPath(mouseX, mouseY, button)) {
            context.fillStyle = 'red';
            context.fill(button)
        }


        // context.canvas.mousemove(function (e) { handleMouseMove(e); });


        // }

        // Try Again End


        // TESTE
        var isDown = false;
        var startX, startY;

        var cursors = ['default', 'w-resize', 'n-resize'];
        var currentCursor = 0;

        var shapes = [];
        shapes.push({
            points: [{ x: 20, y: 50 }, { x: 100, y: 10 }, { x: 180, y: 50 }, { x: 100, y: 90 }],
            cursor: 1,
        });
        shapes.push({
            points: [{ x: 200, y: 50 }, { x: 250, y: 150 }, { x: 200, y: 250 }, { x: 150, y: 150 }],
            cursor: 2,
        });

        function definePath(p) {
            context.beginPath();
            context.moveTo(p[0].x, p[0].y);
            for (var i = 1; i < p.length; i++) {
                context.lineTo(p[i].x, p[i].y);
            }
            context.closePath();
        }


        for (var i = 0; i < shapes.length; i++) {
            var s = shapes[i];
            definePath(s.points);
            context.stroke();
        }

        var newCursor;
        for (var i = 0; i < shapes.length; i++) {
            var s = shapes[i];
            definePath(s.points);
            if (context.isPointInPath(mouseX, mouseY)) {
                newCursor = s.cursor;
                break;
            }
        }
        if (!newCursor) {
            if (currentCursor > 0) {
                currentCursor = 0;
                context.canvas.style.cursor = cursors[currentCursor];
            }
        } else if (!newCursor == currentCursor) {
            currentCursor = newCursor;
            context.canvas.style.cursor = cursors[currentCursor];
        }


        //
    }

    return (
        <S.Container>
            <Canvas id="phaseOne" draw={mario} />
        </S.Container>
    )
}
export default PhaseOne;