import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const GOLDEN_RATIO = (1 + 5 ** 0.5) / 2;

export default class SkillCubeRender {
    size: number;
    canvas: HTMLCanvasElement;
    skills: string[];

    scene: THREE.Scene;
    camera: THREE.Camera;

    renderer: THREE.WebGLRenderer;
    fontLoader: FontLoader;
    meshes: THREE.Mesh[] = [];

    rotate = false;
    velocity = new THREE.Vector2();
    mouseLoc = new THREE.Vector2();
    temp = new THREE.Vector3();

    constructor(canvas: HTMLCanvasElement, skills: string[], size = 1) {
        this.size = canvas.width;
        this.canvas = canvas;
        this.skills = skills;

        this.scene = new THREE.Scene();
        this.scene.background = null;

        this.scene.fog = new THREE.FogExp2(0xfecdd3, 0.022);

        this.camera = new THREE.PerspectiveCamera(
            75,
            this.size / this.size,
            0.1,
            100
        );
        this.camera.position.set(0, 0, 40);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
        });
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(this.size, this.size);

        this.fontLoader = new FontLoader();
        this.fontLoader.load("/Portfolio/fonts/Roboto.json", (font) => {
            this.loadText(font, size);
            this.render();
        });
    }

    loadText(font: any, size: number) {
        const points = this.getSphere(20, this.skills.length);

        this.skills.forEach((skill, index) => {
            const textGeometry = new TextGeometry(skill, {
                font: font,
                size: 1,
                height: 0,
            });

            const textMaterial = new THREE.MeshBasicMaterial({
                color: 0xbef264,
                fog: true,
            });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);

            textGeometry.computeBoundingBox();
            if (textGeometry.boundingBox === null) return;

            const x =
                points[index].x -
                (textGeometry.boundingBox.max.x -
                    textGeometry.boundingBox.min.x) /
                2;
            const y =
                points[index].y -
                (textGeometry.boundingBox.max.y -
                    textGeometry.boundingBox.min.y) /
                2;

            textMesh.position.set(x, y, points[index].z);
            this.meshes.push(textMesh);
            this.scene.add(textMesh);
        });
    }

    getSphere = (
        radius: number,
        noOfPoints: number
    ): { x: number; y: number; z: number }[] => {
        var points: { x: number; y: number; z: number }[] = [];

        var epsilon = 0;

        if (noOfPoints >= 600000) epsilon = 214;
        else if (noOfPoints >= 400000) epsilon = 75;
        else if (noOfPoints >= 11000) epsilon = 27;
        else if (noOfPoints >= 890) epsilon = 10;
        else if (noOfPoints >= 177) epsilon = 3.33;
        else if (noOfPoints >= 24) epsilon = 1.33;
        else epsilon = 0.33;

        for (let i = 0; i < noOfPoints; i++) {
            const theta = (2 * Math.PI * i) / GOLDEN_RATIO;
            const phi = Math.acos(
                1 - (2 * (i + epsilon)) / (noOfPoints - 1 + 2 * epsilon)
            );
            points.push({
                x: Math.cos(theta) * Math.sin(phi) * radius,
                y: Math.sin(theta) * Math.sin(phi) * radius,
                z: Math.cos(phi) * radius,
            });
        }

        return points;
    };

    onMouseMove = (event: MouseEvent) => {
        if (!this.rotate) return;

        const bounds = this.canvas.getBoundingClientRect();
        const xCenter = bounds.x + bounds.width / 2;
        const yCenter = bounds.y + bounds.height / 2;

        const x = event.clientX - xCenter;
        const y = event.clientY - yCenter;

        this.mouseLoc.x = x;
        this.mouseLoc.y = y;
    };

    resize = () => {
        this.renderer.setSize(this.canvas.width, this.canvas.height);
    };

    render = () => {
        this.meshes.forEach((mesh) => {
            mesh.getWorldPosition(this.temp);
            mesh.lookAt(
                new THREE.Vector3(
                    this.temp.x,
                    this.temp.y,
                    this.camera.position.z
                )
            );
        });

        this.scene.rotateOnWorldAxis(
            new THREE.Vector3(0, 1, 0),
            this.velocity.x
        );
        this.scene.rotateOnWorldAxis(
            new THREE.Vector3(1, 0, 0),
            this.velocity.y
        );

        if (this.rotate) {
            // Speed Up until MouseLoc/80000

            this.velocity.x +=
                (this.mouseLoc.x / 80000 - this.velocity.x) * 0.01;
            this.velocity.y +=
                (this.mouseLoc.y / 80000 - this.velocity.y) * 0.01;
        } else {
            // Slow Down
            this.velocity.x *= 0.99;
            this.velocity.y *= 0.99;

            if (Math.abs(this.velocity.x) < 0.00001) this.velocity.x = 0;
            if (Math.abs(this.velocity.y) < 0.00001) this.velocity.y = 0;
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
    };
}
