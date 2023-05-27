const createCards = () => {
    const Cards = document.querySelector('.cards');
    for (let i = 0; i < 30; i+=1) {
        Cards.innerHTML +=`
        <li>
            <img src="./bf883b3c317f5d16fe00.png" alt="Poke Image">
            <h2>Poke Name</h2>
            <p><span>(0) Likes</span><a>❤️</a></p>
            <button class="show-comments">Comment</button>
        </li>
        `
    }
}