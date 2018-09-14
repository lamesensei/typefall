var wordsArray = ['Start']
var wordDisplay = document.getElementById('word-display')
var debuggerDisplay = document.getElementsByClassName('debug')[0]
var statusDisplay = document.getElementById('status-display')
var currentKeys = []
var currentWordLength = 0
var currentWord = ''
var score = 0
var request = new XMLHttpRequest()

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

    ajax: {

        function getWords() {
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
            displayRandomWord(wordsArray)
        }
    }


    function displayRandomWord(words) {
        var randomIndex = Math.floor(Math.random() * (words.length))
        if (currentWord == words[randomIndex])
            return displayRandomWord(words)
        currentWord = words[randomIndex]
        wordDisplay.textContent = currentWord
        currentWordLength = words[randomIndex].length
        console.log('word changed');
    }

    function gameStart()
    {
        score = 0
        statusDisplay.textContent = 'Go'
        getWords()
        displayRandomWord(wordsArray)
        console.log('game loaded');
    }
    //event listeners
    window.addEventListener('keydown', detectKeyPress)

    //function calls
    gameStart()
}