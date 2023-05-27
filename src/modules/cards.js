import fetchDetailsApi from "./detailsApi";

const Cards = document.querySelector('.cards');
const Popup = document.querySelector('.popup');
const CloseIcon = document.querySelector('.close');

const createCards = (x = 0, NumOfCards = 32 , icon) => {
    // Create Empty Cards 
    for (let i = x; i < x + NumOfCards; i+=1) {
        Cards.innerHTML +=`
        <li class="card">
            <img class="card-img" src="${icon}" alt="Poke Image">
            <h2 class="card-name">Poke Name ${i}</h2>
            <p><span>(0) Likes</span><a>❤️</a></p>
            <button id="show-comments${i}">Comment</button>
        </li>
        `
    }

    // Add Event Listener To Comment Buttons 
    Cards.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.id.indexOf('show-comments') === 0) {
            const index = e.target.id.replace('show-comments', '');
            Popup.style.display = 'flex';
            fetchDetailsApi(parseInt(index)+1);
        }
    })

    // Add Event Listener To Close Icon 
    CloseIcon.addEventListener('click', () => {
        Popup.style.display = 'none';
    });
}

export default createCards;
