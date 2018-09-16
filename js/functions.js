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
    return spannified
}

//return a random integer between min(inclusive) and max value
function rand(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

//generate text enemy from array/json
function generateEnemy(arr) {
    var enemy = spannify(arr[rand(arr.length, 0)]).join('')
    var x = rand(3, 0).toString()
    var y = rand(3, 0).toString()
    displayEnemy(x, y, enemy)
    return console.log(`Enemy Generated: ${enemy}, ${x}, ${y}`);
}

//verify keypress and act accordingly
function verifyKeys(event) {
    if (event.key == 'Backspace') {
        currentKeys.pop()
        return displayKeys(currentKeys)
    } else if (event.key == 'Enter') {
        currentKeys = [] //clear current keys when enter pressed
        console.log('Enter was pressed');
        return displayKeys(currentKeys)
    } else {
        currentKeys.push(event.key)
        displayKeys(currentKeys)
    }
    return console.log(currentKeys.join(''));
}