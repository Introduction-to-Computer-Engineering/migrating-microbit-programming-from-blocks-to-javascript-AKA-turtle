//section 5 intro to cs
//this program creates a spinner 
//usable for a "busy, loading" animation
//could of synced movements but decided too much time to interlace code by hand
//should be a better way in code?...

input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 8; i++) {
        // top start for both sprites edge crawl
        sprite1.move(1)
        basic.pause(20)
        sprite1.move(1)
        insideSprite1.move(1)
        basic.pause(20)
        sprite1.move(1)
        basic.pause(20)
        sprite1.move(1)
        insideSprite1.move(1)
        basic.pause(20)
        sprite1.turn(Direction.Right, 90)
        insideSprite1.turn(Direction.Right, 90)
        basic.pause(100)
        // bottom start for both sprites edge crawl
        //causes a lag to have top and bottom seperated
        sprite2.move(1)
        basic.pause(20)
        sprite2.move(1)
        insideSprite2.move(1)
        basic.pause(20)
        sprite2.move(1)
        basic.pause(20)
        sprite2.move(1)
        insideSprite2.move(1)
        basic.pause(20)
        sprite2.turn(Direction.Right, 90)
        insideSprite2.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
let insideSprite2: game.LedSprite = null
let sprite2: game.LedSprite = null
let insideSprite1: game.LedSprite = null
let sprite1: game.LedSprite = null
sprite1 = game.createSprite(0, 0)
insideSprite1 = game.createSprite(1, 1)
sprite2 = game.createSprite(5, 5)
insideSprite2 = game.createSprite(3, 3)
//next step reverses the direction for bottom sprites before loop begins
sprite2.turn(Direction.Right, 180)
insideSprite2.turn(Direction.Right, 180)
