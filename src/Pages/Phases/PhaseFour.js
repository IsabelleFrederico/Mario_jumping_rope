import React, { useContext } from 'react'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'
import * as M from '../../Utils/RopePhaseFour'
import GlobalStateContext from '../../Global/GlobalStateContext'

function PhaseFour() {
    let { states, requests } = useContext(GlobalStateContext)

    const draw = (context, mouseX, mouseY, offsetX, offsetY, currentFrame, loops, framesControl, framesControlCompar, attempts, tryAgainButton, playAgainButton, mario, won, luigi, wonLuigi, princess, wonPrincess, yoshi, wonYoshi) => {
        const height = context.canvas.height; // 400
        const width = context.canvas.width; // 600
        let attemptsTotal = 5

        // BackGround
        context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
        // BackGround End

        // Jumps
        let jumps = 5 - loops
        context.font = "50px Arial";
        const jump = {
            txt: jumps < 10 ? `0${jumps}` : `${jumps}`,
            x: width - 85,
            y: height - 280,
            txt2: `Jumps`,
            x2: width - 100,
            y2: height - 240
        }
        context.fillText(jump.txt, jump.x, jump.y)

        context.font = "30px Arial";
        context.fillText(jump.txt2, jump.x2, jump.y2)

        // Jumps End

        // Mario
        const marioPlay = {
            image: won ? (mario ? U.marioJumpsRef : U.marioFrontRef) : U.marioFallsRef,
            x: won ? (mario ? width - 555 : width - 570) : width - 555,
            y: won ? (mario ? height - 350 : height - 295) : height - 275,
            w: won ? (mario ? width - 410 : width - 420) : width - 489,
            h: won ? (mario ? height - 190 : height - 220) : height - 280
        }

        context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)
        // Mario End

        // Princess
        const princessPlay = {
            image: wonPrincess ? (princess ? U.princessPeachJumpsRef : U.princessPeachFrontRef) : U.princessPeachFallsRef,
            x: wonPrincess ? (princess ? width - 300 : width - 310) : width - 350,
            y: wonPrincess ? (princess ? height - 350 : height - 320) : height - 300,
            w: wonPrincess ? (princess ? width - 460 : width - 470) : width - 420,
            h: wonPrincess ? (princess ? height - 200 : height - 200) : height - 170
        }

        context.drawImage(princessPlay.image, princessPlay.x, princessPlay.y, princessPlay.w, princessPlay.h)
        // Princess End

        // Luigi
        const luigiPlay = {
            image: wonLuigi ? (luigi ? U.luigiJumpsRef : U.luigiFrontRef) : U.luigiFallsRef,
            x: wonLuigi ? (luigi ? width - 490 : width - 430) : width - 440,
            y: wonLuigi ? (luigi ? height - 330 : height - 295) : height - 300,
            w: wonLuigi ? (luigi ? width - 390 : width - 490) : width - 460,
            h: wonLuigi ? (luigi ? height - 200 : height - 235) : height - 220
        }

        context.drawImage(luigiPlay.image, luigiPlay.x, luigiPlay.y, luigiPlay.w, luigiPlay.h)
        // Luigi End

        // Yoshi
        const yoshiPlay = {
            image: wonYoshi ? (yoshi ? U.yoshiJumpsRef : U.yoshiFrontRef) : U.yoshiFallsRef,
            x: wonYoshi ? (yoshi ? width - 170 : width - 230) : width - 250,
            y: wonYoshi ? (yoshi ? height - 300 : height - 300) : height - 295,
            w: wonYoshi ? (yoshi ? width - 500 : width - 400) : width - 400,
            h: wonYoshi ? (yoshi ? height - 250 : height - 200) : height - 200
        }

        context.drawImage(yoshiPlay.image, yoshiPlay.x, yoshiPlay.y, yoshiPlay.w, yoshiPlay.h)
        // Yoshi End

        // Rope
        const rope = {
            x: 0,
            y: 0,
            w: width + 40,
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
        const defineCoin = (c) => {
            context.drawImage(c.image, c.x, c.y, c.w, c.h)
        }

        for (var i = 0; i < attemptsTotal - attempts; i++) {
            var c = states.coins[i];
            defineCoin(c);
        }

        // Coins End

        // Alerts
        if ((!won || !wonLuigi || !wonPrincess || !wonYoshi) && framesControl > framesControlCompar && (attemptsTotal - attempts) > 0) {
            // Try Again
            context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)

            // Failure title
            const failure = {
                image: U.failureRef,
                x: width - 430,
                y: height - 320,
                w: width - 100,
                h: height - 60
            }

            context.drawImage(failure.image, failure.x, failure.y, failure.w, failure.h)
            // Failure title End

            // Try again Style
            const tryAgain = {
                x: width - 200,
                y: height - 200,
                w: width - 780,
                h: height - 340,
                cursor: 1
            }

            context.lineWidth = 4;
            context.strokeStyle = '#000000';
            context.fillStyle = 'rgba(225,225,225,0.8)';
            context.beginPath();
            context.roundRect(tryAgain.x, tryAgain.y, tryAgain.w, tryAgain.h, 20)
            context.stroke();
            context.fill();
            context.moveTo(mouseX, mouseY)
            context.closePath();


            context.font = '27pt Kremlin Pro Web';
            context.fillStyle = '#000000';
            context.fillText('Try Again', tryAgain.x + (tryAgain.w + 17), tryAgain.y + 40);
            // Try again Style End


            // Try again action
            let newCursor

            if (context.isPointInPath(mouseX, mouseY)) {
                context.fillText('Try Again', tryAgain.x + (tryAgain.w + 17), tryAgain.y + 40);
                newCursor = tryAgain.cursor;
            }

            if (newCursor === undefined || newCursor === 0) {
                context.canvas.style.cursor = states.cursors[0];
            } else if (newCursor === 1) {
                context.canvas.style.cursor = states.cursors[1];
            }

            context.canvas.addEventListener('click', function (e) {
                context.canvas.style.cursor = states.cursors[0];
                tryAgainButton()

            }, false);
            // Try Again End

        } else if ((!won || !wonLuigi || !wonPrincess || !wonYoshi) && (attemptsTotal - attempts) <= 0) {

            // Game Over
            context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)

            // Game Over title
            const gameOver = {
                image: U.gameOverRef,
                x: width - 530,
                y: height - 330,
                w: width - 100,
                h: height - 60
            }

            context.drawImage(gameOver.image, gameOver.x, gameOver.y, gameOver.w, gameOver.h)
            // Game Over title End

            // Game Over Style
            const again = {
                x: width - 200,
                y: height - 200,
                w: width - 790,
                h: height - 340,
                cursor: 1
            }

            context.lineWidth = 4;
            context.strokeStyle = '#000000';
            context.fillStyle = 'rgba(225,225,225,0.8)';
            context.beginPath();
            context.roundRect(again.x, again.y, again.w, again.h, 20)
            context.stroke();
            context.fill();
            context.moveTo(mouseX, mouseY)
            context.closePath();


            context.font = '27pt Kremlin Pro Web';
            context.fillStyle = '#000000';
            context.fillText('Play Again', again.x + (again.w + 17), again.y + 40);
            // Game Over Style End

            // Game Over action
            let newCursor

            if (context.isPointInPath(mouseX, mouseY)) {
                context.fillText('Play Again', again.x + (again.w + 17), again.y + 40);
                newCursor = again.cursor;
            }

            if (newCursor === undefined || newCursor === 0) {
                context.canvas.style.cursor = states.cursors[0];
            } else if (newCursor === 1) {
                context.canvas.style.cursor = states.cursors[1];
            }

            context.canvas.addEventListener('click', function (e) {
                context.canvas.style.cursor = states.cursors[0];
                playAgainButton()
                requests.renderScreen("Play")
            }, false);
            // Game Over Action End

            // Game Over End

        } else if ((won || wonLuigi || wonPrincess || wonYoshi) && framesControl > framesControlCompar && jumps === 0) {

            // Finish
            context.drawImage(U.backgroundHowToPlayRef, 0, 0, context.canvas.width, context.canvas.height)

            // Finishi Title
            const youWon = {
                image: U.youWonRef,
                x: width - 440,
                y: height - 300,
                w: width,
                h: height
            }

            context.drawImage(youWon.image, youWon.x, youWon.y, youWon.w, youWon.h)
            // Finishi Title End

            // Finish Style
            const again = {
                x: width - 200,
                y: height - 120,
                w: width - 792,
                h: height - 340,
                cursor: 1
            }

            context.lineWidth = 4;
            context.strokeStyle = '#000000';
            context.fillStyle = 'rgba(225,225,225,0.8)';
            context.beginPath();
            context.roundRect(again.x, again.y, again.w, again.h, 20)
            context.stroke();
            context.fill();
            context.moveTo(mouseX, mouseY)
            context.closePath();


            context.font = '27pt Kremlin Pro Web';
            context.fillStyle = '#000000';
            context.fillText('Play Again', again.x + (again.w + 17), again.y + 40);
            // Finish Style End

            // Finish Action

            let newCursor

            if (context.isPointInPath(mouseX, mouseY)) {
                context.fillText('Play Again', again.x + (again.w + 17), again.y + 40);
                newCursor = again.cursor;
            }

            if (newCursor === undefined || newCursor === 0) {
                context.canvas.style.cursor = states.cursors[0];
            } else if (newCursor === 1) {
                context.canvas.style.cursor = states.cursors[1];
            }

            context.canvas.addEventListener('click', function (e) {
                context.canvas.style.cursor = states.cursors[0];
                playAgainButton()
                requests.renderScreen("Home")

            }, false);
            // Finish Acton End

            // Finish End

        }
        // Alerts End

    }


    return (
        <S.Container>
            <Canvas draw={draw} />
        </S.Container>
    )
}

export default PhaseFour;