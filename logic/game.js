import Board from "./board";
import Henry from './henry_button';

class Game {
   constructor(el) {
      this.board = new Board(el); 
      this.reset = this.start(el);
   }

   start(el) {
      let e = document.getElementsByClassName('shell')[0];

      let start = document.createElement("button");
      let startSound = new Henry('./dist/shuffle_sound/Shuffle.m4a');
      start.appendChild(startSound.audio)
      start.textContent = "Reset";
      start.className = "reset figButton";
      e.appendChild(start);

      start.addEventListener('click', () => {
         startSound.audio.play();
         let won = document.getElementsByClassName('won')[0];
         won.classList.add('hidden');
         let old = document.getElementsByClassName('grid')[0];
         old.innerHTML = "";
         let henry = document.getElementsByClassName('henry')[0];
         henry.parentNode.removeChild(henry);
         this.board = new Board(el); 
         let shell = document.getElementsByClassName('grid')[0];
         shell.classList.remove('hidden');
      });
      return startSound;
   }
  
}

export default Game;