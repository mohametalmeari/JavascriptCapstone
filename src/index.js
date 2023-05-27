import './style.css';
import icon from './images/pokeball-icon.png';
import createCards from './modules/cards.js';
import fetchNamesApi from './modules/namesApi.js';

const BallIcon = document.getElementById('icon');
BallIcon.src = icon;
const NumOfCards = 32;

createCards(0, NumOfCards, icon);
fetchNamesApi(NumOfCards);
