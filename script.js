import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById("ball"))
const paddle0 = new Paddle(document.getElementById("player0-paddle"))
const paddle1 = new Paddle(document.getElementById("player1-paddle"))

let lastTime;
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta)
        paddle1.update(delta, ball.y)
    }
    lastTime = time;
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
    paddle0.positon = e.y / window.innerHeight * 100
})

// it calls update func every time something is allowed to change on the screen
window.requestAnimationFrame(update)