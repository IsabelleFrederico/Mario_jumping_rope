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
        let framesControl = 0
        let framesControlCompar = 0
        let loops = 0
        let nextJump = 0
        let checkNextJump = 0
        let animationId
        let won = true
        let attempts = 0
        let mouseX
        let mouseY
        let offsetX
        let offsetY

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

        const reOffset = () => {
            var BB = canvas.getBoundingClientRect();
            offsetX = BB.left;
            offsetY = BB.top;
        }

        const handleMouseMove = (e) => {
            e.preventDefault();
            e.stopPropagation();

            mouseX = parseInt(e.clientX - offsetX);
            mouseY = parseInt(e.clientY - offsetY);
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
                    if (loops < 20) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            // if (currentFrame === 14 ) { nextJump++ }
                        }
                        return (currentFrame)
                    } else {
                        return <>Proxima fase</>
                    }
                case 'PhaseThree':
                    if (loops < 25) {
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
                    if (loops < 30) {
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
                clearTimeout(timeOut.current)
                return won = false

            }
        }

        const tryAgainButton = () => {
            if (!won) {
                attempts++
                won = true
                currentFrame = 0
                frames = 0
                framesControl = 0
                framesControlCompar = 0
                loops = 0
                nextJump = 0
                checkNextJump = 0
            }
        }

        const playAgainButton = () => {
            attempts = 0
            currentFrame = 0
            won = true
            mario = false
            luigi = false
            princess = false
            yoshi = false
            frames = 0
            framesControl = 0
            framesControlCompar = 0
            loops = 0
            nextJump = 0
            checkNextJump = 0
        }

        const renderer = () => {
            won ? frames++ : frames = currentFrame
            framesControl++
            framesControlCompar = currentFrame + 50
            updateCurrentFrame()
            checkJumps()
            reOffset()
            draw(context, mouseX, mouseY, offsetX, offsetY, currentFrame, loops, won, framesControl, framesControlCompar, attempts, tryAgainButton, playAgainButton, mario, luigi, princess, yoshi)
            window.addEventListener('keydown', keyPush);
            animationId = window.requestAnimationFrame(renderer)
            window.addEventListener('mousemove', handleMouseMove);
        }
        renderer()

        return () => {
            window.cancelAnimationFrame(animationId)
        }
    }, [draw, states.currentScreen, setters])

    return ref
}

export default useCanvas