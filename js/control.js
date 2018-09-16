var alphabet = ['a', 'b', 'c', 'd']
var currentKeys = []

window.onload = function() {
    //init game
    createGrid(3)
    generateEnemy(alphabet)
    blink()

    //event listeners
    window.addEventListener('keydown', verifyKeys)
}