import {Mesh as ThreeMesh} from "three";

class Mesh {

    constructor(geometry, material) {
        this.geometry = geometry
        this.material = material
    }

    create() {
        return new ThreeMesh(this.geometry, this.material)
    }
}

export default Mesh