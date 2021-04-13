function setUpStopper () {
    stopper = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Enemy)
    stopper.setPosition(80, 116)
    animation.runImageAnimation(
    stopper,
    [img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `,img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `],
    200,
    true
    )
}
function makeArrow () {
   let arrowNumber = randint(0, 3)
    let arrow = sprites.create(arrowImgs[arrowNumber], SpriteKind.Food)
    arrow.y=7
    arrow.vy = 50


}
let stopper: Sprite = null
let arrowImgs: Image[] = []
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............111................................................................................................................................................
    .............111................................................................................................................................................
    .............111................................................................................................................................................
    ................................................................................................................................................................
    ..................................................................1.............................................................................................
    ..................................................................1.............................................................................................
    ..................................................................1..................111....................................................111.................
    ..................................................................11.................111........................11..........................111.................
    .....................................................................................111....................................................111.................
    ................................................................................................................................................................
    .............................................1..................................................................................................................
    ................................................................................................................................................................
    ........................................................................................................................................................1.......
    ................................................................................................................................................................
    ..........................................................................................................................1.....................................
    ..........................................................................................................................1.....................................
    ..........................................................................................................................111...................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............1.................................................................................................................................................
    .......................................................................................................1........................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...........................................111.......................................................................1..........................................
    ...........................................111.......................................................................1.............111.............1............
    ...........................................111.....................................................................................111..........................
    .............................................................................1.....................................................111..........................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................................1............................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................1...............................................................................................................................................
    ...............11...............................................................................................................................................
    ................................................................................................................................................................
    ...................................1............................................................................................................................
    ...................................1..................................................................................................................111.......
    ......................................................................................................................................................111.......
    ......................................................................................................................................................111.......
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............111............................1..................1..............................................................................................
    ...............111...............................................1..............................................................................................
    ...............111...............................................1..............................................................................................
    .................................................................1...................................1.......................................1..................
    .................................................................................111............................................................................
    .................................................................................111............................................................................
    .................................................................................111............................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................................................1......................................
    .........................................................................................................................1......................................
    .........................................................................................................................111....................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    555555f888888ff7777777f4444444f77777777f5555555f8888888888888f777777777f33333333f555555555f8888888888f9999999999f5555555555f4444444444f999f55555555555ff44444444
    5555ff888888f77777777f4444444f77777777f55555555f8888888888888f777777777f33333333f555555555f8888888888f99999999999f5555555555f4444444444f999ff55555555555ff444444
    55ff8888888f77777777f4444444f77777777f555555555f8888888888888f777777777f33333333f555555555f88888888888f9999999999f55555555555f4444444444f9999ff55555555555ff4444
    ff8888888ff77777777f4444444f777777777f55555555f8888888888888f7777777777f33333333f555555555f88888888888f99999999999f55555555555f4444444444f99999f555555555555ff44
    88888888f777777777f44444444f77777777f555555555f8888888888888f7777777777f33333333f5555555555f8888888888f999999999999f55555555555f4444444444f99999ff555555555555ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    55555f8888888888f55555555f888888888f999999999f3333333333333f8888888888f444444444f9999999999f33333333333f444444444444f8888888888888f333333333f777777ff88888888888
    5555f8888888888f55555555f888888888f999999999f33333333333333f8888888888f444444444f9999999999f333333333333f444444444444f8888888888888f333333333f7777777ff888888888
    55ff8888888888f55555555f888888888f9999999999f3333333333333f88888888888f444444444f99999999999f33333333333f4444444444444f8888888888888f333333333f77777777f88888888
    5f88888888888f55555555f8888888888f999999999f33333333333333f8888888888f4444444444f99999999999f333333333333f444444444444f88888888888888f333333333f77777777ff888888
    5f888888888ff55555555f8888888888f9999999999f3333333333333f88888888888f4444444444f99999999999f333333333333f4444444444444f88888888888888f333333333f777777777f88888
    f888888888f555555555f8888888888f9999999999f33333333333333f88888888888f4444444444f99999999999f333333333333f44444444444444f88888888888888f333333333ff77777777ff888
    888888888f555555555f8888888888f99999999999f33333333333333f88888888888f4444444444f999999999999f333333333333f4444444444444f888888888888888f3333333333f777777777ff8
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777f9999999999f7777777777f55555555555f88888888888888f44444444444f77777777777f444444444444f5555555555555f99999999999999f555555555555555f4444444444f8888888888
    777777f9999999999f7777777777f55555555555f88888888888888f444444444444f77777777777f444444444444f5555555555555f999999999999999f555555555555555f4444444444f888888888
    77777f9999999999f77777777777f55555555555f88888888888888f444444444444f77777777777f444444444444f5555555555555f999999999999999f5555555555555555ff444444444f88888888
    7777f9999999999f77777777777f55555555555f888888888888888f444444444444f77777777777f4444444444444f5555555555555f999999999999999f55555555555555555f444444444f8888888
    777f9999999999f77777777777f555555555555f88888888888888f444444444444f777777777777f4444444444444f5555555555555f9999999999999999f55555555555555555f444444444f888888
    77f9999999999f777777777777f55555555555f888888888888888f444444444444f777777777777f4444444444444f55555555555555f9999999999999999f55555555555555555f444444444f88888
    7f9999999999f777777777777f555555555555f88888888888888f4444444444444f777777777777f4444444444444f55555555555555f9999999999999999f555555555555555555f444444444f8888
    f99999999999f77777777777f555555555555f888888888888888f4444444444444f777777777777f44444444444444f55555555555555f9999999999999999f555555555555555555f444444444f888
    99999999999f777777777777f555555555555f888888888888888f4444444444444f777777777777f44444444444444f55555555555555f99999999999999999f555555555555555555f444444444f88
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    333333333f999999999999f3333333333333f999999999999999f5555555555555f3333333333333f88888888888888f777777777777777f33333333333333333f8888888888888888888f777777777f
    33333333f999999999999f3333333333333f999999999999999f55555555555555f3333333333333f888888888888888f77777777777777f333333333333333333f8888888888888888888f777777777
    3333333f9999999999999f3333333333333f999999999999999f55555555555555f3333333333333f888888888888888f777777777777777f333333333333333333f8888888888888888888f77777777
    333333f9999999999999f3333333333333f9999999999999999f5555555555555f33333333333333f888888888888888f777777777777777f333333333333333333f88888888888888888888ff777777
    33333f9999999999999f33333333333333f999999999999999f55555555555555f33333333333333f888888888888888f7777777777777777f333333333333333333f888888888888888888888f77777
    3333f99999999999999f3333333333333f9999999999999999f55555555555555f33333333333333f8888888888888888f777777777777777f3333333333333333333f888888888888888888888f7777
    3333f9999999999999f33333333333333f999999999999999f555555555555555f33333333333333f8888888888888888f777777777777777f3333333333333333333f8888888888888888888888f777
    333f9999999999999f33333333333333f9999999999999999f555555555555555f33333333333333f8888888888888888f7777777777777777f3333333333333333333f8888888888888888888888f77
    33f99999999999999f33333333333333f9999999999999999f55555555555555f333333333333333f8888888888888888f7777777777777777f33333333333333333333f8888888888888888888888f7
    3f99999999999999f33333333333333f9999999999999999f555555555555555f333333333333333f88888888888888888f7777777777777777f33333333333333333333f8888888888888888888888f
    `)
arrowImgs = [img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, img`
    6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
    6 6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
    6 6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 6 
    6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 6 
    6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 
    `]
setUpStopper()
let dancer = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
dancer.y = 100


game.onUpdateInterval(1000, function() {
    makeArrow()
})