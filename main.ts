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
}
function createBird () {
	
}
function createCloud () {
	
}
function placeMountain (leftPosition: number) {
    lastCreatedMountain = sprites.create(mountains[randint(0, mountains.length - 1)], SpriteKind.Mountain)
    lastCreatedMountain.left = leftPosition
    lastCreatedMountain.bottom = scene.screenHeight()
    lastCreatedMountain.z = -15
    lastCreatedMountain.setFlag(SpriteFlag.AutoDestroy, true)
    lastCreatedMountain.setFlag(SpriteFlag.Ghost, true)
}
function createTree () {
    ufo = sprites.createProjectileFromSide(img`
        ...............cc...............
        ............ccc65c66............
        ............c6c55c76............
        ...........6cc7557c66...........
        ..........cc77777577c6..........
        .........666c677776cc66.........
        ........c7776c7c67657576........
        ........ccc666c666655666........
        ......c66cc7666667777c6766......
        .....c777c77667667767767776.....
        .....cc66cccc77c677cc666666.....
        ....c6766666c7c6767677777766....
        ...cc777666666677767777667c66...
        .666cc6677666667777777776677666.
        .67776677c676677777776677677776.
        cc6666ccc67767776777776cc7767666
        c666777667766776c776777c67776c66
        .c6777666ccc667c676cc666667776c.
        .cc6666766666cc66666666776cc666.
        ...66776c666666666677667766cccc.
        ...cc76c66766666667677667776c...
        ...6cccc677666666776777c77666...
        ......6ccc7c67767776c776cc......
        ........ccc6777c67776cc6........
        ...........cc77c67766...........
        .............6c6666.............
        ............ffeeeef.............
        ..........ffeeeeeeeef...........
        .............feeeffe............
        ..............fef...............
        ..............fef...............
        ...............f................
        `, ufoSpeed, 0)
}
let ufo: Sprite = null
let birdGoingRight: Image[] = []
let birdGoingLeft: Image[] = []
let ufoFrames: Image[] = []
let ufoSpeed = 0
let lastCreatedMountain: Sprite = null
let mountains: Image[] = []
let balloonDeflated = img`
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
let balloonInflated = img`
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
let balloon = sprites.create(balloonDeflated, SpriteKind.Player)
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
