namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Mountain = SpriteKind.create()
}
function spawnSomething (roll: number) {
    if (roll <= 2) {
        createUFO()
    } else if (roll <= 6) {
        createTree()
    } else if (roll <= 18) {
        createCloud()
    } else if (roll < 54) {
        createBird()
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.startEffect(effects.fire)
    balloon.ay = -50
    balloon.setImage(balloonInflated)
})
function createAnimationArrays () {
    ufoFrames = [img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fa9b9bb9bb9bb9bb9b9af
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `, img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fab4b44b44b44b44b4baf
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `]
    birdGoingLeft = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f 
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f . 
        . f f f 8 8 8 f 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . . 
        . f 8 f 8 8 8 8 8 f 8 f 8 8 8 f . 
        f 4 5 8 8 8 8 8 8 8 f 8 8 8 8 f . 
        f 5 5 5 8 8 f 8 8 8 8 f 8 8 f . . 
        . f f f 8 8 8 f 8 8 8 8 f 8 f . . 
        . . . . f f a f f 8 8 8 8 f f . . 
        . . . . . . . . f 8 8 8 f . . . . 
        . . . . . . . . . f 8 8 f . . . . 
        . . . . . . . . . . f f . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f 
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f . 
        . f f f 8 8 8 f 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . f 8 8 f . . 
        . . . f f f f . f f 8 8 8 f . . 
        . . f 8 8 8 8 f f 8 8 8 f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 f 8 f f 8 f 
        f 5 5 5 8 8 8 8 8 f 8 8 8 8 f . 
        . f f f 8 8 8 8 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    birdGoingRight = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 f 8 8 8 8 8 f 8 f . 
        f 8 8 8 8 f 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 f 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 f 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 8 f f f f . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . . f 8 8 f . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . f f . . . . . . . . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f 8 8 8 f f . f f f f . . . 
        . f f f 8 8 8 f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 f 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 f 8 8 8 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 8 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    effects.clearParticles(balloon)
    balloon.ay = 50
    balloon.setImage(balloonDeflated)
})
function createUFO () {
    if (Math.percentChance(50)) {
        ufoSpeed = 40
    } else {
        ufoSpeed = -40
    }
    ufo = sprites.createProjectileFromSide(img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fa9b9bb9bb9bb9bb9b9af
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `, ufoSpeed, 0)
    animation.runImageAnimation(
    ufo,
    ufoFrames,
    500,
    true
    )
    ufo.y = randint(10, scene.screenHeight() - 10)
}
function createBird () {
    if (Math.percentChance(50)) {
        birdSpeed = 20
        chosenAnimation = birdGoingRight
    } else {
        birdSpeed = -20
        chosenAnimation = birdGoingLeft
    }
    bird = sprites.createProjectileFromSide(chosenAnimation[0], birdSpeed, 0)
    animation.runImageAnimation(
    bird,
    chosenAnimation,
    100,
    true
    )
    bird.y = randint(12, scene.screenHeight() - 10)
}
function createCloud () {
    cloudImages = [img`
        ..................1111...............
        ................11111111.............
        ...............1111111111............
        ..............11111111111....11111...
        ..............111111111111.11111111..
        .............11111111111111111111111.
        ........11111111111111111111111111111
        .......111111111111111111111111111111
        1111111111111111111111111111111111111
        .111111111111111111111111111111111111
        .......111111111111111111111111111111
        .......................1111111111111.
        `, img`
        . . . 1 1 1 1 . . . 1 1 . . . . . . . . 
        . . 1 1 1 1 1 1 . 1 1 1 1 . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
        `, img`
        ............111111...........
        ..........111111111..........
        .........11111111111.........
        ........1111111111111........
        ........1111111111111........
        ........11111111111111.......
        ....111111111111111111111111.
        ...11111111111111111111111111
        ..111111111111111111111111111
        ..111111111111111111111111111
        11111111111111111111111111111
        .11111111111111111111.1.1111.
        1........11111111111.....11..
        11111111111111...............
        `]
    cloud = sprites.createProjectileFromSide(cloudImages._pickRandom(), -5, 0)
    cloud.z = -5
    cloud.setFlag(SpriteFlag.Ghost, true)
    cloud.y = randint(0, scene.screenHeight() * 0.6)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    sprite.say("OW!", 300)
})
function placeMountain (leftPosition: number) {
    lastCreatedMountain = sprites.create(mountains[randint(0, mountains.length - 1)], SpriteKind.Mountain)
    lastCreatedMountain.left = leftPosition
    lastCreatedMountain.bottom = scene.screenHeight()
    lastCreatedMountain.z = -15
    lastCreatedMountain.setFlag(SpriteFlag.AutoDestroy, true)
    lastCreatedMountain.setFlag(SpriteFlag.Ghost, true)
}
function createTree () {
    tree = sprites.createProjectileFromSide(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, -10, 0)
    tree.z = -5
    tree.bottom = scene.screenHeight()
}
let nearGroundCount = 0
let tree: Sprite = null
let cloud: Sprite = null
let cloudImages: Image[] = []
let bird: Sprite = null
let chosenAnimation: Image[] = []
let birdSpeed = 0
let ufo: Sprite = null
let birdGoingRight: Image[] = []
let birdGoingLeft: Image[] = []
let ufoFrames: Image[] = []
let ufoSpeed = 0
let lastCreatedMountain: Sprite = null
let mountains: Image[] = []
let balloon: Sprite = null
let balloonInflated: Image = null
let balloonDeflated: Image = null
balloonDeflated = img`
    ...................
    ...................
    .......fffff.......
    .....ff22222ff.....
    ....f222222442f....
    ...f22222222442f...
    ..f2222222222442f..
    .f222322223222422f.
    .f222322223222222f.
    .f222322223222222f.
    .f222232222322222f.
    .f222222222222222f.
    ..f2222322232222f..
    ..f2222233322222f..
    ...ff222222222ff...
    ....ffff222ffff....
    .....f.fffff.f.....
    .....f.......f.....
    .....f.......f.....
    ......f.....f......
    ......f.....f......
    .......f...f.......
    .......f.2.f.......
    ......fffffff......
    .....fcccccccf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fcbaaabcf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fccaaaccf.....
    ......fcccccf......
    .......fffff.......
    `
balloonInflated = img`
    ...................
    ......fffffff......
    ....ff2222222ff....
    ...f22222222442f...
    ..f2222222222442f..
    .f222222222222442f.
    f22232222223222422f
    f22232222223222222f
    f22232222223222222f
    f22223222222322222f
    f22222222222222222f
    f22222222222222222f
    .f222232222232222f.
    .f222223333322222f.
    ..ff22222222222ff..
    ....ffff222ffff....
    .....f.fffff.f.....
    .....f.......f.....
    .....f.......f.....
    ......f.....f......
    ......f.....f......
    .......f...f.......
    .......f.2.f.......
    ......fffffff......
    .....fcccccccf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fcbaaabcf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fccaaaccf.....
    ......fcccccf......
    .......fffff.......
    `
balloon = sprites.create(balloonDeflated, SpriteKind.Player)
balloon.ay = 35
balloon.z = 100
balloon.setFlag(SpriteFlag.StayInScreen, true)
music.setVolume(0)
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(9)
createAnimationArrays()
mountains = [img`
    ......................333333........................3333........................
    ...................333333333333...................3333333333....................
    ................333333333333333333..............3333333333333333................
    .............33333333333333333333333.........333333333333333333333333...........
    ..........333333333333333333333333333......333333333333333333333333333333.......
    ........3333333333333333333333333333333..33333333333333333333333333bb33333333...
    ......333333333bb3333333333333333b33333b3333333333333333333333333bbbb333333333..
    ....333333333333b33333333333333333b333bb3333333333333333333333bbbbbbbb333333333.
    ..3333333333333bbb33b3333333333b33bbbbbbbb3b33333333333333b3bbbbbbbbbb3333333333
    3333333333333333bb33b3333333333bbbbbbbbbbbbb33333333333333bbbbbbbbbbbbb3333b3333
    3333333333333b33bbbbbb33b3b3bbbbbbbbbbbbbbbbb333333333b33bbbbbbbbbbbbbbbb33b3333
    333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3b333333bbbbbbbbbbbcbbbbbbbbbb3bb3
    333333b33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333bbbbbbbbbcbbbcccbbbbbbbbb3b33
    333b33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcccccbccbbbbbbbbbb33
    333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbccbbbbbbbbbb
    33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbccbbbbbbcb
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbccccccccccccbcccccccccccccbcbbcc
    cccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcccbccccccccccccccccccbcccccccccccccbccccc
    cccccbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccccccccccbbcccc
    ccccccccbcbcbbbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccbbcbbbbcbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccbcbcbbbbbbcbcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccbcccccccccccccccccbcbbcccccccccbcccccccccccccccccccccccccccccccccccccccccccc
    ccccccbcccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccc
    ccccbcccbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, img`
    ....................3...........................................................
    ....................3...........................................................
    ...................333..........................................................
    ...................3333.........................................................
    ..................333333........................................................
    ..................33333333......................................................
    .................33333333333....................................................
    ................33333333333333..................................................
    ...............3333333333333333.......................3.........................
    ..............333333333333333333...................33333........................
    .............33333333333333333333...............333333333333....................
    ...........33333333333333333333333............3333333333333333..................
    ..........3333333333333333333333333..........3333333333333333333................
    ........3333333333333333333333333333.......3333333333333333333b333..............
    .....33333333333333333333333333333333...333333333333333333333bbb3333..........3.
    .33333333333333333333333333333333333333333333333333333333333bbbbb33333......3333
    33333333333333333333333333333333333333333333333333333333333333b33333333333333333
    333333333333333333333333333333333b333333333333333333333333333bb33333333333333333
    333333333333333333333333333333b3bbb3b3333333333333333333333bbbbb333333333b333333
    333333333333b33333333333333333bbbbbbb3333333333333333333bbbbbbbbb33333333bb33333
    333333333b33b33b33b333333b33bbbbbbbbbb333333333333bbbbbbbbbbbbbbb33333333bbb3333
    33333333bbbbbbbbbbbb3b333bbbbbbbbbbbbbb33333333bbbbbbbbbbbbbbbbbbb333333bbbb33b3
    3333b3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbb3b3bbbbbbbbb
    c333bbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    cccbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbcc
    ccccbbbbbbbbbbbbbbbbbbbbbbbccccccbccbcbcbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbcbccc
    ccccccbcbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbcbbcccccccbcbbbbbbbbbbbbbcbccccc
    ccccccccbcbbbbbccbbbbbbcccccccccccccccccccccbcbcccccccccccccbbcbbbbbbbbbbccccccc
    cbccccccccbbcbccccbbcbcccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccbcc
    cccccccccccccbbccbbbcccccbcbcccccccccccccccccccccccccccbccccbccccccccccccccccccc
    ccccccccccccccccccccccccccbcbcccccccccccccccccccccccbccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccc
    ccccccbcbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccc
    ccccccccbcbccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccc
    ccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `]
let sun = sprites.create(img`
    ......................................................................444444444444444...........................................................................
    ..............................................................444444444444444444444444444444444.................................................................
    ........................................................44444444444444444444555555444444444444444444444.........................................................
    .....................................................444444444444444444444555555555544444444444444444444444444444...............................................
    ..................................................44444444444444444444445555555555555544444444444444444444444444444.............................................
    ...............................................44444444444444444444444455555555555555554444444444444444444444444444444444444....................................
    .......................................4444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444........................
    .................................444444444444444444444444444444444444455555555555555555544444444444444444444444444444444444444444444444444444444................
    .........................44444444444444444444444444444444444444444444455555555555555555544444444444444444444444444444444444444444444444444444444444444444.......
    44444.......444444444444444444444444444444444444444444444444444444444555555555555555555554444444444444444444444444444444444444444444444444444444444444444444....
    444444444444444444444444444444444444444444444444444444444444444444444555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444.
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444445555555555555544444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444455555555554444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `, SpriteKind.Background)
sun.bottom = 100
sun.z = -20
sun.setFlag(SpriteFlag.Ghost, true)
placeMountain(0)
placeMountain(lastCreatedMountain.right)
game.setDialogFrame(img`
    ..ccccc....333.....333...ccccc...
    .c33b33c..39993...39993.c33b33c..
    c3b33bb3c39999933399999c3bb33b3c.
    c33b33b3c99111999991119c3b33b33c.
    cb33b33bc91999199919991cb33b33bc.
    c3b33bbbcb999991119999bcbbb33b3c.
    c3bb3bbd1b111119991111b1dbb3bb3c.
    .c33bbd1b11111111111111b1dbb33c..
    ..cccc1b1111111111111111b1cccc...
    .3991bb111111111111111111bb993...
    3991991111111111111111111191993..
    39919911111111111111111111991993.
    39919911111111111111111111991993.
    .3991911111111111111111111991993.
    ..39919111111111111111111191993..
    ..3991911111111111111111191993...
    ..3991911111111111111111191993...
    .39919111111111111111111191993...
    3991991111111111111111111191993..
    39919911111111111111111111991993.
    39919911111111111111111111991993.
    .3991911111111111111111111991993.
    ..699bb111111111111111111bb1993..
    ..cccc1b1111111111111111b1cccc...
    .c33bbd1b11111111111111b1dbb33c..
    c3bb3bbd1b111199911111b1dbb3bb3c.
    c3b33bbbcb999911199999bcbbb33b3c.
    cb33b33bc19991999199919cb33b33bc.
    c33b33b3c91119999911199c3b33b33c.
    c3b33bb3c99999333999993c3bb33b3c.
    .c33b33c.39993...39993..c33b33c..
    ..ccccc...333.....333....ccccc...
    .................................
    `)
game.showLongText("Stay in the air as long as you can. Press any button to turn on the burner and go up!", DialogLayout.Center)
ufoSpeed = 0
game.onUpdate(function () {
    info.changeScoreBy(1)
    if (balloon.bottom >= scene.screenHeight() - 1) {
        balloon.say("Pull up", 100)
        nearGroundCount += 1
        if (nearGroundCount > 50) {
            info.changeLifeBy(-1)
            nearGroundCount = -20
        }
    }
})
game.onUpdate(function () {
    balloon.vy = Math.constrain(balloon.vy, -25, 25)
})
game.onUpdateInterval(750, function () {
    spawnSomething(randint(0, 150))
})
game.onUpdateInterval(200, function () {
	for (let mountain of sprites.allOfKind(SpriteKind.Mountain)){
        mountain.x += 1
        if (lastCreatedMountain.right < scene.screenWidth()){
                placeMountain(lastCreatedMountain.right)
        }
    }
})
