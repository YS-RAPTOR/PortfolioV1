import { useEffect } from "react";
import GOLRender from "../webgl/GOLRender";

const Background = ({ fps, scale = 5 }: { fps: number, scale: number }) => {

    useEffect(() => {
        const GOLCanvas = document.getElementById("GOL") as HTMLCanvasElement;
        if (!GOLCanvas) return;

        GOLCanvas.width = window.innerWidth;
        GOLCanvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

        const GOL = new GOLRender(GOLCanvas, scale, fps);

        const correctResizeEvent = new Event("resize-correct");
        dispatchEvent(correctResizeEvent);

        // Setting up Event Listeners   

        addEventListener("mousemove", GOL.onMouseMove);
        addEventListener("mousedown", GOL.onMouseMove);
        addEventListener("mouseup", GOL.onMouseMove);

        if (navigator.maxTouchPoints > 0) {
            addEventListener("touchmove", GOL.onTouch);
            addEventListener("touchstart", GOL.onTouch);
            addEventListener("touchend", GOL.onTouchEnd);
            addEventListener("touchcancel", GOL.onTouchEnd);
        }

        addEventListener("resize", (event) => {
            GOLCanvas.width = window.innerWidth;
            GOLCanvas.height = window.innerHeight;
            GOL.resize();
            dispatchEvent(correctResizeEvent);
        });

        addEventListener("resize-correct", (event) => {
            GOLCanvas.width = window.innerWidth;
            GOLCanvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
            GOL.resize();
        });

        requestAnimationFrame(GOL.render);
    }, []);

    return (
        <canvas
            id="GOL"
            className="absolute top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default Background;
