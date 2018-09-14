var wordsArray = ['sick', 'ham', 'mad', 'hakunamatada']
var wordDisplay = document.getElementById('word-display')
var debuggerDisplay = document.getElementsByClassName('debug')[0]
var currentKeys = []
var currentWordLength = 0
var currentWord = ''

window.onload = function() {

    function compareKeys() {
        if (currentKeys.join('') == currentWord)
            debuggerDisplay.textContent = 'match'
    }

    function detectKeyPress(event) {
        currentKeys.push(event.key)
        console.log(currentKeys)

        debuggerDisplay.textContent = `Current keys: ${currentKeys.join('')}, Press Count: ${currentKeys.length} `

        if (currentKeys.length == currentWordLength)
            compareKeys()
    }

    function displayRandomWord(words) {
        var randomIndex = Math.floor(Math.random() * words.length - 1)
        currentWord = words[randomIndex]
        console.log(randomIndex);
        wordDisplay.textContent = currentWord
        currentWordLength = words[randomIndex].length
    }

    //event listeners
    window.addEventListener('keyup', detectKeyPress)

    //function calls
    displayRandomWord(wordsArray)
}