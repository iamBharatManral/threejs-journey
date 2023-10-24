import World from "./World/World.js";

const main = () => {
    const container = document.querySelector("#scene")
    const world = new World(container)
    world.render()
}

main()