//declare starting score
let num1 = 0
let num2 = 0
document.getElementById("homeNum").textContent = num1
document.getElementById("guestNum").textContent = num2
//for home display score
let homeNum = document.getElementById("homeNum")
function plusOneHome() {
    let result = num1 += 1
    homeNum.textContent = result
}

function plusTwoHome() {
    let result = num1 += 2
    homeNum.textContent = result
}

function plusThreeHome() {
    let result = num1 += 3
    homeNum.textContent = result
}
//for guest display score
let guestNum = document.getElementById("guestNum")
function plusOne() {
    let result = num2 += 1
    guestNum.textContent = result
}

function plusTwo() {
    let result = num2 += 2
    guestNum.textContent = result
}

function plusThree() {
    let result = num2 += 3
    guestNum.textContent = result
}
//reset score
let resetScore = document.getElementById("reset-round")
function reset() { 
    homeNum.textContent = 0
    guestNum.textContent = 0
}