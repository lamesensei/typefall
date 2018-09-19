var wordsArray = []
var currentKeys = []
var currentEnemies = []
var konami = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'a', 'b'
]
var win = false
var score = 0

var rows = 1
var modifier = 6000
var category = 'creature'

window.onload = function() {
    //init game
    getWords(rows * 10, category)
    createGrid(rows)
    voices = synth.getVoices()
    setTimeout(function() {
        var i = 0
        while (i < rows * 3) {
            generateEnemy(wordsArray, rows)
            i++
        }
        clear()
    }, 1000)



    //event listeners
    document.addEventListener('keydown', verifyKeys)
}