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
      this.posSeqs = this.winSeqs();
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
                  let henry = document.getElementById('henry');
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
                     henry.disabled = false;   
                     cell.classList.remove('visual')
                     if (this.winner()) {
                        console.log(this.winCondition)
                        this.winGrid(this.winCondition);

                        let endSound = document.getElementById('start-noise')
                        endSound.play()

                        let shell = document.getElementById('grid');
                        let fake = document.getElementById('fake-henry');
                        let win = document.getElementById('win');

                        shell.classList.add('hidden');
                        henry.classList.add('hidden');
                        fake.classList.remove('hidden');
                        win.classList.remove('hidden');

                        endSound.onended = () => {
                           let won = document.getElementsByClassName('won')[0];
                           won.classList.remove('hidden');
                           win.classList.add('hidden');
                           win.innerHTML = "";
                        }
                     }
                  }
               }
               
               this.bigButton.clicked = false;
            }); 
            
            col.appendChild(cell);
         }
         el.appendChild(col);
      }
      console.log(el);
      return el;
   }

   henryButton(){
      let e = document.getElementsByClassName('shell')[0];
      let henry = document.createElement("button");
      let henrySound = new Henry("");
      henry.textContent = "Henry";
      henry.id = 'henry';
      henry.className = "henry figButton glow";
      e.appendChild(henry);
      henry.addEventListener('click', () => {
         if(!henrySound.clicked){
            henry.classList.remove('glow');
            this.currentSound = this.random(this.allNoises)
            henrySound.audio.src = `./dist/sounds_library/${this.currentSound}`;
            henry.appendChild(henrySound.audio);
            henrySound.audio.play();
            henry.disabled = true;
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

   winGrid(winArr) {
      let winGrid = Board.makeGrid()

      winArr.forEach(el => {
         let row = this.posSeqs[el];
         for (let x = 0; x < row.length; x++) {
            let posX = row[x][0];
            let posY = row[x][1];
            winGrid[posX][posY] = true
         }
      })
      console.log(winGrid);

      let win = document.getElementById('win');
      for (let i = 0; i < 4; i++) {
         let col = document.createElement("div");
         col.className = "col";
         for (let j = 0; j < 4; j++) {
            let cell = document.createElement("div");
            if (winGrid[i][j] === true ){
               cell.className = `sound-cell default win`;
            } else {
               cell.className = `sound-cell default`;
            }
            col.appendChild(cell);
         }
         win.appendChild(col);
      }
   }

   winSeqs() {
      const sequences = [
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
      return sequences;
   }

   winner() {
      const wins = [];
      for (let i = 0; i < this.posSeqs.length; i++) {
         const winner = this.winnerHelper(this.posSeqs[i]);
         if (winner) {
            wins.push(i);
         }
      }
      this.winCondition = wins;
      if (wins.length > 0) { return true } else { return null };
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