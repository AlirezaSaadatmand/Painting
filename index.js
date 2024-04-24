const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let red = document.querySelector("#red");
let black = document.querySelector("#black");
let white = document.querySelector("#white");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let yellow = document.querySelector("#yellow");

let redChosen = false
let blackChosen = false
let whiteChosen = false
let yellowChosen = false
let greenChosen = false
let blueChosen = false



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mounseHold = false
canvas.addEventListener("mouseup", () => {
    mounseHold = false
})
canvas.addEventListener("mousedown", () => {
    mounseHold = true
})


red.addEventListener("click", () => {
    blackChosen = false
    whiteChosen = false
    yellowChosen = false
    greenChosen = false
    blueChosen = false
    redChosen = true
})
black.addEventListener("click", () => {
    blackChosen = true
    whiteChosen = false
    yellowChosen = false
    greenChosen = false
    blueChosen = false
    redChosen = false
})
white.addEventListener("click", () => {
    blackChosen = false
    whiteChosen = true
    yellowChosen = false
    greenChosen = false
    blueChosen = false
    redChosen = false
})
blue.addEventListener("click", () => {
    blackChosen = false
    whiteChosen = false
    yellowChosen = false
    greenChosen = false
    blueChosen = true
    redChosen = false
})
yellow.addEventListener("click", () => {
    blackChosen = false
    whiteChosen = false
    yellowChosen = true
    greenChosen = false
    blueChosen = false
    redChosen = false
})
green.addEventListener("click", () => {
    blackChosen = false
    whiteChosen = false
    yellowChosen = false
    greenChosen = true
    blueChosen = false
    redChosen = true
})
let x, y;
window.addEventListener("mousemove", (event) => {
    x = event.clientX
    y = event.clientY

})

setInterval(() => {
    if (mounseHold && redChosen) {
        draw(x, y, "red")
    }
    if (mounseHold && blackChosen) {
        draw(x, y, "black")
    }
    if (mounseHold && whiteChosen) {
        draw(x, y, "white")
    }
    if (mounseHold && greenChosen) {
        draw(x, y, "green")
    }
    if (mounseHold && yellowChosen) {
        draw(x, y, "yellow")
    }
    if (mounseHold && blueChosen) {
        draw(x, y, "blue")
    }
}, 1);
let size = 20
let label = document.querySelector("#label")
setInterval(() => {
    let x = document.querySelector("#range")
    size = x.value
    label.innerHTML = String(size)
}, 1);



function ClearBoard() {
    ctx.fillStyle = "#e7e7e7"
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
}

function draw(x, y, color) {
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill()
}