//generate text enemy from array/json
function generateEnemy(arr) {
    var matchCount = 0
    var enemyObj = new Object()
    enemyObj.x = rand(3, 0).toString()
    enemyObj.y = rand(3, 0).toString()
    var randText = arr[rand(arr.length, 0)]
    for (i in currentEnemies) {
        if (enemyObj.x == currentEnemies[i].x && enemyObj.y == currentEnemies[i].y)
            matchCount++
        if (randText == currentEnemies[i].text)
            matchCount++
    }
    if (matchCount <= 0) {
        enemyObj.text = randText
        displayEnemy(enemyObj.x, enemyObj.y, spannify(enemyObj.text))
        currentEnemies.push(enemyObj)
        return console.log(`Enemy Generated: ${enemyObj.text}, ${enemyObj.x}, ${enemyObj.y}`);
    } else {
        //return generateEnemy(arr)
    }
    return console.log(`duplicated detected`)
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
            return blink()
        }
    }
    header.textContent = 'WRONG'
    currentKeys = []
    blink()
}

ajax: {

    function getWords() {
        var request = new XMLHttpRequest()
        request.addEventListener("error", requestFailed);
        request.addEventListener("load", wordLoad)
        request.open("GET", `https://api.datamuse.com/words?rel_jjb=computer`)
        request.send()
    }

    function requestFailed(event) {
        console.log("response text", this.responseText)
        console.log("status text", this.statusText)
        console.log("status code", this.status)
    }

    function wordLoad(event) {
        var result = JSON.parse(this.responseText)
        result.forEach(function(e) {
            wordsArray.push(e.word)
        })
        console.log('words loaded');
        //displayRandomWord(wordsArray)
    }
}