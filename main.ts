namespace SpriteKind {
    export const Goal_P = SpriteKind.create()
    export const shadow = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Dash(direction)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal_P, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    otherSprite.x += -3
    Point += 1
    if (Point < max_books) {
        enemy_speed = enemy_speed * 1.05
    } else {
        P_energy = 75
        enemy_speed = max_enemy_speed
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    left_pressed = true
})
function CreateCoffee () {
    for (let value of tiles.getTilesByType(sprites.swamp.swampTile13)) {
        Coffee = sprites.create(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Coffee, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    right_pressed = false
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    left_pressed = false
})
controller.combos.attachCombo("rr", function () {
    Dash(1)
})
function Jump () {
    if (Student.vy == 15) {
        Student.vy = -200
    }
    if (Student.vy == 0) {
        Student.vy = -200
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    if (Point < min_books) {
        game.splash("Exam fail", Point)
        game.over(false, effects.dissolve)
    } else {
        game.splash("Exam pass!", Point)
        game.over(true, effects.smiles)
    }
})
function player_speed () {
    if (P_speed + P_energy > max_P_speed) {
        return max_P_speed
    }
    return P_speed + P_energy
}
function game_start () {
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(img`
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
        `)
    tiles.setCurrentTilemap(tilemap`level1`)
    Student = sprites.create(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `, SpriteKind.Player)
    P_stress = 3
    P_speed = 50
    max_P_speed = 100
    P_energy = 75
    max_P_energy = 100
    enemy_speed = 30
    max_enemy_speed = 100
    pixels = 30
    gravity = 700
    max_books = 10
    min_books = 5
    Point = 0
    dash_cost = 8
    sick_threshold = 94
    max_bonus = 0.05
    Student.ay = 300
    Movement = Student.vx != 0 || Student.vy != 0
    if (!(Movement)) {
        animation.stopAnimation(animation.AnimationTypes.All, Student)
    }
    CreateEnemy()
    CreateCoffee()
    CreateBook()
    lantern.startLanternEffect(Student)
    scene.cameraFollowSprite(Student)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    right_pressed = true
})
function CreateBook () {
    for (let value2 of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
        Book = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Goal_P)
        tiles.placeOnTile(Book, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
}
function Dash (dash_direction: number) {
    if (P_energy < dash_cost * 2) {
        return
    }
    if (!(dash)) {
        dash = true
        P_energy = P_energy - dash_cost
        Student.setVelocity(dash_direction * 150, 0)
        for (let index = 0; index <= 3; index++) {
            timer.background(function () {
                projectile = sprites.createProjectileFromSprite(Student.image, Student, 0 - dash_direction * 5, 0)
                projectile.lifespan = 40
            })
            pause(20)
        }
    }
    timer.after(200, function () {
        dash = false
    })
}
controller.combos.attachCombo("ll", function () {
    Dash(-1)
})
function play_lofi () {
    timer.background(function () {
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
    })
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 500)
    otherSprite.x += -3
    if (P_energy + 25 > 100) {
        P_energy = max_P_energy
    } else {
        P_energy = P_energy + 25
    }
})
function CreateEnemy () {
    Deadline = sprites.create(assets.image`Deadline`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Deadline,
    [img`
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
        `,img`
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
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `,img`
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
        `,img`
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
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    Deadline.setPosition(19, 81)
    Deadline.setFlag(SpriteFlag.GhostThroughWalls, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(shield)) {
        shield = true
        if (P_stress > 0 && Point < max_books) {
            P_stress += -1
            if (P_energy + 50 > sick_threshold) {
                P_energy = sick_threshold
            } else {
                P_energy = P_energy + 50
            }
        } else {
            game.splash("Exam fail", "0")
            game.over(false, effects.dissolve)
        }
        timer.after(2000, function () {
            shield = false
        })
    }
})
let shield = false
let Deadline: Sprite = null
let projectile: Sprite = null
let dash = false
let Book: Sprite = null
let Movement = false
let max_bonus = 0
let sick_threshold = 0
let dash_cost = 0
let gravity = 0
let pixels = 0
let max_P_energy = 0
let P_stress = 0
let max_P_speed = 0
let P_speed = 0
let min_books = 0
let Student: Sprite = null
let right_pressed = false
let Coffee: Sprite = null
let left_pressed = false
let max_enemy_speed = 0
let P_energy = 0
let enemy_speed = 0
let max_books = 0
let Point = 0
let direction = 0
game_start()
game.onUpdate(function () {
    if (left_pressed) {
        direction = -1
    } else if (right_pressed) {
        direction = 1
    } else {
        direction = 0
    }
    if (P_energy >= sick_threshold) {
        direction = direction * -1
    }
    if (!(dash)) {
        Student.vx = direction * player_speed()
    }
    Deadline.follow(Student, enemy_speed)
})
game.onUpdate(function () {
    Student.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `)
    if (Student.vy < 0) {
        Student.setImage(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f e e d b b f . . 
            . . f 4 d d e 4 e f . . 
            . . f e d d e 1 1 f . . 
            . f f f e e f 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `)
    } else if (Student.vy > 0) {
        Student.setImage(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `)
    } else if (Student.x % 2 == 0) {
        Student.setImage(img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `)
    }
    if ((Student.isHittingTile(CollisionDirection.Left) || Student.isHittingTile(CollisionDirection.Right)) && Student.vy >= 0) {
        Student.vy = 15
        Student.ay = 0
        Student.setImage(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            e f e 4 d b b d d e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 1 1 1 b f 4 e 
            . . e e f 6 6 6 6 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `)
    } else {
        Student.ay = 350
    }
    if (Student.vx < 0 || Student.isHittingTile(CollisionDirection.Left)) {
        Student.setImage(Student.image)
        Student.image.flipX()
    }
})
forever(function () {
	
})
game.onUpdateInterval(500, function () {
    if (P_energy > 0) {
        P_energy = P_energy - 0.5
    }
    if (Point >= max_books) {
        max_books = Point + max_bonus
    }
    lantern.setLightBandWidth(8 + P_energy / 2)
})
