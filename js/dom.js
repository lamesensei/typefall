var body = document.querySelector('body')
var header = document.querySelector('header')
var scoreStatus = document.getElementById('score')
var currentStatus = document.getElementById('current-status')
var middle = document.getElementsByClassName('middle')[0]
var bottom = document.querySelector('footer')
var intervalID
var synth = window.speechSynthesis;

utilities: {
    function spannify(word) {
        var spannified = []
        for (e in word) {
            var spanID = word[e]
            var spanStart = `<span id="${spanID}">`
            var spanEnd = '</span>'
            spannified.push(spanStart)
            spannified.push(word[e])
            spannified.push(spanEnd)
        }
        return spannified.join('')
    }

    //return a random integer between min(inclusive) and max value
    function rand(max, min) {
        return Math.floor(Math.random() * (max - min)) + min
    }
}

game: {
    //create 3x3 grid
    function createGrid(size) {

        //remove exsisting grid if any
        while (middle.lastChild) {
            middle.removeChild(middle.lastChild)
        }

        //create individual grid squares
        for (x = 0; x < size; x++) {
            var newRow = document.createElement('div')
            newRow.classList = 'row h-25'
            middle.appendChild(newRow)
            for (y = 0; y < size; y++) {
                var square = document.createElement('div')
                square.classList = 'grid-square col text-center h-25'
                square.id = x.toString() + y.toString()
                square.style.padding = '20px'
                square.style.fontSize = `${rand(40, 10)}px`
                //square.style.border = 'solid 2px black'
                //square.textContent = square.id
                newRow.appendChild(square)
            }
        }
        console.log('Grid Initialised');
    }
}

text: {
    //display enemy on DOM
    function displayEnemy(x, y, text) {
        var pos = document.getElementById(x + y)
        pos.innerHTML = text
        //        console.log(`Enemy Loaded: ${text}`);
    }
    //display player input
    function displayKeys(currentKeys) {
        var spannified = []
        for (i in currentKeys) {
            spannified.push(spannify(currentKeys[i]))
        }
        bottom.innerHTML = spannified.join('')
        return blinkEnd()
    }

    function removeEnemy(x, y) {
        var target = document.getElementById(x + y)
        target.style.color = 'white'
        var utterThis = new SpeechSynthesisUtterance('NOICE');
        synth.speak(utterThis)
        return target.style.textDecoration = 'line-through'
    }

    function updateScore() {
        console.log(score);
        return scoreStatus.textContent = score
    }
}

animations: {
    //add setInterval to _
    function blink() {
        stopBlink()
        bottom.innerHTML = spannify('_')
        intervalID = setInterval(selector, 500)
    }

    function blinkEnd()
    {
        stopBlink()
        var addSpan = spannify('_')
        bottom.innerHTML = bottom.innerHTML + addSpan
        intervalID = setInterval(selector, 500)
    }

    //animation style
    function selector() {
        var x = document.getElementById('_')
        x.style.backgroundColor = x.style.backgroundColor == "white" ? "black" : "white";
    }
    //clear interval
    function stopBlink() {
        clearInterval(intervalID);
    }
}