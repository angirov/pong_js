import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById("ball"))
const paddle0 = new Paddle(document.getElementById("player0-paddle"))
const paddle1 = new Paddle(document.getElementById("player1-paddle"))
const score0Elem = document.getElementById("player0-score")
const score1Elem = document.getElementById("player1-score")

let lastTime;
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta, [paddle0.rect(), paddle1.rect()])
        paddle1.update(delta, ball.y)
        if (isLose()) handleLose()
    }
    lastTime = time;
    window.requestAnimationFrame(update)
}

function isLose() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth || rect.left <= 0) {
        return true
    }
}

function handleLose() {
    const rect = ball.rect()
    if (rect.right > window.innerWidth) {
        score0Elem.textContent = parseInt(score0Elem.textContent) + 1
    }
    else {
        score1Elem.textContent = parseInt(score1Elem.textContent) + 1
    }
    ball.reset()

}

document.addEventListener("mousemove", e => {
    paddle0.position = e.y / window.innerHeight * 100
})

// it calls update func every time something is allowed to change on the screen
window.requestAnimationFrame(update)