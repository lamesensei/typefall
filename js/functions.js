var alphabet = ['a', 'b', 'c', 'd']

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
    console.log(`Enemy Generated: ${enemy}, ${x}, ${y}`);
}

generateEnemy(alphabet)