import { useRef, useEffect, useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'
import { ropeRef } from '../Utils/ImagesSrc'

const useCanvas = draw => {
    let { states, setters } = useContext(GlobalStateContext)
    const ref = useRef(null)
    const timeOut = useRef(null)


    useEffect(() => {

        const canvas = ref.current
        const context = canvas.getContext('2d')
        let mario = false
        let luigi = false
        let princess = false
        let yoshi = false
        let frames = 0
        let currentFrame = 0
        let loops = 0
        let nextJump = 0
        let checkNextJump = 0
        let animationId
        let won = true
        let attempts = 5

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
                    return (luigi = true, mario = false, princess = false, yoshi = false,
                        timeOut.current = setTimeout(() => {
                            luigi = false;
                        }, 300)
                    )
                case "c": // Princess jumps
                    return (princess = true, mario = false, luigi = false, yoshi = false,
                        timeOut.current = setTimeout(() => {
                            princess = false;
                        }, 300)
                    )
                case "v": // Yoshi jumps
                    return (yoshi = true, mario = false, luigi = false, princess = false,
                        timeOut.current = setTimeout(() => {
                            yoshi = false;
                        }, 300)
                    )
                default:
                    return false
            };
        }

        const updateCurrentFrame = () => {
            let frameInterval = states.currentScreen === 'Play' ? loops === 4 || loops === 7 ? 4 :
                loops === 11 || loops === 12 ? 2 : loops === 14 || loops === 15 ? 1.5 : 3 :
                states.currentScreen === 'PhaseTwo' ? loops === 4 || loops === 7 || loops === 17 || loops === 18 ? 4 :
                    loops === 11 || loops === 12 ? 2 : loops === 14 || loops === 15 ? 1.5 : 3 :
                    states.currentScreen === 'PhaseThree' ? loops === 4 || loops === 7 || loops === 17 || loops === 18 ? 4 :
                        loops === 11 || loops === 12 ? 2 : loops === 14 || loops === 15 || loops === 23 || loops === 24 ? 1.5 : 3 :
                        states.currentScreen === 'PhaseFour' ? loops === 4 || loops === 7 || loops === 17 || loops === 18 ? 4 :
                            loops === 11 || loops === 12 || loops === 27 || loops === 28 ? 2 : loops === 14 || loops === 15 || loops === 23 || loops === 24 ? 1.5 : 3 : 3

            const passedInterval = frames % frameInterval === 0

            switch (states.currentScreen) {
                case 'Play':
                    if (loops < 16) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            if (currentFrame === 14) { nextJump++ }
                        }
                        return (currentFrame)
                    } else {
                        return <>Proxima fase</>
                    }

                case 'PhaseTwo':
                    if (loops < 16) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            // const loop = rope.movements.length;
                            currentFrame = movement % 23;
                        }
                        return (currentFrame)
                    } else {
                        return <>Proxima fase</>
                    }
                case 'PhaseThree':
                    if (loops < 16) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            // const loop = rope.movements.length;
                            currentFrame = movement % 23;
                        }
                        return (currentFrame)
                    } else {
                        return <>Proxima fase</>
                    }
                case 'PhaseFour':
                    if (loops < 16) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            // const loop = rope.movements.length;
                            currentFrame = movement % 23;
                        }
                        return (currentFrame)
                    } else {
                        return <>Proxima fase</>
                    }
                default:
                    break;
            }
        }

        const checkJumps = () => {
            if ((currentFrame === 14 || currentFrame === 15 || currentFrame === 16 || currentFrame === 17)) {

                if (mario) {
                    if (loops === checkNextJump) {
                        return checkNextJump++
                    }
                    return checkNextJump
                }
            }
            if (currentFrame > 16 && nextJump !== checkNextJump) {
                
                return won = false
            }
        }



        const renderer = () => {
            won ? frames++ : frames = currentFrame
            updateCurrentFrame()
            checkJumps()
            draw(context, currentFrame, loops, won, mario, luigi, princess, yoshi)
            animationId = window.requestAnimationFrame(renderer)
            window.addEventListener('keydown', keyPush);
        }
        renderer()

        return () => {
            window.cancelAnimationFrame(animationId)
        }
    }, [draw, states.currentScreen, setters])

    return ref
}

export default useCanvas