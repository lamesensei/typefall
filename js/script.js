var wordsArray = ['sick', 'ham', 'mad', 'hakunamatada']
var wordDisplay = document.getElementById('word-display')
var debuggerDisplay = document.getElementsByClassName('debug')[0]
var statusDisplay = document.getElementById('status-display')
var currentKeys = []
var currentWordLength = 0
var currentWord = ''
var score = 0

window.onload = function() {

    function clear() {
        currentKeys = [];
    }

    function compareKeys() {
        if (currentKeys.length == currentWordLength) {
            debuggerDisplay.textContent = 'correct'
            console.log('correct, word reset')
            score++
            statusDisplay.textContent = score
            clear()
            displayRandomWord(wordsArray)
        }
        if (currentKeys.length != 0) {
            if (currentKeys.join('')[currentKeys.length - 1] == currentWord[currentKeys.length - 1]) {
                debuggerDisplay.textContent = `match: ${currentKeys.join('')}`
            }
            else {
                debuggerDisplay.textContent = 'fail'
                clear()
                gameStart()
            }
        }

    }

    function detectKeyPress(event) {
        currentKeys.push(event.key)
        console.log(currentKeys)

        //debuggerDisplay.textContent = `Current keys: ${currentKeys.join('')}, Press Count: ${currentKeys.length} `
        compareKeys()
    }

    function displayRandomWord(words) {
        var randomIndex = Math.floor(Math.random() * (words.length))
        if (currentWord == words[randomIndex])
            return displayRandomWord(words)
        currentWord = words[randomIndex]
        console.log(`${randomIndex} ${words.length}`)
        wordDisplay.textContent = currentWord
        currentWordLength = words[randomIndex].length
    }

    function gameStart()
    {
        score = 0
        statusDisplay.textContent = 'Ready'
        displayRandomWord(wordsArray)
    }
    //event listeners
    window.addEventListener('keydown', detectKeyPress)

    //function calls
    gameStart()
}