var body = document.querySelector('body')
var middle = document.getElementsByClassName('middle')[0]
var bottom = document.querySelector('footer')

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

//display enemy on DOM
function displayEnemy(x, y, text) {
    console.log(text + x + y);
    var pos = document.getElementById(x + y)
    pos.innerHTML = text
    console.log('Enemy Display Loaded');
}
//display player input
function displayKeys(currentKeys) {
    bottom.textContent = currentKeys.join('')
}