import Board from "./board";
import Henry from './henry_button';

class Game {
   constructor(el) {
      this.reset = this.start(el);
      this.animationGrid = this.makeAnimationGrid(el)
   }

   start(el) {
      let e = document.getElementsByClassName('shell')[0];

      let start = document.createElement("button");
      let startSound = new Henry('./dist/shuffle_sound/Shuffle.m4a');
      start.appendChild(startSound.audio)
      start.textContent = "Reset";
      start.className = "reset figButton default";
      start.disabled = true;
      e.appendChild(start);

      start.addEventListener('click', () => {
         startSound.audio.play();
         let won = document.getElementsByClassName('won')[0];
         won.classList.add('hidden');
         let old = document.getElementById('grid');
         old.innerHTML = "";
         old.classList.add('hidden');
         let ani = document.getElementById('anima');
         ani.classList.remove('hidden');
         
         let henry = document.getElementById('henry');
         henry.parentNode.removeChild(henry);

         let fake = document.getElementById('fake-henry');
         fake.classList.remove('hidden');
      

         start.classList.add('default');
         start.disabled = true;

         startSound.audio.onended = () => {
            old.classList.remove('hidden');
            ani.classList.add('hidden');
            start.classList.remove('default');
            start.disabled = false;
            fake.classList.add('hidden');
            this.board = new Board(el);
         }
      });
      return startSound;
   }

   makeAnimationGrid(el) {
      const reset = document.getElementsByClassName('reset')[0];
      const startNoise = document.getElementById('start-noise');
      startNoise.play()
      let ani = document.getElementById('anima');
      for (let i = 0; i < 4; i++) {
         let col = document.createElement("div");
         col.className = "col";
         for (let j = 0; j < 4; j++) {
            let cell = document.createElement("div");
            cell.className = `sound-cell default shuf cell${i-j}`;
            col.appendChild(cell);
         }
         ani.appendChild(col);
      }

      //fake henry button
      let e = document.getElementsByClassName('shell')[0];
      let henry = document.createElement("button");
      henry.textContent = "Henry";
      henry.id = "fake-henry"
      henry.className = "henry figButton";
      e.appendChild(henry);

      startNoise.onended = () => { 
         this.board = new Board(el); 
         el.classList.remove('hidden');
         ani.classList.add('hidden');
         reset.disabled = false;
         reset.classList.remove('default');
         henry.classList.add('hidden');
      }
   }
  
}

export default Game;