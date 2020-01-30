import Cell from "./cell";
import Sounds from "../dist/sounds_index";

class Board {
   constructor(){
      this.noises = this.selectSounds();
      this.allNoises = this.noises.slice(0); 
      this.grid = this.makeGrid();
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
      console.log(setSounds); 

      return setSounds;
   }


   makeGrid(){
      let e = document.getElementById('grid'); 

      for (let i=0; i<4; i++){
         let col = document.createElement("div");
         col.className = "col";
         for (let j=0; j<4; j++){
            let cell = document.createElement("div");
            let cellSound = new Cell(`../dist/sounds_library/${this.noises.shift()}`, i, j);
            cell.appendChild(cellSound.audio) 

            cell.addEventListener('click', () => {
               cellSound.clicked = true;
               cellSound.audio.play();
            
               // document.getElementById('board-id').
            }); 
            cell.className = "sound-cell";
            col.appendChild(cell);
         }
         e.appendChild(col);
      }
   }

   henryButton(){
      let e = document.getElementById('shell'); 

      let henry = document.createElement("button");
      henry.textContent = "Henry";
      henry.className = "henry-button";
      let randNoise = document.createElement("audio")
      randNoise.src = ""
      randNoise.setAttribute("type", "audio/mp4")
      randNoise.setAttribute("preload", "auto");
      randNoise.setAttribute("controls", "none");
      randNoise.style.display = "none";

      e.appendChild(henry);

      henry.addEventListener('click', () => {
         randNoise.src = `../dist/sounds_library/${this.random(this.allNoises)}`
         randNoise.play();
      }); 
   }

   random(items) {
      let item = items[Math.floor(Math.random() * items.length)];
      return item;
   }

}

export default Board;