basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
            if (y == 0) {
                led.unplot(x, 4)
            } else {
                led.unplot(x, y - 1)
            }
        }
    }
})
