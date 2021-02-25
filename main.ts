namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Mountain = SpriteKind.create()
}
function createAnimationArrays () {
    flyingSaucer = [img`
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
// arrayName[indexNumber]
// How do you create a random index number?
// randint(0, array.length - 1)
function placeMountain (leftPosition: number) {
    lastCreatedMountain = sprites.create(mountains[randint(0, mountains.length - 1)], SpriteKind.Mountain)
    lastCreatedMountain.left = leftPosition
    lastCreatedMountain.bottom = scene.screenHeight()
    lastCreatedMountain.z = -15
    lastCreatedMountain.setFlag(SpriteFlag.AutoDestroy, true)
    lastCreatedMountain.setFlag(SpriteFlag.Ghost, true)
}
let lastCreatedMountain: Sprite = null
let birdGoingRight: Image[] = []
let birdGoingLeft: Image[] = []
let flyingSaucer: Image[] = []
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