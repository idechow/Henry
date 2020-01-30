
class Cell {
   constructor(src, i, j) {
      this.audio = this.sound(src);
      this.match = false;
      this.pos = [i, j]; 
      this.clicked = false; 
   }

   sound(src){
      console.log("hey")
      let sound = document.createElement("audio");
      sound.src = src;
      sound.setAttribute("type", "audio/mp4")
      sound.setAttribute("preload", "auto");
      sound.setAttribute("controls", "none");
      sound.style.display = "none";
      return sound; 
   }



}

export default Cell;


// document.body.appendChild(sound);
// this.play = () => {
//    sound.play();
// }
// this.stop = () => {
//    sound.pause();
// }