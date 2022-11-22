function increase () {
    number += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
}
function decrease () {
    number += -1
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
}
function countdown () {
    for (let index = 0; index <= number; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(number - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
}
input.onButtonPressed(Button.A, function () {
    decrease()
})
input.onButtonPressed(Button.AB, function () {
    countdown()
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    increase()
})
function Randomizer () {
    number = randint(0, 10)
}
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let number = 0
Randomizer()
