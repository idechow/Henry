import Cell from ("./cell");

class Board {
   constructor(){
      
   }

   shuffleSounds(sounds) {
      sounds.sort(() => Math.random() - 0.5);
   }

   selectSounds() {
      this.shuffleSounds(Sounds).slice(16)
   }

   
}

export default Board;