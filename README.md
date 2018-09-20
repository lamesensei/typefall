# TYPEFALL
A javascript based game involving typing. 
## Technologies
- HTML
- CSS3
- JS
- BOOTSTRAP
## Run
Visit https://lamesensei.github.io/typefall/ to test the latest commit!
## Instructions
The word list is generated via AJAX request to Datamuse API. 
1. Verify game is loaded properly by pressing enter - You should hear 'nope'
	- Otherwise refresh the page (cache) with CMD+SHIFT+R (mac) / CTRL + F5 (windows) till the AJAX errors are resolved.
2. Type 'enter' to begin
3. Type 'console' to enter prompt mode to modify the game parameters (rows / modifier (milliseconds) / word category)
4. Type 'saiyan' to get some motivation

## To-do List
##### MVP
- [x] Detect player typing input
- [x]	Display single target string / char 
	- [x] AJAX request target string / char
- [x] Check player typing input against single target
	- [x] Check player input by char
- [x] Score tracking
- [x] Detect Win / Loss
- [x] Win / Loss screen
##### Enemies
- [x] Display (spawn randomly) multiple targets
	- [x] Spawn via grid
	- [ ] Spawn via canvas
- [x] Check player typing input against multiple targets
##### Extra
- [ ] Implement story 'prompts' before game start
- [x] Difficulty / words selection
##### Polish
- [x] Styling
- [ ]	Audio
	- [x] Sounds
	- [x] Music
- [x] Animations
- [ ] Refactoring
