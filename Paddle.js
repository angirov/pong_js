export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset()
    }

    get positon() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set positon(value) {
        this.paddleElem.style.setProperty("--position", value)
    }

    reset() {
        this.positon = 50;
    }

    update(delta, ballHeight) {
        this.positon = ballHeight
    }
}