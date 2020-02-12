import Game from '../logic/game';


document.addEventListener('DOMContentLoaded', () => {
   const grid = document.getElementById('grid');
   const playBtn = document.getElementById('play-btn');
   const norm = document.getElementById('norm');
   const easy = document.getElementById('easy');
   const baby = document.getElementById('baby');
   const levelsBtn = document.getElementById('levels-btn');
   const levels = document.getElementById('levels-menu');
   const menu = document.getElementById('start-menu');
   const rulesBtn = document.getElementById('rules-btn');
   const rules = document.getElementById('rules-menu');
   const closeBtn1 = document.getElementById('close-btn1');
   const closeBtn2 = document.getElementById('close-btn2');
   const tag = document.getElementsByClassName('title')[0];
   const shell = document.getElementsByClassName('shell')[0];
   const player = document.getElementById('player');
   const mute = document.getElementsByClassName('mute')[0];
   const unmute = document.getElementsByClassName('unmute')[0];
   const ani = document.getElementById('anima');
   const home = document.getElementsByClassName('home')[0];
   

   home.addEventListener('click', () => {
      let henry = document.getElementById('henry');
      let fake = document.getElementById('fake-henry');
      let reset = document.getElementsByClassName('reset')[0];
      let won = document.getElementsByClassName('won')[0];

      grid.innerHTML = "";
      ani.innerHTML = "";
      henry.parentNode.removeChild(henry);
      fake.parentNode.removeChild(fake);
      reset.parentNode.removeChild(reset);
      won.classList.add('hidden');
      shell.classList.add('hidden');
      menu.classList.remove('hidden');
      grid.classList.add('hidden')
      home.disabled = true;
      home.classList.add('default');
   })

   mute.addEventListener('click', () => {
      mute.classList.add('hidden');
      unmute.classList.remove('hidden');
      player.muted = true
   })

   unmute.addEventListener('click', () => {
      mute.classList.remove('hidden');
      unmute.classList.add('hidden');
      player.muted = false
   })

   const entry = () => {
      tag.classList.remove('start');
      menu.classList.remove('hidden');
      mute.classList.remove('hidden');
      player.play();
      tag.removeEventListener('click', entry);
   }

   tag.addEventListener('click', entry);

   const play = (level) => {
      new Game(grid, level)
      menu.classList.add('hidden');
      shell.classList.remove('hidden');
      ani.classList.remove('hidden');
      mute.click();
   }

   let level = 4;

   baby.addEventListener('click', () => { 
      level=2;
      baby.classList.add('select');
      easy.classList.remove('select');
      norm.classList.remove('select');
   });

   easy.addEventListener('click', () => { 
      level=3;
      easy.classList.add('select');
      baby.classList.remove('select');
      norm.classList.remove('select');
   });

   norm.addEventListener('click', () => {
      level=4;
      norm.classList.add('select');
      baby.classList.remove('select');
      easy.classList.remove('select');
   });

   playBtn.addEventListener('click', () => { play(level) });
   

   rulesBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      rules.classList.remove('hidden');
   })

   levelsBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      levels.classList.remove('hidden');
   })

   closeBtn1.addEventListener('click', () => {
      rules.classList.add('hidden');
      menu.classList.remove('hidden');
   })

   closeBtn2.addEventListener('click', () => {
      levels.classList.add('hidden');
      menu.classList.remove('hidden');
   })

});
