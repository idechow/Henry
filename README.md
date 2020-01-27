# Henry: a children's game
## JS Project Proposal: Henry game simulator
### Background
Henry is a memory game using sound instead of images. The original game is on a 4x4 grid and has the option for practice, single, and multi-person play. Each cell on the grid corresponds with a randomized sound. When the game is in play, the player plays the next sound in the queue and attempts to locate that same sound on the grid. When a matching sound is found, the cell lights up. The game ends when a player matches 4 sounds in a line, either horizontal, vertical, or diagonal.

To start the game, the player must first choose their setting: practice, single, or multiplayer. Players must press the “start” button, which shuffles the sounds in the grid. On each turn, a player will hit the “Henry” button, which plays the sound the player must locate. For multiplayer games, each player gets one guess before the end of their turn. 

### Functionality & MVP

With this Henry simulator, users will be able to:
*Select which game style to play in (practice or multiplayer) 
*Start or reset the game board
*Play sounds through the Henry button
*Select squares that play sounds and light up if matched
*Win the game by matching 4 sounds in a line
 
In addition, this project will include:
*An About modal describing the background and rules of the game
*A production README
