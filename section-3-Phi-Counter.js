//section 3 intro to CS

//fibonachi sequence goes up 
input.onButtonPressed(Button.B, function () {
    phiSum = countDown + countUp
    basic.showNumber(phiSum)
    basic.clearScreen()
    countDown = countUp
    countUp = phiSum
})
//fibonachi sequence goes down
input.onButtonPressed(Button.A, function () {
    phiSum = countUp - countDown
    basic.showNumber(countUp)
    basic.clearScreen()
    countUp = countDown
    countDown = phiSum
})
let phiSum = 0
let countUp = 0
let countDown = 0
countDown = 1
basic.showNumber(1)
basic.clearScreen()
basic.pause(1000)
basic.showNumber(1)
basic.clearScreen()
countUp = 1
basic.forever(function () {

})
