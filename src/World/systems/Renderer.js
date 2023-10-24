import {WebGLRenderer} from "three";

class Renderer {
    constructor() {
    }

    create() {
        return new WebGLRenderer();
    }
}

export default Renderer;