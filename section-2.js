// when button A is pushed display happy face
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
})
// when button B is pushed display sad face
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        `)
})
basic.clearScreen()
