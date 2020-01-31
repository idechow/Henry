class Henry {
   constructor(src) {
      this.audio = this.sound(src);
      this.clicked = false;
      
   }

   sound(src) {
      let sound = document.createElement("audio");
      sound.src = src;
      sound.setAttribute("type", "audio/mp4")
      sound.setAttribute("preload", "auto");
      sound.setAttribute("controls", "none");
      sound.style.display = "none";
      return sound;
   }

}

export default Henry;