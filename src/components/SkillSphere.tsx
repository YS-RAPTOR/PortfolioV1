import { useEffect, useRef } from "react";
import SkillCubeRender from "../webgl/SkillSphereRender";

const SkillCube = ({ skills, size }: { skills: string[]; size: number }) => {
    // Account for border/padding

    const SkillSphereCanvasRef = useRef<HTMLCanvasElement>(null);

    const AccountForPadding = (size: number) => {
        return size - 2 * 2;
    };

    useEffect(() => {
        const SkillSphereCanvas = SkillSphereCanvasRef.current!;

        if (!SkillSphereCanvas) return;

        // Setting up canvas
        SkillSphereCanvas.width = AccountForPadding(
            Math.min(window.innerWidth, size)
        );
        SkillSphereCanvas.height = AccountForPadding(
            Math.min(window.innerWidth, size)
        );
        dispatchEvent(new Event("resize"));

        const SC = new SkillCubeRender(SkillSphereCanvas, skills);

        // Setting up Event Listeners
        SkillSphereCanvas.addEventListener("pointerenter", (event) => {
            SC.rotate = true;
        });

        SkillSphereCanvas.addEventListener("pointerleave", (event) => {
            SC.rotate = false;
        });

        SkillSphereCanvas.addEventListener("pointermove", (event) => {
            SC.onMouseMove(event);
        });

        addEventListener("resize-correct", (event) => {
            // Have max width but no min width
            SkillSphereCanvas.width = AccountForPadding(
                Math.min(window.innerWidth, size)
            );
            SkillSphereCanvas.height = AccountForPadding(
                Math.min(window.innerWidth, size)
            );
            SC.resize();
        });
    }, []);

    return <canvas ref={SkillSphereCanvasRef} className="border-2 border-l-rose-50" />;
};

export default SkillCube;
