# Henry: a children's game
## JS Project Proposal: Henry game simulator
### Background
Henry is a memory game using sound instead of images. The original game is on a 4x4 grid and has the option for practice, single, and multi-person play. Each cell on the grid corresponds with a randomized sound. When the game is in play, the player plays the next sound in the queue and attempts to locate that same sound on the grid. When a matching sound is found, the cell lights up. The game ends when a player matches 4 sounds in a line, either horizontal, vertical, or diagonal.

To start the game, the player must first choose their setting: practice, single, or multiplayer. Players must press the “start” button, which shuffles the sounds in the grid. On each turn, a player will hit the “Henry” button, which plays the sound the player must locate. For multiplayer games, each player gets one guess before the end of their turn. 

### Functionality & MVP

With this Henry simulator, users will be able to:
* Select which game style to play in (practice or multiplayer)
* Start or reset the game board
* Play sounds through the Henry button
* Select squares that play sounds and light up if matched
* Win the game by matching 4 sounds in a line
 
In addition, this project will include:
* An About modal describing the background and rules of the game
* A production README

### Wireframes
This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn, and the About modal. Game controls will include Start/Reset, Henry, and grid cell buttons. On the left, three clickable shapes will be used to choose type of play: practice (player 1 plays all turns), multiplayer (players 1 and 2 switch between turns), or single-player (player 1 plays against an AI, Bonus Feature). On the right, there will be three (or more) clickable visually interesting color schemes to toggle between (Bonus Feature). 

![alt text](https://github.com/idechow/Henry/blob/master/Screen%20Shot%202020-01-27%20at%2010.31.10%20AM.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

* JavaScript for overall structure,
* HTML/CSS for rendering,
* Webpack to bundle scripts,
* Canvas.js also for overall structure,
* ___ to deal with sound clips.

In addition to the entry file, there will be three main scripts involved in this project:

`Board.js` will handle the logic for determining matched vs. unmatched squares as well as sound randomization. 

`Game.js` will handle the logic behind what defines a turn as well as the win conditions.

`Cell.js` will handle the logic and state behind each of the matchable sound-aligned squares. 

### Implementation Timeline

**Day 1:** Setup all necessary Node modules, including getting webpack up and running. Write a basic entry file and outline for three main scripts, above. Goals for the day:
* Gather sound clips
* Figure out how to implement sound clips. 
 
**Day 2:** Dedicate this day to building out `cell.js` and `board.js.` Including appropriate CSS. Goals for the day:
* Complete the `cell.js` module.
* Make each cell clickable and render random sound
* Make Henry button cycle through random noises that have not already been matched
 
**Day 3:** Build out `game.js`. Goals for the day:
* Make sure multiplayer settings work properly 
* Make sure practice settings work properly
* Make sure game understands win criteria 
 
**Day 4:** Finish up all loose ends. Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:
* If time permits, AI player for single player gameplay function
* If time permits, format multiple color schemes

### Bonus features

* Add single-player game, which would include an AI opponent
* Add multiple choices for starting states that are interesting

