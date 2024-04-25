import { useRef, useEffect } from 'react'
import { ropeRef } from '../Utils/ImagesSrc'

const useCanvas = draw => {

    const ref = useRef(null)
    const timeOut = useRef(null)


    useEffect(() => {

        const canvas = ref.current
        const context = canvas.getContext('2d')
        let mario = false
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
                    return (mario = true,
                        timeOut.current = setTimeout(() => {
                            mario = false;
                        }, 300)
                    )
                default:
                    return false
            };
        }

        const renderer = (timestamp) => {
            dt = timestamp - t
            draw(context, angle, DEG2RAD, t, dt, mario)
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