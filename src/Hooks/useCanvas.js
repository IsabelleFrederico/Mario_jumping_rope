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
        let rects = [
            { x: 660, y: 360, w: 350, h: 110 },
            { x: 340, y: 480, w: 660, h: 110 }
        ], i = 0, r;

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

        const grdBefore = context.createLinearGradient(1200, 80, 50, 100);
        grdBefore.addColorStop(0, 'rgba(60, 60, 60, 0.5)');
        grdBefore.addColorStop(1, 'rgba(240, 240, 240)');

        const grdAfter = context.createLinearGradient(100, 80, 50, 100);
        grdAfter.addColorStop(0, 'rgba(60, 60, 60, 0.5)');
        grdAfter.addColorStop(1, 'rgba(240, 240, 240)');


        while (r = rects[i++]) context.rect(r.x, r.y, r.w, r.h);
        context.fillStyle = grdBefore; context.fill()

        canvas.onmousemove = function (e) {
            var rect = this.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top,
                i = 0, r;
            console.log(e.clientX, rect)
            context.clearRect(0, 0, canvas.width, canvas.height); 

            while (r = rects[i++]) {
                context.beginPath();
                context.rect(r.x, r.y, r.w, r.h);

                context.fillStyle = context.isPointInPath(x, y) ? grdAfter : grdBefore;
                // context.fillStyle === grdAfter ? canvas.style.cursor = "pointer" : canvas.style.cursor = ""
                context.fill();
            }

        };

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