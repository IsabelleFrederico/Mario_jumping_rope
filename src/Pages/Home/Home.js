import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Canvas from '../../Components/Canvas'
import * as U from '../../Utils/ImagesSrc'
import * as S from '../Style'

function Home() {
    let { states, requests } = useContext(GlobalStateContext)


    useEffect(() => {

    }, [])

    const draw = (context, mouseX, mouseY, offsetX, offsetY) => {
        const height = context.canvas.height;
        const width = context.canvas.width;

        // Background
        context.drawImage(U.backgroundHomeRef, 0, 0, context.canvas.width, context.canvas.height)
        // Background End

        // Butons
        const grad = context.createLinearGradient(0, 0, 1400, 100)
        grad.addColorStop(0, "rgba(0, 0, 10, 0.05)")
        grad.addColorStop(1, "rgba(0, 0, 0, 1)")

        const grad2 = context.createLinearGradient(0, 0, 1800, 500)
        grad2.addColorStop(0, "rgba(0, 0, 10, 0.05)")
        grad2.addColorStop(1, "rgba(0, 0, 0, 0.05)")

        const buttons = [
            {
                name: 'play',
                x: width - 200,
                y: height - 200,
                w: width - 100,
                h: height - 80,
                cursor: 1,
            },
            {
                name: 'howToPlay',
                x: width - 372,
                y: height - 140,
                w: width - 100,
                h: height,
                cursor: 1
            }
        ]

        let newCursor;


        function defineBackButton(b) {
            if (b.name === 'play') {
                context.fillStyle = grad;
                context.beginPath();
                context.rect(b.x, b.y + 25, b.w, b.h - 260);
                context.fill();
                context.closePath();
            } else {
                context.fillStyle = grad;
                context.beginPath();
                context.rect(b.x, b.y + 38, b.w, b.h - 340);
                context.fill()
                context.closePath();
            }
        }

        context.canvas.addEventListener('click', function (e) {
            let x = e.pageX - offsetX
            let y = e.pageY - offsetY
            buttons.forEach(function (b) {
                if (y > b.x && y < b.x + b.h - 260
                    && x > b.y + 25 && x < b.y + 25 + b.w) {
                    requests.renderScreen("HowToPlay")
                }
                if (y > b.x && y < b.x + b.h - 340
                    && x > b.y + 38 && x < b.y + 38 + b.w) {
                    requests.renderScreen("Play")
                }

            });

        }, false);

        for (var i = 0; i < buttons.length; i++) {
            var b = buttons[i];
            defineBackButton(b);

            if (context.isPointInPath(mouseX, mouseY)) {
                context.fillStyle = grad2;
                context.fill()
                newCursor = b.cursor;
            }
        }

        if (newCursor === undefined) {
            context.canvas.style.cursor = states.cursors[0];
        } else if (newCursor === 1) {
            context.canvas.style.cursor = states.cursors[1];
        }

        const play = buttons[0]
        context.drawImage(U.playButtonRef, play.x, play.y, play.w, play.h)

        const howToPlay = buttons[1]
        context.drawImage(U.howToPlayButtonRef, howToPlay.x, howToPlay.y, howToPlay.w, howToPlay.h)

        //Butons End


    }



    return (
        <S.Container>
            <Canvas draw={draw} />
        </S.Container>
    );
}

export default Home;