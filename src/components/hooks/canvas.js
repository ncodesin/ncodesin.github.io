import { animate } from "framer-motion";
import { useEffect, useRef } from "react"


export const useCanvas = (canvasWidth, canvasHeight, animate) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d');

        const setCanvas = () => {

            if (canvas && context) {
                const devicePixelRatio = window.devicePixelRatio ?? 1;

                canvas.style.width = canvasWidth + 'px';
                canvas.style.height = canvasHeight + 'px';

                canvas.width = canvasWidth * devicePixelRatio;
                canvas.height = canvasHeight * devicePixelRatio;

                context.scale(devicePixelRatio, devicePixelRatio);

            }
        };
        setCanvas();
        if (context) {
            animate(context);
        }
    }, [canvasWidth, canvasHeight]);

    return canvasRef
}