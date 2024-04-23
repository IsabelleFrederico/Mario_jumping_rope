import { useRef, useEffect } from 'react'

const useCanvas = draw => {

    const ref = useRef(null)
    const timeOut = useRef(null)


    useEffect(() => {

        const canvas = ref.current
        const context = canvas.getContext('2d')
        let count = 0
        let animationId
        let mario = false
        let angle = 0

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

        const renderer = () => {
            count++
            draw(context, count, mario, angle)
            animationId = window.requestAnimationFrame(renderer)
            window.addEventListener('keydown', keyPush);
        }
        renderer()

        return () => {
            window.cancelAnimationFrame(animationId)
        }
    }, [draw])

    return ref
}

export default useCanvas