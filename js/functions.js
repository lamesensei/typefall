//generate text enemy from array/json
function generateEnemy(arr) {
    var enemyObj = new Object()
    enemyObj.text = arr[rand(arr.length, 0)]
    enemyObj.x = rand(3, 0).toString()
    enemyObj.y = rand(3, 0).toString()
    displayEnemy(enemyObj.x, enemyObj.y, spannify(enemyObj.text))
    currentEnemies.push(enemyObj)
    // var enemy = arr[rand(arr.length, 0)]
    // var x = rand(3, 0).toString()
    // var y = rand(3, 0).toString()
    // displayEnemy(x, y, spannify(enemy))
    // currentEnemies.push(enemy)
    return console.log(`Enemy Generated: ${enemyObj.text}, ${x}, ${y}`);
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
        return compareKeys()
    } else {
        currentKeys.push(event.key)
        stopBlink(blink)
        return displayKeys(currentKeys)
    }
    return console.log(`Something went wrong: ${event.key}`)
}

function compareKeys() {
    for (i in currentEnemies) {
        if (currentEnemies[i].text == currentKeys.join('')) {
            header.textContent = 'MATCHED'
            currentKeys = []
            removeEnemy(currentEnemies[i].x, currentEnemies[i].y)
            blink()
        }
        else {
            header.textContent = 'WRONG'
            currentKeys = []
            blink()
        }
    }
}