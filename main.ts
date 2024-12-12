controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . c c c c c 5 5 5 5 5 5 c c 
    . . . c c b 5 5 5 5 5 5 5 5 5 5 
    c c . . b 5 5 5 5 5 5 5 5 5 5 5 
    c c c b 5 5 5 5 5 5 f f 1 5 5 5 
    . c b 5 5 5 5 5 5 5 5 f f 5 5 d 
    . b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . b 5 5 5 d d 3 5 5 5 b b 1 3 b 
    c d 5 5 d d d d d 5 5 5 b 3 3 3 
    c d d 5 d d d d d d d 5 5 b 3 3 
    b d d d d b 5 5 b d d d d 5 5 5 
    d d d d d b 5 5 b b b b b c c c 
    d d d d d d b 5 5 5 5 c b c c c 
    d d d d d d d c 5 5 5 c b c 5 5 
    d d d d d d d d c c c b b c 5 c 
    d d d d d 5 5 d b b b b c c c . 
    d d d d d 5 5 5 d b b b c b c . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
