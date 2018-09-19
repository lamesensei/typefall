//generate text enemy from array/json
function generateEnemy(arr, difficulty) {
    var duplicate = 0
    var enemyObj = new Object()
    enemyObj.x = rand(difficulty, 0).toString()
    enemyObj.y = rand(6, 0).toString()
    var randText = arr[rand(arr.length, 0)]
    if (randText.includes(' '))
        duplicate++
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
        //return console.log(`Enemy Generated: ${enemyObj.text}, ${enemyObj.x}, ${enemyObj.y}`);
    } else {}
    return console.log(`Duplicate found and rejected`)
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
            return clear()
        }
    } else if (event.key == 'Enter') {
        stopBlink(clear)
        return compareKeys()
    } else {
        currentKeys.push(event.key)
        stopBlink(clear)
        return displayKeys(currentKeys)
    }
    return console.log(`Something went wrong: ${event.key}`)
}

function compareKeys() {
    var statusMessage = document.getElementById('status-message')

    if (currentKeys.join('') == 'restart' || currentKeys.join('') == 'reload') {
        return location.reload()
    } else if (currentKeys.join('') == 'start') {
        clear()
        document.getElementById('message').style.visibility = 'hidden'
        setTimeout(function() {
            detectLoss(win)
        }, (countDown = rows * modifier - 600))
        return falling.play()
    }

    for (i in konami) {
        if (konami.join('') == currentKeys.join('')) {
            statusMessage.textContent = "KONAMI'ed"
            return clear()
        }
    }

    for (i in currentEnemies) {
        var statusMessage = document.getElementById('status-message')
        var clone = statusMessage.cloneNode(true)
        statusMessage.parentNode.replaceChild(clone, statusMessage)

        if (currentEnemies[i].text == currentKeys.join('')) {
            flashStatus(clone, 'MATCHED', 'yellow-flash')
            removeEnemy(currentEnemies[i].x, currentEnemies[i].y)
            score++
            updateScore()
            if (score == currentEnemies.length) {
                clone.textContent = 'YOU WIN'
                win = true
                var utterThis = new SpeechSynthesisUtterance('Congratulations');
                synth.speak(utterThis)
                return fadeDisplay('WINNER')
            }
            return clear()
        }
    }
    flashStatus(clone, 'NOPE', 'red-flash')
    var utterThis = new SpeechSynthesisUtterance('nope');
    synth.speak(utterThis)
    return clear()
}

ajax: {

    function getWords(amount, cat) {
        var request = new XMLHttpRequest()
        request.addEventListener("error", requestFailed);
        request.addEventListener("load", wordLoad)
        request.open("GET", `https://api.datamuse.com/words?ml=${cat}&max=${amount}`)
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