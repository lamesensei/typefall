// var wordsArray = ['Start']
// var wordDisplay = document.getElementById('word-display')
// var debuggerDisplay = document.getElementsByClassName('debug')[0]
// var statusDisplay = document.getElementById('status-display')
// //var currentChar = document.getElementById(currentWord[currentWord.length - 1])
// var currentKeys = []
// var currentWordLength = 0
// var currentWord = ''
// var score = 0
// var request = new XMLHttpRequest()
//
// window.onload = function() {
//
//     function clear() {
//         currentKeys = [];
//     }
//
//     function animateKeys() {
//
//     }
//
//     function checkScore(operator) {
//         if (score < 1) {
//             statusDisplay.textContent = 'YOU LOSE'
//             console.log('you lose');
//             setTimeout(gameStart, 2000)
//         } else {
//             statusDisplay.textContent = score
//             displayRandomWord(wordsArray)
//         }
//         //console.log(score)
//     }
//
//     function compareKeys() {
//         if (currentKeys.length == currentWordLength) {
//             console.log(currentKeys.length == currentWordLength)
//             debuggerDisplay.textContent = 'correct'
//             console.log('correct, word reset')
//             score++
//             checkScore('+')
//             clear()
//         }
//         if (currentKeys.length != 0) {
//             if (currentKeys.join('')[currentKeys.length - 1] == currentWord[currentKeys.length - 1]) {
//                 debuggerDisplay.textContent = `match: ${currentKeys.join('')}`
//                 console.log('match detected');
//             }
//             else {
//                 debuggerDisplay.textContent = `wrong key: ${currentKeys[currentKeys.length-1]}`
//                 score--
//                 checkScore('-')
//                 clear()
//             }
//         }
//     }
//
//     function detectKeyPress(event) {
//         currentKeys.push(event.key)
//         console.log(currentKeys)
//         compareKeys()
//     }
//
//     ajax: {
//
//         function getWords() {
//             request.addEventListener("error", requestFailed);
//             request.addEventListener("load", wordLoad)
//             request.open("GET", `https://api.datamuse.com/words?rel_jjb=computer`)
//             request.send()
//         }
//
//         function requestFailed(event) {
//             console.log("response text", this.responseText)
//             console.log("status text", this.statusText)
//             console.log("status code", this.status)
//         }
//
//         function wordLoad(event) {
//             var result = JSON.parse(this.responseText)
//             result.forEach(function(e) {
//                 wordsArray.push(e.word)
//             })
//             console.log('words loaded');
//             //displayRandomWord(wordsArray)
//         }
//     }
//
//
//     function displayRandomWord(words) {
//         var randomIndex = Math.floor(Math.random() * (words.length))
//         if (currentWord == words[randomIndex])
//             return displayRandomWord(words)
//         currentWord = words[randomIndex]
//
//         var fullString = []
//         for (e in currentWord) {
//             var spanID = currentWord[e]
//             var spanStart = `<span id="${spanID}">`
//             var spanEnd = '</span>'
//             fullString.push(spanStart)
//             fullString.push(currentWord[e])
//             fullString.push(spanEnd)
//         }
//         wordDisplay.innerHTML = fullString.join('')
//         currentWordLength = words[randomIndex].length
//         console.log('word changed');
//     }
//
//     function gameStart()
//     {
//         score = 0
//         statusDisplay.textContent = 'loading'
//         getWords()
//         setTimeout(function() {
//             displayRandomWord(wordsArray)
//             statusDisplay.textContent = 'Go'
//         }, 300)
//         console.log('game loaded');
//     }
//     //event listeners
//     window.addEventListener('keydown', detectKeyPress)
//
//     //function calls
//     gameStart()
// }