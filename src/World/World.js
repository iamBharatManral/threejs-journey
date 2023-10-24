import {BoxGeometry, MeshBasicMaterial} from "three";
import Scene from "./components/Scene";
import Camera from "./components/Camera";
import Renderer from "./systems/Renderer";
import Mesh from "./components/Mesh";
import Resizer from "./systems/Resizer";

class World {
    #renderer;
    #camera;
    #scene;

    constructor(container) {
        this.#camera = new Camera('perspective', 35, 1, 0.1, 100).create();
        this.#camera.position.set(0, 0, 10);
        this.#scene = new Scene().create();
        this.#renderer = new Renderer().create();
        container.append(this.#renderer.domElement);
        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    render() {
        const geometry = new BoxGeometry(5, 5, 5);
        const material = new MeshBasicMaterial({color: 'skyblue'});
        const box = new Mesh(geometry, material).create();
        this.#scene.add(box)
        this.#renderer.render(this.#scene, this.#camera);
    }
}

export default World;