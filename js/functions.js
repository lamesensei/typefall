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
    var currentStatus = document.getElementById('current-status')

    if (currentKeys.join('') == 'restart' || currentKeys.join('') == 'reload' || currentKeys.join('') == 'WINNER') {
        return location.reload()
    } else if (currentKeys.join('') == 'start') {
        currentKeys = []
        blink()
        document.getElementById('message').style.visibility = 'hidden'
        setTimeout(function() {
            detectLoss(win)
        }, (countDown = rows * modifier - 600))
        return animationID.play()
    }

    for (i in konami) {
        if (konami.join('') == currentKeys.join('')) {
            currentStatus.textContent = "KONAMI'ed"
            return blink()
        }
    }

    for (i in currentEnemies) {
        var currentStatus = document.getElementById('current-status')
        var clone = currentStatus.cloneNode(true)
        currentStatus.parentNode.replaceChild(clone, currentStatus)

        if (currentEnemies[i].text == currentKeys.join('')) {

            flash(clone, 'MATCHED', 'yellow-flash')
            currentKeys = []
            removeEnemy(currentEnemies[i].x, currentEnemies[i].y)
            score++
            updateScore()
            if (score == currentEnemies.length) {
                clone.textContent = 'YOU WIN'
                currentKeys = ['WINNER'.split('')]
                win = true
                var utterThis = new SpeechSynthesisUtterance('Congratulations');
                synth.speak(utterThis)
                return displayKeys(currentKeys)
            }
            return blink()
        }
    }
    flash(clone, 'WRONG', 'red-flash')
    var utterThis = new SpeechSynthesisUtterance('WRONG');
    synth.speak(utterThis)
    currentKeys = []
    //score--
    return blink()
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