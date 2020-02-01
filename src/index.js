import Game from '../logic/game';
import View from './henry_view';
import Cell from '../logic/cell'
// const Cell = require('../logic/cell')


// console.log("blah-blah")

document.addEventListener('DOMContentLoaded', () => {

   startButton.addEventListener('click', () => {
      menu.classList.add('hidden');
      // instructions.classList.add('hidden');
      // goBack.classList.add('hidden');
      // gameStory.classList.remove('animate-expand');
      // playBtn.classList.remove('animate-expand');
   })

});

window.Game = new Game(); 
// window.Game = Game;
// window.Board = Board;
// window.Cell = Cell;
