var wordsArray = []
var currentKeys = []
var currentEnemies = []
var score = 0

window.onload = function() {
    //init game
    createGrid(3)
    getWords()
    setTimeout(function() {
        var i = 0
        while (i < 10) {
            generateEnemy(wordsArray)
            i++
        }
        blink()
    }, 1000)


    //event listeners
    document.addEventListener('keydown', verifyKeys)
}