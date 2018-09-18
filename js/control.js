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
var score = 0
var difficulty = 10
var state = 0

window.onload = function() {
    //init game

    createGrid(difficulty)
    getWords()
    voices = synth.getVoices()
    setTimeout(function() {
        var i = 0
        setTimeout(function() {
            detectLoss('loss')
        }, 39400)
        while (i < difficulty * 3) {
            generateEnemy(wordsArray, difficulty)
            i++
        }
        blink()

    }, 600)



    //event listeners
    document.addEventListener('keydown', verifyKeys)
}