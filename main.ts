let second = 0
let minute = 0
let house = 0
basic.forever(function () {
    basic.pause(1000)
    second += 1
    if (second == 60) {
        minute += 1
        second = 0
    }
    if (minute == 60) {
        house += 1
        minute = 0
    }
    if (house == 24) {
        house = 0
    }
})
