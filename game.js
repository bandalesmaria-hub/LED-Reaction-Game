let position = 0
let gameSpeed = 500
let score = 0
let gameRunning = true

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (!gameRunning) {
        gameSpeed = 500
        score = 0
        gameRunning = true
        return
    }

    if (position == 7) {
        music.baDing.play()
        score += 1

        gameSpeed -= 50
        if (gameSpeed < 100) {
            gameSpeed = 100
        }
    } else {
        music.wawawawaa.play()
        gameRunning = false
    }
})

forever(function () {
    if (gameRunning) {
        light.setAll(0x7f00ff)
        light.setPixelColor(7, 0x00ff00)
        light.setPixelColor(position, 0xff0000)

        pause(gameSpeed)

        position += 1
        if (position == 10) {
            position = 0
        }
    } else {
        light.showAnimation(light.sparkleAnimation, 500)
    }
})
