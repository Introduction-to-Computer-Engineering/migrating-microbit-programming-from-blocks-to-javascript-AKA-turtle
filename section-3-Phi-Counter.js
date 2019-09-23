//section 3 intro to CS
//this is a simple program that will count up or down through the fibonacci
//the sequence is dirived by starting from 1 adding 1 to get 2 the adding the last two numbers together to get the next number
//i.e. 1,1,2,3,5,8,13,21,34..........

//fibonacci sequence goes up 
input.onButtonPressed(Button.B, function () {
    phiSum = countDown + countUp
    basic.showNumber(phiSum)
    basic.clearScreen()
    countDown = countUp
    countUp = phiSum
})
//fibonacci sequence goes down
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
