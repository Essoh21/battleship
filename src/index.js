import style from './style.css';
import html from './index.html';
import createPlayGround from './playGround.js';

const userGameBoard = document
    .querySelector('.user-gameboard-container');
userGameBoard.innerHTML = createPlayGround();