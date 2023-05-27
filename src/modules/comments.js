import getGameId from './gamaId.js';

const CommentForm = document.querySelector('.comment-form');
const userName = document.getElementById('user-name');
const userComment = document.getElementById('user-comment');
const commentsList = document.querySelector('.comments-list');
const commentsNum = document.querySelector('.comments-num');
let index = 0;
const setIndex = (x) => {
  index = x;
};

const countComment = (num) => num + 1;

// Get Comments From API & Create List
const getComments = async () => {
  commentsList.innerHTML = '';
  commentsNum.innerHTML = 0;
  const appId = await getGameId(false);
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${index}`;
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    let CommentsCount = 0;
    data.reverse().forEach((e) => {
      commentsList.innerHTML += `
            <li> [${e.creation_date}] ${e.username}: ${e.comment}
            `;
      CommentsCount = countComment(CommentsCount);
    });
    commentsNum.innerHTML = CommentsCount;
  }
};

// Add EvetListener For Commenting
CommentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const appId = await getGameId(false);
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
  const data = {
    item_id: index.toString(),
    username: userName.value,
    comment: userComment.value,
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 201) {
    getComments();
  }
  userName.value = '';
  userComment.value = '';
});

export { getComments, setIndex };