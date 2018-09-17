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

window.onload = function() {
    //init game
    createGrid(3)
    getWords()
    voices = synth.getVoices()
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