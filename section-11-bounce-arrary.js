//completed goal of having correct bounce animation from midterm  
//sprite bounces on button press animation slows down near apex
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j <= 4 - 1; j++) {
            sprite.move(1)
            basic.pause(list[j])
        }
        sprite.turn(Direction.Right, 180)
        list.reverse()  //reverses timimg for animation before re-running for loop
    }
})
let list: number[] = []
let sprite: game.LedSprite = null
// starting position
sprite = game.createSprite(1, 5)
// setup: orients sprite upward
sprite.turn(Direction.Right, -90)

//now i can set timimg for each keyframe in one place
list = [10, 30, 80, 120] //pause timing for each step
