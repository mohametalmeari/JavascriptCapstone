import './style.css';
import icon from './images/pokeball-icon.png'
const BallIcon = document.getElementById('icon');
BallIcon.src = icon;

const CloseIcon = document.querySelector('.close');
const Popup = document.querySelector('.popup');
CloseIcon.addEventListener('click', () => {
    Popup.style.display = 'none';
})