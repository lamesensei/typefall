//generate text enemy from array/json
function generateEnemy(arr, difficulty) {
    var duplicate = 0
    var enemyObj = new Object()
    enemyObj.x = rand(difficulty, 0).toString()
    enemyObj.y = rand(difficulty, 0).toString()
    var randText = arr[rand(arr.length, 0)]
    for (i in currentEnemies) {
        if (enemyObj.x == currentEnemies[i].x && enemyObj.y == currentEnemies[i].y)
            duplicate++
        if (randText == currentEnemies[i].text)
            duplicate++
    }
    if (duplicate == 0) {
        enemyObj.text = randText
        displayEnemy(enemyObj.x, enemyObj.y, spannify(enemyObj.text))
        currentEnemies.push(enemyObj)
        return console.log(`Enemy Generated: ${enemyObj.text}, ${enemyObj.x}, ${enemyObj.y}`);
    } else {}
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

    if (currentKeys.join('') == 'restart' || currentKeys.join('') == 'reload') {
        return location.reload()
    }

    for (i in konami) {
        if (konami.join('') == currentKeys.join('')) {
            currentStatus.textContent = "KONAMI'ed"
            return blink()
        }
    }

    for (i in currentEnemies) {

        // for (x in currentEnemies[i].text) {
        //     var highlight = document.getElementById(currentKeys[x])
        //     if (currentEnemies[i].text[x] == currentKeys[x])
        //         highlight.style.background = 'white'
        // }

        if (currentEnemies[i].text == currentKeys.join('')) {
            currentStatus.textContent = 'MATCHED'
            currentKeys = []
            removeEnemy(currentEnemies[i].x, currentEnemies[i].y)
            score++
            updateScore()
            if (score == currentEnemies.length) {
                currentStatus.textContent = 'YOU WIN'
                var utterThis = new SpeechSynthesisUtterance('Win');
                synth.speak(utterThis)
            }
            return blink()
        }
    }
    currentStatus.textContent = 'WRONG'
    var utterThis = new SpeechSynthesisUtterance('WRONG');
    synth.speak(utterThis)
    currentKeys = []
    //score--
    blink()
}

ajax: {

    function getWords() {
        var request = new XMLHttpRequest()
        request.addEventListener("error", requestFailed);
        request.addEventListener("load", wordLoad)
        request.open("GET", `https://api.datamuse.com/words?ml=computer&max=100`)
        request.send()
    }

    function requestFailed(event) {
        console.log("response text", this.responseText)
        console.log("status text", this.statusText)
        console.log("status code", this.status)
    }

    function wordLoad(event) {
        var result = JSON.parse(this.responseText)
        var wordCount = 0
        result.forEach(function(e) {
            wordsArray.push(e.word)
            wordCount++
        })
        console.log(`Words loaded: ${wordCount}`);
        //displayRandomWord(wordsArray)
    }
}