var words = ['sick', 'ham', 'mad']
var wordDisplay = document.getElementById('word-display')
var debuggerDisplay = document.getElementsByClassName('debug')[0]
var currentKeys = []

window.onload = function() {

    function compareKeys() {

    }

    function detectKeyPress(event) {
        currentKeys.push(event.key)
        console.log(currentKeys)
        debuggerDisplay.textContent = currentKeys.toString()
    }



    window.addEventListener('keyup', detectKeyPress)
}