import fetchDetailsApi from "./detailsApi";
import {addComment, getComments, setIndex} from './comments';
import {addLike, getLikes} from "./likes";

const Cards = document.querySelector('.cards');
const Popup = document.querySelector('.popup');
const CloseIcon = document.querySelector('.close');
const CommentForm =document.querySelector('.comment-form');
const userName = document.getElementById('user-name');
const userComment = document.getElementById('user-comment');
const countLikes = (num) => num + 1;

const createCards = (x = 0, NumOfCards = 32 , icon) => {
    // Create Empty Cards 
    for (let i = x; i < x + NumOfCards; i+=1) {
        Cards.innerHTML +=`
        <li class="card">
            <img class="card-img" src="${icon}" alt="Poke Image">
            <h2 class="card-name">Poke Name ${i}</h2>
            <p><span>(<span class="likes-num">0</span>) Likes</span><a id="like${i}">❤️</a></p>
            <button id="show-comments${i}">Comment</button>
        </li>
        `
    }

    // Add Event Listener To Comment and Like Buttons 
    Cards.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.id.indexOf('show-comments') === 0) {
            document.body.style.overflowY  = 'hidden';
            const index = e.target.id.replace('show-comments', '');
            Popup.style.display = 'flex';
            fetchDetailsApi(parseInt(index)+1, icon);
            setIndex(index);
            getComments();
        }
        if (e.target.tagName === 'A' && e.target.id.indexOf('like') === 0) {
            const index = e.target.id.replace('like', '');
            if (addLike(index)) {
                const likesNum = document.querySelectorAll('.likes-num');
                const LikesCount = countLikes(parseInt(likesNum[index].innerHTML));
                likesNum[index].innerHTML = LikesCount;
            }
        }
    })

    // Add Event Listener To Close Icon 
    CloseIcon.addEventListener('click', () => {
        Popup.style.display = 'none';
        document.body.style.overflowY  = 'scroll';
        userName.value='';
        userComment.value=''
    });
}

export default createCards;
