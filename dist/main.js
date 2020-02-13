/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/sounds_index.js":
/*!******************************!*\
  !*** ./dist/sounds_index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Sounds = [\n   'Aaachoo!.m4a',\n   'Airy_chimes.m4a',\n   'Airy_fart.m4a',\n   'Aliens.m4a',\n   'Ambulance_siren.m4a',\n   'Ba_ba_bum.m4a',\n   'Baawing!.m4a',\n   'Belly_laugh.m4a',\n   'Bones_clatter.m4a',\n   'Breaking_glass.m4a',\n   'Chicken.m4a',\n   'Chomp.m4a',\n   'Co_co_clock.m4a',\n   'Cow_moo.m4a',\n   'Ding_ding_dong.m4a',\n   'Door_bell.m4a',\n   'Drar_drar.m4a',\n   'Elephant.m4a',\n   'Flivver_horn.m4a',\n   'Four_score.m4a',\n   'Frog_rev_rev.m4a',\n   'Get_out_of_here.m4a',\n   'Give_me_a_break.m4a',\n   'Glug_glug_glug.m4a',\n   'Good_day_mate.m4a',\n   'Gribit_gribit.m4a',\n   'Hammer_bangs.m4a',\n   'Happy_birthday.m4a',\n   'Harp.m4a',\n   'Hey_watch_it_pal.m4a',\n   'Horse_whinny.m4a',\n   'Knock_knock.m4a',\n   'Lazer_gun.m4a',\n   'Loud_honking.m4a',\n   'My_fellow_americans.m4a',\n   'No_way.m4a',\n   'Phone_off_the_hook.m4a',\n   'Piano_falls.m4a',\n   'Running_rev_car.m4a',\n   'Score!.m4a',\n   'Sheep_bah.m4a',\n   'Snare_drum.m4a',\n   'Space_ship_drive_by.m4a',\n   'Space_zoom.m4a',\n   'Squeak_boing.m4a',\n   'Squeak_boom_quack.m4a',\n   'Squishy_fart.m4a',\n   'Stop.m4a',\n   'Telephone_ring.m4a',\n   'Ting_ting_ting.m4a',\n   'Toilet_flush.m4a',\n   'Touchdown.m4a',\n   'Toy_revs.m4a',\n   'Toy_vroom_vroom.m4a',\n   'Train_horn.m4a',\n   'Voom_boom_boop.m4a',\n   'Waawoo!.m4a',\n   'Whistle_blows.m4a',\n   'Wimpy_siren.m4a',\n   'Wolf_howling.m4a',\n   'Woof_woof.m4a'\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sounds);\n\n//# sourceURL=webpack:///./dist/sounds_index.js?");

/***/ }),

/***/ "./logic/board.js":
/*!************************!*\
  !*** ./logic/board.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./logic/cell.js\");\n/* harmony import */ var _henry_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry_button */ \"./logic/henry_button.js\");\n/* harmony import */ var _dist_sounds_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/sounds_index */ \"./dist/sounds_index.js\");\n\n\n\n\nclass Board {\n   constructor(el, size){\n      this.grid = Board.makeGrid(size);\n      this.noises = this.selectSounds(size);\n      this.allNoises = this.noises.slice(0); \n      this.gridView = this.makeGridView(el, size);\n      this.bigButton = this.henryButton();\n      this.posSeqs = this.winSeqs(size);\n   }\n\n   shuffle(sounds) {\n   let m = sounds.length, t, i;\n      while (m) {\n         i = Math.floor(Math.random() * m--);\n         t = sounds[m];\n         sounds[m] = sounds[i];\n         sounds[i] = t;\n      }\n   return sounds;\n   }\n\n   selectSounds(size) {\n      const setSounds = this.shuffle(_dist_sounds_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).slice(0, size*size)\n      return setSounds;\n   }\n\n\n   makeGridView(el, size){\n      for (let i=0; i<size; i++){\n         let col = document.createElement(\"div\");\n         col.className = \"col\";\n         for (let j=0; j<size; j++){\n            let cell = document.createElement(\"div\");\n            let cellSound = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`./dist/sounds_library/${this.noises.shift()}`, i, j);\n            cell.appendChild(cellSound.audio) \n            cell.className = \"sound-cell default\";\n            \n            cell.addEventListener('click', () => {\n               if (this.bigButton.clicked && !cellSound.match){\n                  let henry = document.getElementById('henry');\n                  let grid = document.getElementsByClassName('sound-cell');\n                  cellSound.audio.play();\n                  cell.classList.add('visual')\n                  for (let cell of grid) {\n                     cell.classList.add('default');\n                  }\n                  if (cellSound.audio.src === this.bigButton.audio.src) {\n                     cell.className = \"match\";\n                     cellSound.match = true;\n                     this.grid[i][j] = true;\n                     this.allNoises.splice(this.allNoises.indexOf(this.currentSound), 1);\n                  }\n                  cellSound.audio.onended = () => {\n                     henry.classList.add('glow');\n                     henry.disabled = false;   \n                     cell.classList.remove('visual')\n                     if (this.winner(size)) {\n                        this.winGrid(this.winCondition, size);\n\n                        let endSound = document.getElementById('end-noise')\n                        endSound.play()\n\n                        let shell = document.getElementById('grid');\n                        let fake = document.getElementById('fake-henry');\n                        let win = document.getElementById('win');\n                        let home = document.getElementsByClassName('home')[0];\n                        \n                        home.disabled = true;\n                        home.classList.add('default');\n                        shell.classList.add('hidden');\n                        henry.classList.add('hidden');\n                        fake.classList.remove('hidden');\n                        win.classList.remove('hidden');\n\n                        endSound.onended = () => {\n                           let won = document.getElementsByClassName('won')[0];\n                           won.classList.remove('hidden');\n                           win.classList.add('hidden');\n                           win.innerHTML = \"\";\n                           home.disabled = false;\n                           home.classList.remove('default');\n                        }\n                     }\n                  }\n               }\n               \n               this.bigButton.clicked = false;\n            }); \n            \n            col.appendChild(cell);\n         }\n         el.appendChild(col);\n      }\n      return el;\n   }\n\n   henryButton(){\n      let e = document.getElementsByClassName('shell')[0];\n      let henry = document.createElement(\"button\");\n      let henrySound = new _henry_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\");\n      henry.textContent = \"Henry\";\n      henry.id = 'henry';\n      henry.className = \"henry figButton glow\";\n      e.appendChild(henry);\n      henry.addEventListener('click', () => {\n         if(!henrySound.clicked){\n            henry.classList.remove('glow');\n            this.currentSound = this.random(this.allNoises)\n            henrySound.audio.src = `./dist/sounds_library/${this.currentSound}`;\n            henry.appendChild(henrySound.audio);\n            henrySound.audio.play();\n            henry.disabled = true;\n            henrySound.audio.onended = () => {\n               henrySound.clicked = true;\n               let grid = document.getElementsByClassName('sound-cell');\n               for (let cell of grid){\n                  cell.classList.remove('default');\n               }\n            }\n         }\n      }); \n      return henrySound;\n   }\n\n   random(items) {\n      let item = items[Math.floor(Math.random() * items.length)];\n      return item;\n   }\n\n   winGrid(winArr, size) {\n      let winGrid = Board.makeGrid(size)\n\n      winArr.forEach(el => {\n         let row = this.posSeqs[el];\n         for (let x = 0; x < row.length; x++) {\n            let posX = row[x][0];\n            let posY = row[x][1];\n            winGrid[posX][posY] = true\n         }\n      })\n\n      let win = document.getElementById('win');\n      for (let i = 0; i < size; i++) {\n         let col = document.createElement(\"div\");\n         col.className = \"col\";\n         for (let j = 0; j < size; j++) {\n            let cell = document.createElement(\"div\");\n            if (winGrid[i][j] === true ){\n               cell.className = `sound-cell default win`;\n            } else {\n               cell.className = `sound-cell default`;\n            }\n            col.appendChild(cell);\n         }\n         win.appendChild(col);\n      }\n   }\n\n   winSeqs(size) {\n      let sequences = [];\n\n      let dia_1 = [];\n      let dia_2 = [];\n      // horizontal & verticals & diagonals\n      for (let i = 0; i < size; i++){\n         let hor = [];\n         let ver = [];\n         for (let j = 0; j < size; j++){\n            hor.push([i, j]);\n            ver.push([j, i]);\n            if(i === j) dia_1.push([i, j]);\n            if(i+j === size-1) dia_2.push([i, j]);\n         }\n         sequences.push(hor);\n         sequences.push(ver);\n      }\n      sequences.push(dia_1);\n      sequences.push(dia_2);\n\n      return sequences;\n   }\n\n   winner(size) {\n      const wins = [];\n      for (let i = 0; i < this.posSeqs.length; i++) {\n         const winner = this.winnerHelper(this.posSeqs[i], size);\n         if (winner) {\n            wins.push(i);\n         }\n      }\n      this.winCondition = wins;\n      if (wins.length > 0) { return true } else { return null };\n   }\n\n   winnerHelper(posSeq, size) {\n      for (let posIdx = 0; posIdx < size; posIdx++) {\n         const pos = posSeq[posIdx];\n         const match = this.grid[pos[0]][pos[1]];\n         if (!match) return false;\n      }\n      return true;\n   }\n\n   static makeGrid(size) {\n      const grid = [];\n\n      for (let i = 0; i < size; i++) {\n         grid.push([]);\n         for (let j = 0; j < size; j++) {\n            grid[i].push(false);\n         }\n      }\n      return grid;\n   }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n// const sequences = [\n//    // horizontals\n//    [[0, 0], [0, 1], [0, 2], [0, 3]],\n//    [[1, 0], [1, 1], [1, 2], [1, 3]],\n//    [[2, 0], [2, 1], [2, 2], [2, 3]],\n//    [[3, 0], [3, 1], [3, 2], [3, 3]],\n//    // verticals\n//    [[0, 0], [1, 0], [2, 0], [3, 0]],\n//    [[0, 1], [1, 1], [2, 1], [3, 1]],\n//    [[0, 2], [1, 2], [2, 2], [3, 2]],\n//    [[0, 3], [1, 3], [2, 3], [3, 3]],\n//    // diagonals\n//    [[0, 0], [1, 1], [2, 2], [3, 3]],\n//    [[3, 0], [1, 2], [2, 1], [0, 3]]\n// ];\n\n//# sourceURL=webpack:///./logic/board.js?");

/***/ }),

/***/ "./logic/cell.js":
/*!***********************!*\
  !*** ./logic/cell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Cell {\n   constructor(src, i, j) {\n      this.audio = this.sound(src);\n      this.match = false;\n      this.pos = [i, j]; \n   }\n\n   sound(src){\n      let sound = document.createElement(\"audio\");\n      sound.src = src;\n      sound.setAttribute(\"type\", \"audio/mp4\")\n      sound.setAttribute(\"preload\", \"auto\");\n      sound.setAttribute(\"controls\", \"none\");\n      sound.style.display = \"none\";\n      return sound; \n   }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n\n// document.body.appendChild(sound);\n// this.play = () => {\n//    sound.play();\n// }\n// this.stop = () => {\n//    sound.pause();\n// }\n\n//# sourceURL=webpack:///./logic/cell.js?");

/***/ }),

/***/ "./logic/game.js":
/*!***********************!*\
  !*** ./logic/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./logic/board.js\");\n/* harmony import */ var _henry_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry_button */ \"./logic/henry_button.js\");\n\n\n\nclass Game {\n   constructor(el, size) {\n      this.reset = this.start(el, size);\n      this.animationGrid = this.makeAnimationGrid(el, size)\n   }\n\n   start(el, size) {\n      let e = document.getElementsByClassName('shell')[0];\n\n      let start = document.createElement(\"button\");\n      let startSound = new _henry_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('./dist/shuffle_sound/Shuffle.m4a');\n      start.appendChild(startSound.audio)\n      start.textContent = \"Reset\";\n      start.className = \"reset figButton default\";\n      start.disabled = true;\n      e.appendChild(start);\n\n      start.addEventListener('click', () => {\n         startSound.audio.play();\n         let won = document.getElementsByClassName('won')[0];\n         won.classList.add('hidden');\n         let old = document.getElementById('grid');\n         old.innerHTML = \"\";\n         old.classList.add('hidden');\n         let ani = document.getElementById('anima');\n         ani.classList.remove('hidden');\n         \n         let henry = document.getElementById('henry');\n         henry.parentNode.removeChild(henry);\n\n         let fake = document.getElementById('fake-henry');\n         fake.classList.remove('hidden');\n      \n         const home = document.getElementsByClassName('home')[0];\n         home.disabled = true;\n         home.classList.add('default');\n\n         start.classList.add('default');\n         start.disabled = true;\n\n         startSound.audio.onended = () => {\n            home.disabled = false;\n            home.classList.remove('default');\n            old.classList.remove('hidden');\n            ani.classList.add('hidden');\n            start.classList.remove('default');\n            start.disabled = false;\n            fake.classList.add('hidden');\n            this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el, size);\n\n         }\n      });\n      return startSound;\n   }\n\n   makeAnimationGrid(el, size) {\n      const reset = document.getElementsByClassName('reset')[0];\n      const startNoise = document.getElementById('start-noise');\n      const home = document.getElementsByClassName('home')[0];\n      startNoise.play()\n      let ani = document.getElementById('anima');\n      for (let i = 0; i < size; i++) {\n         let col = document.createElement(\"div\");\n         col.className = \"col\";\n         for (let j = 0; j < size; j++) {\n            let cell = document.createElement(\"div\");\n            cell.className = `sound-cell default shuf cell${i-j}`;\n            col.appendChild(cell);\n         }\n         ani.appendChild(col);\n      }\n\n      //fake henry button\n      let e = document.getElementsByClassName('shell')[0];\n      let henry = document.createElement(\"button\");\n      henry.textContent = \"Henry\";\n      henry.id = \"fake-henry\"\n      henry.className = \"henry figButton\";\n      e.appendChild(henry);\n\n      startNoise.onended = () => { \n         this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el, size); \n         el.classList.remove('hidden');\n         ani.classList.add('hidden');\n         reset.disabled = false;\n         reset.classList.remove('default');\n         henry.classList.add('hidden');\n         home.disabled = false;\n         home.classList.remove('default');\n      }\n   }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./logic/game.js?");

/***/ }),

/***/ "./logic/henry_button.js":
/*!*******************************!*\
  !*** ./logic/henry_button.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Henry {\n   constructor(src) {\n      this.audio = this.sound(src);\n      this.clicked = false;\n   }\n\n   sound(src) {\n      let sound = document.createElement(\"audio\");\n      sound.src = src;\n      sound.setAttribute(\"type\", \"audio/mp4\")\n      sound.setAttribute(\"preload\", \"auto\");\n      sound.setAttribute(\"controls\", \"none\");\n      sound.style.display = \"none\";\n      return sound;\n   }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Henry);\n\n//# sourceURL=webpack:///./logic/henry_button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ \"./logic/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n   const grid = document.getElementById('grid');\n   const playBtn = document.getElementById('play-btn');\n   const norm = document.getElementById('norm');\n   const easy = document.getElementById('easy');\n   const baby = document.getElementById('baby');\n   const levelsBtn = document.getElementById('levels-btn');\n   const levels = document.getElementById('levels-menu');\n   const menu = document.getElementById('start-menu');\n   const rulesBtn = document.getElementById('rules-btn');\n   const rules = document.getElementById('rules-menu');\n   const closeBtn1 = document.getElementById('close-btn1');\n   const closeBtn2 = document.getElementById('close-btn2');\n   const tag = document.getElementsByClassName('title')[0];\n   const shell = document.getElementsByClassName('shell')[0];\n   const player = document.getElementById('player');\n   const mute = document.getElementsByClassName('mute')[0];\n   const unmute = document.getElementsByClassName('unmute')[0];\n   const ani = document.getElementById('anima');\n   const home = document.getElementsByClassName('home')[0];\n   \n\n   home.addEventListener('click', () => {\n      let henry = document.getElementById('henry');\n      let fake = document.getElementById('fake-henry');\n      let reset = document.getElementsByClassName('reset')[0];\n      let won = document.getElementsByClassName('won')[0];\n\n      grid.innerHTML = \"\";\n      ani.innerHTML = \"\";\n      henry.parentNode.removeChild(henry);\n      fake.parentNode.removeChild(fake);\n      reset.parentNode.removeChild(reset);\n      won.classList.add('hidden');\n      shell.classList.add('hidden');\n      menu.classList.remove('hidden');\n      grid.classList.add('hidden')\n      home.disabled = true;\n      home.classList.add('default');\n      player.currentTime = 0;\n      unmute.click();\n   })\n\n   mute.addEventListener('click', () => {\n      mute.classList.add('hidden');\n      unmute.classList.remove('hidden');\n      player.muted = true\n   })\n\n   unmute.addEventListener('click', () => {\n      mute.classList.remove('hidden');\n      unmute.classList.add('hidden');\n      player.muted = false\n   })\n\n   const entry = () => {\n      tag.classList.remove('start');\n      menu.classList.remove('hidden');\n      mute.classList.remove('hidden');\n      player.play();\n      tag.removeEventListener('click', entry);\n   }\n\n   tag.addEventListener('click', entry);\n\n   const play = (level) => {\n      new _logic_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](grid, level)\n      menu.classList.add('hidden');\n      shell.classList.remove('hidden');\n      ani.classList.remove('hidden');\n      mute.click();\n   }\n\n   let level = 4;\n\n   baby.addEventListener('click', () => { \n      level=2;\n      baby.classList.add('select');\n      easy.classList.remove('select');\n      norm.classList.remove('select');\n   });\n\n   easy.addEventListener('click', () => { \n      level=3;\n      easy.classList.add('select');\n      baby.classList.remove('select');\n      norm.classList.remove('select');\n   });\n\n   norm.addEventListener('click', () => {\n      level=4;\n      norm.classList.add('select');\n      baby.classList.remove('select');\n      easy.classList.remove('select');\n   });\n\n   playBtn.addEventListener('click', () => { play(level) });\n   \n\n   rulesBtn.addEventListener('click', () => {\n      menu.classList.add('hidden');\n      rules.classList.remove('hidden');\n   })\n\n   levelsBtn.addEventListener('click', () => {\n      menu.classList.add('hidden');\n      levels.classList.remove('hidden');\n   })\n\n   closeBtn1.addEventListener('click', () => {\n      rules.classList.add('hidden');\n      menu.classList.remove('hidden');\n   })\n\n   closeBtn2.addEventListener('click', () => {\n      levels.classList.add('hidden');\n      menu.classList.remove('hidden');\n   })\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });