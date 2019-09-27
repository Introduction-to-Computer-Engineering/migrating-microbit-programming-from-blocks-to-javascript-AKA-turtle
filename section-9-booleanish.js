//creates some odd conditions on whether leds will light or not dependind on order and combination of button presses
/not super usefull

let index = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {    //while button B is not pressed
                                                    //it will continuously invert the leds
        led.toggleAll()

    }
    index = 4                                       //when B is pressed and the A a staight line will be drawn then erased twice
    while (index >= 0) {                            //hitting A again will cause the enntire screen to invert plus or minus the line just drawn
        led.toggle(index, index)
        index += -1
        basic.pause(100)
    }
})

