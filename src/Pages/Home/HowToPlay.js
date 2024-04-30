import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'

function HowToPlay() {
    let { states, requests } = useContext(GlobalStateContext)

    const draw = (context, mouseX, mouseY, offsetX, offsetY) => {
        const height = context.canvas.height;
        const width = context.canvas.width;

        // Backgroung
        context.drawImage(U.backgroundHowToPlayRef, 0, 0, width, height)
        // Backgroung End

        // Text Box
        const box = [{
            name: 'box',
            x: width - 530,
            y: height - 350,
            w: width - 130,
            h: height - 100,
            cursor: 0
        },
        {
            name: 'button',
            x: width - 380,
            y: height - 80,
            w: width - 430,
            h: height - 348,
            cursor: 1
        }]

        let newCursor;

        function defineBack(b) {
            if (b.name === 'box') {
                context.fillStyle = 'rgba(156, 152, 152, 0.8)';
                context.beginPath();
                context.roundRect(b.x, b.y, b.w, b.h, 20)
                context.fill();
                context.closePath();

                //Text
                context.font = '17pt Kremlin Pro Web';
                context.fillStyle = '#000000';
                var txt = "Your goal is to jump rope, in each stage a charac-\n\nter will be added who will hold the commands res-\n\npectively: z, x, c, v. \n\n\nCoins indicate your number of attempts, which in-\n\ncreases as the stage progresses.\n\n\nThe scoreboard shows you how many jumps are\n\nstill needed to finish the stage.";
                var x = b.x + 10;
                var y = b.y + 50;
                var lineheight = 15;
                var lines = txt.split('\n');

                for (var i = 0; i < lines.length; i++) {
                    context.fillText(lines[i], x, y + (i * lineheight))
                }
                //Text End

            } else if (b.name === 'button') {
                context.beginPath();
                context.rect(b.x, b.y, b.w, b.h)
                // context.stroke()
                context.closePath();
            }
        }

        for (var i = 0; i < box.length; i++) {
            var b = box[i];
            defineBack(b);

            if (context.isPointInPath(mouseX, mouseY)) {

                newCursor = box[i].cursor;
            }
        }

        //Text Box End

        // Title
        const title = {
            x: width - 515,
            y: height - 420,
            w: width,
            h: height
        }
        context.drawImage(U.howToPlayButtonRef, title.x, title.y, title.w, title.h)
        // Title End


        //Button

        const button = {
            x: width - 400,
            y: height - 110,
            w: width - 60,
            h: height - 70,
            cursor: 1
        }

        if (newCursor === undefined || newCursor === 0) {
            context.canvas.style.cursor = states.cursors[0];
        } else if (newCursor === 1) {
            context.canvas.style.cursor = states.cursors[1];
            context.drawImage(U.playButtonRef, button.x, button.y, button.w + 5, button.h + 5)

        }

        context.drawImage(U.playButtonRef, button.x, button.y, button.w, button.h)

        context.canvas.addEventListener('click', function (e) {
            let x = e.pageX - offsetX
            let y = e.pageY - offsetY

            if (y > button.x && y < button.x + button.h
                && x > button.y && x < button.y + button.w) {
                requests.renderScreen("Play")
            }

        }, false);
        //ButonEnd
    }


    return (
        <S.Container>
            <Canvas draw={draw} />
        </S.Container>
    );
}

export default HowToPlay;