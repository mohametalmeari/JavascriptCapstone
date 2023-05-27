<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import './style.css';
=======
>>>>>>> screens-feature
import './style.css';
import icon from './images/pokeball-icon.png';
import createCards from './modules/cards.js';
import fetchNamesApi from './modules/namesApi.js';

const BallIcon = document.getElementById('icon');
BallIcon.src = icon;
const NumOfCards = 32;

createCards(0, NumOfCards, icon);
fetchNamesApi(NumOfCards);
<<<<<<< HEAD
=======

const XMenu = document.querySelector('.x-menu');
const Menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon')
XMenu.addEventListener('click', () =>{
    Menu.style.display='none';
    document.body.style.overflowY = 'scroll';
});

menuIcon.addEventListener('click', () => {
    Menu.style.display='flex';
    document.body.style.overflowY = 'hidden';
})
>>>>>>> Stashed changes
>>>>>>> screens-feature
