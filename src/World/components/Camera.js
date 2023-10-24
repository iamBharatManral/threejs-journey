import {PerspectiveCamera} from "three";

class Camera {
    types = {
        perspective: () => new PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
    }

    constructor(type, fov, aspect, near, far) {
        this.type = type
        this.fov = fov
        this.aspect = aspect
        this.near = near
        this.far = far
    }

    create() {
        return this.types[this.type]()
    }
}

export default Camera