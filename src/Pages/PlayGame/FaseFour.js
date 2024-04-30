import React, { useEffect, useContext, useState, useRef } from 'react'
import * as S from './Style'
import { useHistory } from 'react-router-dom';
import Canvas from '../../Components/Canvas';
import useCanvas from '../../Hooks/useCanvas';
import ropeVideo from '../../../img/ropeVideo.mp4'
import * as U from '../../Utils/ImagesSrc';

function HomePageUnit() {
    const history = useHistory()
    // const [mario, setMario] = useState(false)
    //     const play = useRef(null)
    // ropeRef.current = '../../../img/rope.mp4'
    const ropeRef = useRef(null)

    // const draw = (context, count) => {

    //     context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    //     context.fillStyle = 'grey'
    //     const d = count % 800
    //     context.fillRect(10 + d, 10, 100, 100)
    // }    

    // const draw = (context, count, mario, angle) => {
    //     const height = context.canvas.height;
    //     const width = context.canvas.width;

    //     // Background
    //     context.drawImage(U.backgroundRef, 0, 0, context.canvas.width, context.canvas.height)
    //     // Background End

    //     // Mario Section
    //     const marioPlay = {
    //         image: mario ? U.marioJumpsRef : U.marioFrontRef,
    //         x: mario ? width - 655 : width - 655,
    //         y: mario ? width - 935 : width - 855,
    //         w: mario ? width - 710 : width - 730,
    //         h: mario ? height - 270 : height - 300
    //     }
    //     // marioPlay.y = marioPlay.y + count
    //     context.drawImage(marioPlay.image, marioPlay.x, marioPlay.y, marioPlay.w, marioPlay.h)

    //     // Mario Section End



    // }

    const rope = (context, count, mario, angle) => {
        const height = context.canvas.height;
        const width = context.canvas.width;
        // Rope
        const ropePlay = {
            image: U.ropeRef,
            video: ropeRef.current,
            x: width - 990,
            y: width - 960,
            w: width,
            h: height,

            update() {

            },

            move: [
                { x: 0, y: 40, },
                { x: 0, y: 50, },
                { x: 0, y: 60, },
                { x: 0, y: 70, },
            ],
        }
        const { ropeX, ropeY } = ropePlay.move
        angle += 40
        // context.translate(ropePlay.x/2, ropePlay.y/2);
        // context.rotate(angle * Math.PI / 180)
        // ropePlay.y = ropePlay.y + count
        // context.drawImage(ropePlay.image, ropePlay.x, ropePlay.y, ropePlay.w, ropePlay.h);
        // context.drawImage(ropePlay.video, ropePlay.x, ropePlay.y, ropePlay.w, ropePlay.h);
        ropePlay.update()
        context.drawImage(ropePlay.image, ropeX, ropeY, ropePlay.w, ropePlay.h);
        // Rope End
    }

    return (
        <S.ContainerAll >
            <S.Container>
                {/* <Canvas draw={background} width="1000" height="600" style={{ position: 'absolute', backgroundColor: 'transparent' }} /> */}
                <Canvas draw={rope} width="1000" height="600" style={{ border: '1px solid black' }} />
                {/* <S.Video ref={ropeRef} width={1000} height={600} >
                    <S.Source src={ropeVideo} type='video/mp4' />
                </S.Video> */}
            </S.Container>

        </S.ContainerAll >
    );
}

export default HomePageUnit;