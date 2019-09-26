//section 7
// started with brightness tutorial
//modified AB press
//now it toggles on/off random pixels
//was going to try to randomize brightness as well
//but on trying realized brightness is global not by pixel/sprite
//should investigate farther

input.onButtonPressed(Button.A, () => {
    led.setBrightness(led.brightness() - 25)
})
input.onButtonPressed(Button.B, () => {
    led.setBrightness(led.brightness() + 25)
})

// modified AB press
//now it toggles on/off random pixels
//was going to try to randomize brightness
//but on trying realized brightness is global not by pixel/sprite
//should investigate farther

input.onButtonPressed(Button.AB, () => {
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, Math.randomRange(0, 5))
    }
})
led.setBrightness(255)
basic.showIcon(IconNames.Heart)
