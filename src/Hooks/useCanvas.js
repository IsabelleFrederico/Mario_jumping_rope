import { useRef, useEffect, useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'

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
        let nextJumpLuigi = 0
        let checkNextJumpLuigi = 0
        let nextJumpPrincess = 0
        let checkNextJumpPrincess = 0
        let nextJumpYoshi = 0
        let checkNextJumpYoshi = 0
        let animationId
        let won = true
        let wonLuigi = true
        let wonPrincess = true
        let wonYoshi = true
        let attempts = 0
        let mouseX
        let mouseY
        let offsetX
        let offsetY

        const keyPush = (e) => {
            clearTimeout(timeOut.current)
            switch (e.key) {
                case "z": // Mario jumps
                    return (mario = true,
                        console.log(currentFrame, "mario"),
                        timeOut.current = setTimeout(() => {
                            mario = false; luigi = false; princess = false; yoshi = false;

                        }, 300)
                    )
                case "x": // Luigi jumps
                    return (luigi = true,
                        console.log(currentFrame, "luigi"),
                        timeOut.current = setTimeout(() => {
                            luigi = false; mario = false; princess = false; yoshi = false;

                        }, 300)
                    )
                case "c": // Princess jumps
                    return (princess = true,
                        console.log(currentFrame, "princess"),
                        timeOut.current = setTimeout(() => {
                            princess = false; mario = false; luigi = false; yoshi = false
                        }, 300)
                    )
                case "v": // Yoshi jumps
                    return (yoshi = true,
                        console.log(currentFrame, "yoshi"),
                        timeOut.current = setTimeout(() => {
                            yoshi = false; mario = false; luigi = false; princess = false
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
                loops === 11 || loops === 12 ? 2 : loops === 14 ? 1.5 : 3 :
                states.currentScreen === 'PhaseTwo' ? loops === 4 || loops === 7 ? 4 :
                    loops === 11 || loops === 12 ? 5 : loops === 14 || loops === 15 ? 1.5 : 3 :
                    states.currentScreen === 'PhaseThree' ? loops === 4 || loops === 7 || loops === 17 || loops === 18 ? 5 :
                        loops === 11 || loops === 12 ? 5 : loops === 14 || loops === 15 ? 6 : 3 :
                        states.currentScreen === 'PhaseFour' ? loops === 4 || loops === 7 || loops === 17 || loops === 18 ? 3 :
                            loops === 11 || loops === 12 ? 5 : loops === 14 || loops === 15 ? 6 : 3 : 3

            const passedInterval = frames % frameInterval === 0

            switch (states.currentScreen) {
                case 'Play':
                    if (loops < 14) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = framesControl = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            if (currentFrame === 14) { nextJump++ }
                        }
                        return (currentFrame)
                    } else {
                        return <></>
                    }

                case 'PhaseTwo':
                    if (loops < 16) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = framesControl = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            if (currentFrame === 15) { nextJump++ }
                            if (currentFrame === 18) { nextJumpLuigi++ }
                        }
                        return (currentFrame)
                    } else {
                        return <></>
                    }
                case 'PhaseThree':
                    if (loops < 18) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = framesControl = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            if (currentFrame === 14) { nextJump++ }
                            if (currentFrame === 18) { nextJumpLuigi++ }
                            if (currentFrame === 20) { nextJumpPrincess++ }
                        }
                        return (currentFrame)
                    } else {
                        return <></>
                    }
                case 'PhaseFour':
                    if (loops < 5) {
                        if (passedInterval) {
                            const movementBase = 1;
                            const movement = movementBase + currentFrame;
                            currentFrame = framesControl = movement % 23;
                            if (currentFrame === 22) { loops++ }
                            if (currentFrame === 12) { nextJump++ }
                            if (currentFrame === 14) { nextJumpLuigi++ }
                            if (currentFrame === 17) { nextJumpPrincess++ }
                            if (currentFrame === 20) { nextJumpYoshi++ }
                        }
                        return (currentFrame)
                    } else {
                        return <></>
                    }
                default:
                    break;
            }
        }

        const checkJumps = () => {
            if (states.currentScreen === 'Play') {
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
            } else if (states.currentScreen === 'PhaseTwo') {

                if ((currentFrame === 11 || currentFrame === 12 || currentFrame === 13 || currentFrame === 14 || currentFrame === 15 || currentFrame === 16)) {
                    if (mario) {
                        if (loops === checkNextJump) {
                            return checkNextJump++
                        }
                        return checkNextJump
                    }

                    if (currentFrame >= 10 && currentFrame <= 17 && nextJump !== checkNextJump) {
                        clearTimeout(timeOut.current)
                        return won = false
                    }

                }
                if ((currentFrame === 15 || currentFrame === 16 || currentFrame === 17 || currentFrame === 18)) {
                    if (luigi) {
                        if (loops === checkNextJumpLuigi) {
                            return checkNextJumpLuigi++
                        }
                        return checkNextJumpLuigi
                    }
                    if (currentFrame !== 15 && currentFrame <= 19 && nextJumpLuigi !== checkNextJumpLuigi) {
                        clearTimeout(timeOut.current)
                        return wonLuigi = false
                    }
                }
            } else if (states.currentScreen === 'PhaseThree') {

                if ((currentFrame === 10 || currentFrame === 11 || currentFrame === 12 || currentFrame === 13 || currentFrame === 14 || currentFrame === 15)) {
                    if (mario) {
                        if (loops === checkNextJump) {
                            return checkNextJump++
                        }
                        return checkNextJump
                    }

                    if (currentFrame >= 10 && currentFrame <= 17 && nextJump !== checkNextJump) {
                        clearTimeout(timeOut.current)
                        return won = false
                    }

                }
                if ((currentFrame === 13 || currentFrame === 14 || currentFrame === 15 || currentFrame === 16 || currentFrame === 17 || currentFrame === 18)) {
                    if (luigi) {
                        if (loops === checkNextJumpLuigi) {
                            return checkNextJumpLuigi++
                        }
                        return checkNextJumpLuigi
                    }
                    if (currentFrame !== 13 && currentFrame <= 19 && nextJumpLuigi !== checkNextJumpLuigi) {
                        clearTimeout(timeOut.current)
                        return wonLuigi = false
                    }
                }
                if ((currentFrame === 17 || currentFrame === 18 || currentFrame === 19 || currentFrame === 20)) {
                    if (princess) {
                        if (loops === checkNextJumpPrincess) {
                            return checkNextJumpPrincess++
                        }
                        return checkNextJumpPrincess
                    }
                    if (currentFrame !== 17 && currentFrame <= 21 && nextJumpPrincess !== checkNextJumpPrincess) {
                        clearTimeout(timeOut.current)
                        return wonPrincess = false
                    }
                }
            } else if (states.currentScreen === 'PhaseFour') {

                if ((currentFrame === 10 || currentFrame === 11 || currentFrame === 12)) {
                    if (mario) {
                        if (loops === checkNextJump) {
                            return checkNextJump++
                        }
                        return checkNextJump
                    }

                    if (currentFrame >= 10 && currentFrame <= 13 && nextJump !== checkNextJump) {
                        clearTimeout(timeOut.current)
                        return won = false
                    }

                }
                if ((currentFrame === 12 || currentFrame === 13 || currentFrame === 14)) {
                    if (luigi) {
                        if (loops === checkNextJumpLuigi) {
                            return checkNextJumpLuigi++
                        }
                        return checkNextJumpLuigi
                    }
                    if (currentFrame >= 12 && currentFrame <= 15 && nextJumpLuigi !== checkNextJumpLuigi) {
                        clearTimeout(timeOut.current)
                        return wonLuigi = false
                    }
                }
                if ((currentFrame === 14 || currentFrame === 15 || currentFrame === 16 || currentFrame === 17)) {
                    if (princess) {
                        if (loops === checkNextJumpPrincess) {
                            return checkNextJumpPrincess++
                        }
                        return checkNextJumpPrincess
                    }
                    if (currentFrame !== 14 && currentFrame <= 18 && nextJumpPrincess !== checkNextJumpPrincess) {
                        clearTimeout(timeOut.current)
                        return wonPrincess = false
                    }
                }
                if ((currentFrame === 18 || currentFrame === 19 || currentFrame === 20)) {
                    if (yoshi) {
                        if (loops === checkNextJumpYoshi) {
                            return checkNextJumpYoshi++
                        }
                        return checkNextJumpYoshi
                    }
                    if (currentFrame !== 18 && currentFrame <= 21 && nextJumpYoshi !== checkNextJumpYoshi) {
                        clearTimeout(timeOut.current)
                        return wonYoshi = false
                    }
                }
            }

        }

        const tryAgainButton = () => {
            if (!won || !wonLuigi || !wonPrincess || !wonYoshi) {
                attempts++
                won = true
                wonLuigi = true
                wonPrincess = true
                wonYoshi = true
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
                nextJumpLuigi = 0
                checkNextJumpLuigi = 0
                nextJumpPrincess = 0
                checkNextJumpPrincess = 0
                nextJumpYoshi = 0
                checkNextJumpYoshi = 0
                currentFrame = 0
            }
        }

        const playAgainButton = () => {
            attempts = 0
            currentFrame = 0
            won = true
            wonLuigi = true
            wonPrincess = true
            wonYoshi = true
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
            nextJumpLuigi = 0
            checkNextJumpLuigi = 0
            nextJumpPrincess = 0
            checkNextJumpPrincess = 0
            nextJumpYoshi = 0
            checkNextJumpYoshi = 0
        }

        const renderer = () => {
            won ? frames++ : frames = currentFrame
            wonLuigi ? frames++ : frames = currentFrame
            wonPrincess ? frames++ : frames = currentFrame
            wonYoshi ? frames++ : frames = currentFrame
            framesControl++
            framesControlCompar = currentFrame + 50
            updateCurrentFrame()
            checkJumps()
            reOffset()
            draw(context, mouseX, mouseY, offsetX, offsetY, currentFrame, loops, framesControl, framesControlCompar, attempts, tryAgainButton, playAgainButton, mario, won, luigi, wonLuigi, princess, wonPrincess, yoshi, wonYoshi)
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