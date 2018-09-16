var body = document.querySelector('body')
var middle = document.getElementsByClassName('middle')[0]


//create 3x3 grid
function createGrid() {

    //remove exsisting board if any
    while (middle.lastChild) {
        middle.removeChild(middle.lastChild)
    }

    //create individual grid squares
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
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

createGrid()