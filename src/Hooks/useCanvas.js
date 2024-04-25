import { useRef, useEffect, useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'
import { ropeRef } from '../Utils/ImagesSrc'

const useCanvas = draw => {
    let { states } = useContext(GlobalStateContext)
    const ref = useRef(null)
    const timeOut = useRef(null)


    useEffect(() => {

        const canvas = ref.current
        const context = canvas.getContext('2d')
        let mario = false
        let luigi = false
        let princess = false
        let yoshi = false
        let angle = 0
        let DEG2RAD = Math.PI / 180
        let animationId = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;
        let t = Date.now();
        let dt;

        const keyPush = (e) => {
            clearTimeout(timeOut.current)
            switch (e.key) {
                case "z": // Mario jumps
                    return (mario = true, luigi = false, princess = false, yoshi = false,
                        timeOut.current = setTimeout(() => {
                            mario = false;
                        }, 300)
                    )
                case "x": // Luigi jumps
                    // if (states.phase === 1) {
                    //     return mario = false
                    // } else {
                    return (luigi = true, mario = false, princess = false, yoshi = false,
                        timeOut.current = setTimeout(() => {
                            luigi = false;
                        }, 300)
                    )
                // }
                case "c": // Princess jumps
                    // if (states.phase < 3) {
                    //     return (mario = false, luigi = false)
                    // } else {
                    return (princess = true, mario = false, luigi = false, yoshi = false,
                        timeOut.current = setTimeout(() => {
                            princess = false;
                        }, 300)
                    )
                // }
                case "v": // Yoshi jumps
                    // if (states.phase < 4) {
                    //     return (mario = false, luigi = false, princess = false)
                    // } else {
                    return (yoshi = true, mario = false, luigi = false, princess = false,
                        timeOut.current = setTimeout(() => {
                            yoshi = false;
                        }, 300)
                    )
                // }
                default:
                    return false
            };
        }

        const renderer = (timestamp) => {
            dt = timestamp - t
            draw(context, angle, DEG2RAD, t, dt, mario, luigi, princess, yoshi)
            animationId = window.requestAnimationFrame(renderer)
            window.addEventListener('keydown', keyPush);
        }
        renderer(t)

        return () => {
            window.cancelAnimationFrame(animationId)
        }
    }, [draw])

    return ref
}

export default useCanvas