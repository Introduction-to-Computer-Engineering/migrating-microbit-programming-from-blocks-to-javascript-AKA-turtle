//to play game you must jump first (button A) then emmediately hit move forward (button B)
//otherwise if you hit button B first it will be game over


input.onButtonPressed(Button.B, function () {
    groundArray.push(brightnessLevels[Math.randomRange(0, 4)])
    groundMove = groundArray
    groundMove.removeAt(0)
    if (!(led.point(1, 4)) && sprite.get(LedSpriteProperty.Y) == 4) { //conditions for game over. if ground is NOT lit and sprite position is at ground level then...
        game.gameOver()
    }
})
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 2; i++) {            //creates animation by interating movement
        for (let j = 0; j <= 4 - 1; j++) {
            sprite.move(1)
            basic.pause(list[j])            //changes timing for each move
        }
        sprite.turn(Direction.Right, 180)
        list.reverse()                      //reverses timing for down movement
    }
})
let list: number[] = []
let sprite: game.LedSprite = null
let brightnessLevels: number[] = []
let groundArray: number[] = []
basic.showString("B MOVE RIGHT - A jUMP") //loading instructions
let groundMove: number[] = []
groundArray = []
groundMove = []

brightnessLevels = [0, 20, 60, 100, 200] // default brightness levels DO NOT MOVE
groundArray = [brightnessLevels[3], brightnessLevels[2], brightnessLevels[2], brightnessLevels[3], brightnessLevels[2]]

led.plotBrightness(0, 4, groundArray[0]) // sets initial ground sprites. WORKED INTITIALLY BUT NOT AFTER MERGE WITH BOUNCE ANIMATION
led.plotBrightness(1, 4, groundArray[1])
led.plotBrightness(2, 4, groundArray[2])
led.plotBrightness(3, 4, groundArray[3])
led.plotBrightness(4, 4, groundArray[4])
// starting position
sprite = game.createSprite(1, 5)
// setup: orients sprite upward
sprite.turn(Direction.Right, -90)
// now i can set timimg for each keyframe in one place
list = [10, 30, 80, 120]
basic.forever(function () {
    led.plotBrightness(0, 4, groundMove[0])
    led.plotBrightness(1, 4, groundMove[1])
    led.plotBrightness(2, 4, groundMove[2])
    led.plotBrightness(3, 4, groundMove[3])
    led.plotBrightness(4, 4, groundMove[4])
})
