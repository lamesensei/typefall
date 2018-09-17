var alphabet = ['this', 'was', 'a', 'triumph']
var currentKeys = []
var currentEnemies = []

window.onload = function() {
    //init game
    createGrid(3)

    var i = 0
    while (i < 4) {
        generateEnemy(alphabet)
        i++
    }
    blink()

    //event listeners
    window.addEventListener('keydown', verifyKeys)
}