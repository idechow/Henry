import Game from '../logic/game';
import View from './henry_view';
import Cell from '../logic/cell'
// const Cell = require('../logic/cell')


// console.log("blah-blah")

document.addEventListener('DOMContentLoaded', () => {
   const grid = document.getElementsByClassName('grid')[0];
   const playBtn = document.getElementById('play-btn');
   const menu = document.getElementsByClassName('start-menu')[0];
   const rulesBtn = document.getElementById('rules-btn');
   const rules = document.getElementsByClassName('rules-menu')[0];
   const closeBtn = document.getElementById('close-btn');
   const startNoise = document.getElementById('start-noise');
   const tag = document.getElementsByClassName('title')[0];
   const shell = document.getElementsByClassName('shell')[0];

   playBtn.addEventListener('click', () => {
      const game = new Game(grid)
      menu.classList.add('hidden');
      shell.classList.remove('hidden');
      grid.classList.remove('hidden');
      tag.classList.add('hidden');
      startNoise.play();

   })

   rulesBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      rules.classList.remove('hidden');
   })

   closeBtn.addEventListener('click', () => {
      rules.classList.add('hidden');
      menu.classList.remove('hidden');
   })


   // startButton.addEventListener('click', () => {
   //    menu.classList.add('hidden');
   //    // instructions.classList.add('hidden');
   //    // goBack.classList.add('hidden');
   //    // gameStory.classList.remove('animate-expand');
   //    // playBtn.classList.remove('animate-expand');
   // })

});

// window.Game = new Game(); 
// window.Game = Game;
// window.Board = Board;
// window.Cell = Cell;
