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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./logic/cell.js\");\n/* harmony import */ var _henry_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry_button */ \"./logic/henry_button.js\");\n/* harmony import */ var _dist_sounds_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/sounds_index */ \"./dist/sounds_index.js\");\n\n\n\n\nclass Board {\n   constructor(el){\n      this.grid = Board.makeGrid();\n      this.noises = this.selectSounds();\n      this.allNoises = this.noises.slice(0); \n      this.gridView = this.makeGridView(el);\n      this.bigButton = this.henryButton();\n   }\n\n   shuffle(sounds) {\n   let m = sounds.length, t, i;\n      while (m) {\n         i = Math.floor(Math.random() * m--);\n         t = sounds[m];\n         sounds[m] = sounds[i];\n         sounds[i] = t;\n      }\n   return sounds;\n   }\n\n   selectSounds() {\n      const setSounds = this.shuffle(_dist_sounds_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).slice(0, 16)\n      return setSounds;\n   }\n\n\n   makeGridView(el){\n      for (let i=0; i<4; i++){\n         let col = document.createElement(\"div\");\n         col.className = \"col\";\n         for (let j=0; j<4; j++){\n            let cell = document.createElement(\"div\");\n            let cellSound = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`./dist/sounds_library/${this.noises.shift()}`, i, j);\n            cell.appendChild(cellSound.audio) \n            cell.className = \"sound-cell default\";\n            \n            cell.addEventListener('click', () => {\n               if (this.bigButton.clicked && !cellSound.match){\n                  let henry = document.getElementsByClassName('henry')[0];\n                  let grid = document.getElementsByClassName('sound-cell');\n                  cellSound.audio.play();\n                  cell.classList.add('visual')\n                  for (let cell of grid) {\n                     cell.classList.add('default');\n                  }\n                  if (cellSound.audio.src === this.bigButton.audio.src) {\n                     cell.className = \"match\";\n                     cellSound.match = true;\n                     this.grid[i][j] = true;\n                     this.allNoises.splice(this.allNoises.indexOf(this.currentSound), 1);\n                  }\n                  cellSound.audio.onended = () => {\n                     henry.classList.add('glow');\n                     cell.classList.remove('visual')\n                     if (this.winner()) {\n                        let shell = document.getElementsByClassName('grid')[0];\n                        let won = document.getElementsByClassName('won')[0];\n                        shell.classList.add('hidden');\n                        won.classList.remove('hidden');\n                     }\n                  }\n               }\n               \n               this.bigButton.clicked = false;\n            }); \n            \n            col.appendChild(cell);\n         }\n         el.appendChild(col);\n      }\n   }\n\n   henryButton(){\n      let e = document.getElementsByClassName('shell')[0]; \n\n      let henry = document.createElement(\"button\");\n      let henrySound = new _henry_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\");\n      henry.appendChild(henrySound.audio)\n      henry.textContent = \"Henry\";\n      henry.className = \"henry figButton glow\";\n      e.appendChild(henry);\n\n      henry.addEventListener('click', () => {\n         if(!henrySound.clicked){\n            henry.classList.remove('glow');\n            this.currentSound = this.random(this.allNoises)\n            henrySound.audio.src = `./dist/sounds_library/${this.currentSound}`;\n            henrySound.audio.play();\n            henrySound.audio.onended = () => {\n               henrySound.clicked = true;\n               let grid = document.getElementsByClassName('sound-cell');\n               for (let cell of grid){\n                  cell.classList.remove('default');\n               }\n            }\n         }\n      }); \n      return henrySound;\n   }\n\n   random(items) {\n      let item = items[Math.floor(Math.random() * items.length)];\n      return item;\n   }\n\n   winner() {\n      const posSeqs = [\n         // horizontals\n         [[0, 0], [0, 1], [0, 2], [0, 3]],\n         [[1, 0], [1, 1], [1, 2], [1, 3]],\n         [[2, 0], [2, 1], [2, 2], [2, 3]],\n         [[3, 0], [3, 1], [3, 2], [3, 3]],\n         // verticals\n         [[0, 0], [1, 0], [2, 0], [3, 0]],\n         [[0, 1], [1, 1], [2, 1], [3, 1]],\n         [[0, 2], [1, 2], [2, 2], [3, 2]],\n         [[0, 3], [1, 3], [2, 3], [3, 3]],\n         // diagonals\n         [[0, 0], [1, 1], [2, 2], [3, 3]],\n         [[3, 0], [1, 2], [2, 1], [0, 3]]\n      ];\n\n      for (let i = 0; i < posSeqs.length; i++) {\n         const winner = this.winnerHelper(posSeqs[i]);\n         if (winner) {\n            return true;\n         }\n      }\n      return null;\n   }\n\n   winnerHelper(posSeq) {\n      for (let posIdx = 0; posIdx < 4; posIdx++) {\n         const pos = posSeq[posIdx];\n         const match = this.grid[pos[0]][pos[1]];\n         if (!match) return false;\n      }\n      return true;\n   }\n\n   static makeGrid() {\n      const grid = [];\n\n      for (let i = 0; i < 4; i++) {\n         grid.push([]);\n         for (let j = 0; j < 4; j++) {\n            grid[i].push(false);\n         }\n      }\n      return grid;\n   }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./logic/board.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./logic/board.js\");\n/* harmony import */ var _henry_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./henry_button */ \"./logic/henry_button.js\");\n\n\n\nclass Game {\n   constructor(el) {\n      this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el); \n      this.reset = this.start(el);\n   }\n\n   start(el) {\n      let e = document.getElementsByClassName('shell')[0];\n\n      let start = document.createElement(\"button\");\n      let startSound = new _henry_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('./dist/shuffle_sound/Shuffle.m4a');\n      start.appendChild(startSound.audio)\n      start.textContent = \"Reset\";\n      start.className = \"reset figButton\";\n      e.appendChild(start);\n\n      start.addEventListener('click', () => {\n         startSound.audio.play();\n         let won = document.getElementsByClassName('won')[0];\n         won.classList.add('hidden');\n         let old = document.getElementsByClassName('grid')[0];\n         old.innerHTML = \"\";\n         let henry = document.getElementsByClassName('henry')[0];\n         henry.parentNode.removeChild(henry);\n         this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el); \n         let shell = document.getElementsByClassName('grid')[0];\n         shell.classList.remove('hidden');\n      });\n      return startSound;\n   }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./logic/game.js?");

/***/ }),

/***/ "./logic/henry_button.js":
/*!*******************************!*\
  !*** ./logic/henry_button.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Henry {\n   constructor(src) {\n      this.audio = this.sound(src);\n      this.clicked = false;\n      \n   }\n\n   sound(src) {\n      let sound = document.createElement(\"audio\");\n      sound.src = src;\n      sound.setAttribute(\"type\", \"audio/mp4\")\n      sound.setAttribute(\"preload\", \"auto\");\n      sound.setAttribute(\"controls\", \"none\");\n      sound.style.display = \"none\";\n      return sound;\n   }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Henry);\n\n//# sourceURL=webpack:///./logic/henry_button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ \"./logic/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n   const grid = document.getElementsByClassName('grid')[0];\n   const playBtn = document.getElementById('play-btn');\n   const menu = document.getElementsByClassName('start-menu')[0];\n   const rulesBtn = document.getElementById('rules-btn');\n   const rules = document.getElementsByClassName('rules-menu')[0];\n   const closeBtn = document.getElementById('close-btn');\n   const startNoise = document.getElementById('start-noise');\n   const tag = document.getElementsByClassName('title')[0];\n   const shell = document.getElementsByClassName('shell')[0];\n   const player = document.getElementById('player');\n   const mute = document.getElementsByClassName('mute')[0];\n   const unmute = document.getElementsByClassName('unmute')[0];\n\n   const home = document.getElementsByClassName('home')[0];\n   \n\n   home.addEventListener('click', () => {\n      let henry = document.getElementsByClassName('henry')[0];\n      let reset = document.getElementsByClassName('reset')[0];\n      let won = document.getElementsByClassName('won')[0];\n\n      grid.innerHTML = \"\";\n      henry.parentNode.removeChild(henry);\n      reset.parentNode.removeChild(reset);\n      won.classList.add('hidden');\n      shell.classList.add('hidden');\n      menu.classList.remove('hidden');\n   })\n\n   mute.addEventListener('click', () => {\n      mute.classList.add('hidden');\n      unmute.classList.remove('hidden');\n   })\n\n   unmute.addEventListener('click', () => {\n      mute.classList.remove('hidden');\n      unmute.classList.add('hidden');\n   })\n\n   const entry = () => {\n      tag.classList.remove('start');\n      menu.classList.remove('hidden');\n      mute.classList.remove('hidden');\n      player.play();\n      tag.removeEventListener('click', entry);\n   }\n\n   tag.addEventListener('click', entry);\n\n   playBtn.addEventListener('click', () => {\n      const game = new _logic_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](grid)\n      menu.classList.add('hidden');\n      shell.classList.remove('hidden');\n      grid.classList.remove('hidden');\n      startNoise.play();\n   })\n\n   rulesBtn.addEventListener('click', () => {\n      menu.classList.add('hidden');\n      rules.classList.remove('hidden');\n   })\n\n   closeBtn.addEventListener('click', () => {\n      rules.classList.add('hidden');\n      menu.classList.remove('hidden');\n   })\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });