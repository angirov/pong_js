import Ball from './Ball.js'

const ball = new Ball(document.getElementById("ball"))

let lastTime;
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta)
    }
    lastTime = time;
    window.requestAnimationFrame(update)
}

// it calls update func every time something is allowed to change on the screen
window.requestAnimationFrame(update)