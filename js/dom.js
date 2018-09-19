var body = document.querySelector('body')
var header = document.querySelector('header')
var scoreStatus = document.getElementById('score')
var middle = document.getElementsByClassName('middle')[0]
var bottom = document.getElementById('input')
var intervalID, animationID
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
    function createGrid(rows) {
        //remove exsisting grid if any
        while (middle.lastChild) {
            middle.removeChild(middle.lastChild)
        }

        //create individual grid squares
        for (x = 0; x < rows; x++) {
            var newRow = document.createElement('div')
            newRow.classList = 'row'
            middle.appendChild(newRow)
            for (y = 0; y < 6; y++) {
                var square = document.createElement('div')
                square.classList = 'grid-square col text-center'
                square.id = x.toString() + y.toString()
                square.style.fontSize = `${rand(7, 3)}vw`
                var randomColor = `rgba(${rand(250, 50)},${rand(250, 50)},${rand(250, 50)})`
                square.style.color = `${randomColor}`
                newRow.appendChild(square)
            }
        }

        var middleHeight = 200 * rows
        middle.style.position = 'absolute'
        middle.style.top = `-${middleHeight}px`
        middle.style.visibility = 'visible'
        animationID = middle.animate([
        {
            transform: `translateY(0)`
        },
        {
            transform: `translateY(${middleHeight + document.documentElement.clientHeight}px)`
        }], {
            duration: rows * modifier,
            fill: 'forwards',
            // easing: 'ease'
        })
        animationID.pause()
    }
    console.log('Grid Initialised');
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
        var rollDirection = rand(2, 0)
        if (rollDirection == 1)
            target.style.animationName = 'rollLeft'
        else
            target.style.animationName = 'rollRight'
        target.style.animationFillMode = 'forwards'
        target.style.animationTimingFunction = 'linear'
        target.style.animationDuration = '1s'

        var utterThis = new SpeechSynthesisUtterance('NOICE')
        synth.speak(utterThis)
        return target.style.textDecoration = 'line-through'
    }

    function updateScore() {
        return scoreStatus.textContent = `${score}/${currentEnemies.length}`
    }

    function detectLoss(win) {
        if (win == false) {
            var utterThis = new SpeechSynthesisUtterance('HA HA HA HA HA HA LOSER');
            synth.speak(utterThis)
            var currentStatus = document.getElementById('current-status')
            currentStatus.style.visible = 'visible'
            currentStatus.style.color = 'red'
            currentStatus.textContent = 'FAIL'
            currentKeys = ['LOSER'.split('')]
            return displayKeys(currentKeys)
        }
        //return alert('loss error')
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

    function flash(target, message, anim) {
        target.textContent = message
        target.style.animationName = anim
        target.id = 'current-status'
    }
}