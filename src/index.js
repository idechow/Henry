import Game from '../logic/game';


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
   const player = document.getElementById('player');
   const mute = document.getElementsByClassName('mute')[0];
   const unmute = document.getElementsByClassName('unmute')[0];

   const home = document.getElementsByClassName('home')[0];
   

   home.addEventListener('click', () => {
      let henry = document.getElementsByClassName('henry')[0];
      let reset = document.getElementsByClassName('reset')[0];
      let won = document.getElementsByClassName('won')[0];

      grid.innerHTML = "";
      henry.parentNode.removeChild(henry);
      reset.parentNode.removeChild(reset);
      won.classList.add('hidden');
      shell.classList.add('hidden');
      menu.classList.remove('hidden');
   })

   mute.addEventListener('click', () => {
      mute.classList.add('hidden');
      unmute.classList.remove('hidden');
   })

   unmute.addEventListener('click', () => {
      mute.classList.remove('hidden');
      unmute.classList.add('hidden');
   })

   const entry = () => {
      tag.classList.remove('start');
      menu.classList.remove('hidden');
      mute.classList.remove('hidden');
      player.play();
      tag.removeEventListener('click', entry);
   }

   tag.addEventListener('click', entry);

   playBtn.addEventListener('click', () => {
      const game = new Game(grid)
      menu.classList.add('hidden');
      shell.classList.remove('hidden');
      grid.classList.remove('hidden');
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

});
