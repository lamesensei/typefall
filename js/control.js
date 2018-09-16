var alphabet = ['this', 'was', 'a', 'triumph']
var currentKeys = []

window.onload = function() {
    //init game
    createGrid(3)
    generateEnemy(alphabet)
    blink()

    //event listeners
    window.addEventListener('keydown', verifyKeys)
}