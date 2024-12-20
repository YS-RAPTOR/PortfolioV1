import { useEffect, useRef } from "react";
import GOLRender from "../webgl/GOLRender";

const Background = ({ fps, scale = 5 }: { fps: number; scale: number }) => {
	const GOLCanvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const GOLCanvas = GOLCanvasRef.current!;

		GOLCanvas.width = window.innerWidth;
		GOLCanvas.height = Math.max(
			document.body.clientHeight,
			window.innerHeight
		);

		const GOL = new GOLRender(GOLCanvas, scale, fps);

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

		const resizeEvent = () => {
			GOLCanvas.width = 360;
			GOLCanvas.height = 360;
			GOL.resize();
			GOLCanvas.width = window.innerWidth;
			GOLCanvas.height = Math.max(
				document.body.scrollHeight,
				window.innerHeight
			);

			GOL.resize();
			dispatchEvent(new Event("resize-correct"));
		};
		// Setting up Resize Event
		addEventListener("resize", resizeEvent);

		requestAnimationFrame(GOL.render);

		return () => {
			removeEventListener("mousemove", GOL.onMouseMove);
			removeEventListener("mousedown", GOL.onMouseMove);
			removeEventListener("mouseup", GOL.onMouseMove);
			if (navigator.maxTouchPoints > 0) {
				removeEventListener("touchmove", GOL.onTouch);
				removeEventListener("touchstart", GOL.onTouch);
				removeEventListener("touchend", GOL.onTouchEnd);
				removeEventListener("touchcancel", GOL.onTouchEnd);
			}
			removeEventListener("resize", resizeEvent);
		};
	}, []);

	return (
		<canvas
			id="GOL"
			ref={GOLCanvasRef}
			className="absolute top-0 left-0 -z-10 h-full w-full"
		/>
	);
};

export default Background;
