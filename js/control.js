var wordsArray = []
var currentKeys = []
var currentEnemies = []

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
    }, 2000)


    //event listeners
    document.addEventListener('keydown', verifyKeys)
}