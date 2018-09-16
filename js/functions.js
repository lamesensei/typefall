//generate text enemy from array/json
function generateEnemy(arr) {
    var enemy = spannify(arr[rand(arr.length, 0)])
    var x = rand(3, 0).toString()
    var y = rand(3, 0).toString()
    displayEnemy(x, y, enemy)
    return console.log(`Enemy Generated: ${enemy}, ${x}, ${y}`);
}

//verify keypress and act accordingly
function verifyKeys(event) {
    if (event.key == 'Backspace') {
        currentKeys.pop()
        if (currentKeys.length !== 0) {
            return displayKeys(currentKeys)
        }
        else {
            console.log(currentKeys.length);
            return blink()
        }
    } else if (event.key == 'Enter') {
        stopBlink(blink)
        blink()
        currentKeys = [] //clear current keys when enter pressed
    } else {
        currentKeys.push(event.key)
        stopBlink(blink)
        return displayKeys(currentKeys)
    }
    return console.log(`Something went wrong: ${event.key}`)
}