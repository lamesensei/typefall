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
//var counter = 0
var rows = 10
var modifier = 5000
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
    }, 2000)



    //event listeners
    document.addEventListener('keydown', verifyKeys)
}