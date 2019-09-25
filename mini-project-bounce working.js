//sprite bounces on button press
//animation slows down near apex

input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 2; i++) {
        sprite.turn(Direction.Right, 180)  //cause sprite 
        for (let i = 0; i <= 4 - 1; i++) {
            sprite.move(1)
            basic.pause((i + 1) * (i + 1) * 12) //math creates parabala like timing in upward direction only
                                                //need to create 2 diferent modes
        }
    }
})

let sprite: game.LedSprite = null
//starting position
sprite = game.createSprite(1, 5)
//setup: orients sprite upward
sprite.turn(Direction.Right, 90)
