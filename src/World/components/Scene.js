import {Color, Scene as ThreeScene} from "three";

class Scene {
    constructor(bgColor = 'white') {
        this.scene = new ThreeScene()
        this.scene.background = new Color(bgColor)
    }

    create() {
        return this.scene
    }

    add(object) {
        this.scene.add(object)
    }
}

export default Scene