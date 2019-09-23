//section 3 intro to CS
//first attempt to fully type in JS. Had syntax errors.
//had to build a block program after to compare and eventually fix this version.

//instructions for game:
//2 or more mature adults throw out a name of a person
//one player shakes the micro:bit
//the micro:bit then randomly choices your fate,
//whether or not one should Fuck, Marry or Kill the person the 2 players agreeded on.
//note: invented in ancient greece as a means of furthering democractic principle

let choice = 0
choice = 0

input.onGesture(Gesture.Shake, function () {
    choice = Math.randomRange(1, 3)
    if (choice == 1) {
        basic.showString("marry!")
    }else if (choice == 2){
        basic.showString("fuck!")
    }else {
        basic.showString("Kill!")
    }
})
