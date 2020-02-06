import Cell from "./cell";
import Henry from "./henry_button";
import Sounds from "../dist/sounds_index";

class Board {
   constructor(el){
      this.grid = Board.makeGrid();
      this.noises = this.selectSounds();
      this.allNoises = this.noises.slice(0); 
      this.gridView = this.makeGridView(el);
      this.bigButton = this.henryButton();
   }

   shuffle(sounds) {
   let m = sounds.length, t, i;
      while (m) {
         i = Math.floor(Math.random() * m--);
         t = sounds[m];
         sounds[m] = sounds[i];
         sounds[i] = t;
      }
   return sounds;
   }

   selectSounds() {
      const setSounds = this.shuffle(Sounds).slice(0, 16)
      return setSounds;
   }


   makeGridView(el){
      for (let i=0; i<4; i++){
         let col = document.createElement("div");
         col.className = "col";
         for (let j=0; j<4; j++){
            let cell = document.createElement("div");
            let cellSound = new Cell(`./dist/sounds_library/${this.noises.shift()}`, i, j);
            cell.appendChild(cellSound.audio) 
            cell.className = "sound-cell default";
            
            cell.addEventListener('click', () => {
               if (this.bigButton.clicked && !cellSound.match){
                  let henry = document.getElementsByClassName('henry')[0];
                  let grid = document.getElementsByClassName('sound-cell');
                  cellSound.audio.play();
                  cell.classList.add('visual')
                  for (let cell of grid) {
                     cell.classList.add('default');
                  }
                  if (cellSound.audio.src === this.bigButton.audio.src) {
                     cell.className = "match";
                     cellSound.match = true;
                     this.grid[i][j] = true;
                     this.allNoises.splice(this.allNoises.indexOf(this.currentSound), 1);
                  }
                  cellSound.audio.onended = () => {
                     henry.classList.add('glow');
                     cell.classList.remove('visual')
                     if (this.winner()) {
                        let shell = document.getElementsByClassName('grid')[0];
                        let won = document.getElementsByClassName('won')[0];
                        shell.classList.add('hidden');
                        won.classList.remove('hidden');
                     }
                  }
               }
               
               this.bigButton.clicked = false;
            }); 
            
            col.appendChild(cell);
         }
         el.appendChild(col);
      }
   }

   henryButton(){
      let e = document.getElementsByClassName('shell')[0]; 

      let henry = document.createElement("button");
      let henrySound = new Henry("");
      henry.appendChild(henrySound.audio)
      henry.textContent = "Henry";
      henry.className = "henry figButton glow";
      e.appendChild(henry);

      henry.addEventListener('click', () => {
         if(!henrySound.clicked){
            henry.classList.remove('glow');
            this.currentSound = this.random(this.allNoises)
            henrySound.audio.src = `./dist/sounds_library/${this.currentSound}`;
            henrySound.audio.play();
            henrySound.audio.onended = () => {
               henrySound.clicked = true;
               let grid = document.getElementsByClassName('sound-cell');
               for (let cell of grid){
                  cell.classList.remove('default');
               }
            }
         }
      }); 
      return henrySound;
   }

   random(items) {
      let item = items[Math.floor(Math.random() * items.length)];
      return item;
   }

   winner() {
      const posSeqs = [
         // horizontals
         [[0, 0], [0, 1], [0, 2], [0, 3]],
         [[1, 0], [1, 1], [1, 2], [1, 3]],
         [[2, 0], [2, 1], [2, 2], [2, 3]],
         [[3, 0], [3, 1], [3, 2], [3, 3]],
         // verticals
         [[0, 0], [1, 0], [2, 0], [3, 0]],
         [[0, 1], [1, 1], [2, 1], [3, 1]],
         [[0, 2], [1, 2], [2, 2], [3, 2]],
         [[0, 3], [1, 3], [2, 3], [3, 3]],
         // diagonals
         [[0, 0], [1, 1], [2, 2], [3, 3]],
         [[3, 0], [1, 2], [2, 1], [0, 3]]
      ];

      for (let i = 0; i < posSeqs.length; i++) {
         const winner = this.winnerHelper(posSeqs[i]);
         if (winner) {
            return true;
         }
      }
      return null;
   }

   winnerHelper(posSeq) {
      for (let posIdx = 0; posIdx < 4; posIdx++) {
         const pos = posSeq[posIdx];
         const match = this.grid[pos[0]][pos[1]];
         if (!match) return false;
      }
      return true;
   }

   static makeGrid() {
      const grid = [];

      for (let i = 0; i < 4; i++) {
         grid.push([]);
         for (let j = 0; j < 4; j++) {
            grid[i].push(false);
         }
      }
      return grid;
   }

}

export default Board;