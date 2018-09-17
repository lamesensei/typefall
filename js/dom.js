var body = document.querySelector('body')
var header = document.querySelector('header')
var middle = document.getElementsByClassName('middle')[0]
var bottom = document.querySelector('footer')
var intervalID

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
            for (y = 0; y < size; y++) {
                var square = document.createElement('div')
                square.classList = 'grid-square'
                square.id = x.toString() + y.toString()
                square.style.padding = '20px'
                square.style.border = 'solid 2px black'
                square.textContent = square.id
                middle.appendChild(square)
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
        console.log(`Enemy Loaded: ${text}`);
    }
    //display player input
    function displayKeys(currentKeys) {
        var spannified = []
        for (i in currentKeys) {
            spannified.push(spannify(currentKeys[i]))
        }
        return bottom.innerHTML = spannified.join('')
    }

    function removeEnemy(x, y) {
        var target = document.getElementById(x + y)
        return target.textContent = 'BOOM'
    }
}

animations: {
    function blink() {
        stopBlink()
        bottom.innerHTML = spannify('_')
        intervalID = setInterval(selector, 500)
    }

    function selector() {
        var x = document.getElementById('_')
        x.style.backgroundColor = x.style.backgroundColor == "white" ? "black" : "white";
    }

    function stopBlink() {
        clearInterval(intervalID);
    }
}