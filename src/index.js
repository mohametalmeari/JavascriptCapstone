import './style.css';
import icon from './images/pokeball-icon.png';
import createCards from './modules/cards.js';
import fetchNamesApi from './modules/namesApi.js';

const BallIcon = document.getElementById('icon');
BallIcon.src = icon;
const NumOfCards = 32;

createCards(0, NumOfCards, icon);
fetchNamesApi(NumOfCards);

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


const homeLink = document.getElementById('home-link');
const contactLink = document.getElementById('contact-link');
const aboutLink = document.getElementById('about-link');

const homePage = document.getElementById('home');
const contactPage = document.getElementById('contact');
const aboutPage = document.getElementById('about');

homeLink.addEventListener('click', ()=>{
    homePage.style.display = 'block';
    contactPage.style.display = 'none';
    aboutPage.style.display = 'none';
    homeLink.classList = 'active';
    contactLink.classList = '';
    aboutLink.classList = '';
})
contactLink.addEventListener('click', ()=>{
    homePage.style.display = 'none';
    contactPage.style.display = 'block';
    aboutPage.style.display = 'none';
    homeLink.classList = '';
    contactLink.classList = 'active';
    aboutLink.classList = '';
})
aboutLink.addEventListener('click', ()=>{
    homePage.style.display = 'none';
    contactPage.style.display = 'none';
    aboutPage.style.display = 'block';
    homeLink.classList = '';
    contactLink.classList = '';
    aboutLink.classList = 'active';
})
