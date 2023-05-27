const PokeName = document.querySelector('.poke-name');
const PokeFeatures = document.querySelector('.features');


const fetchDetailsApi = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const json = await response.json();
    PokeName.innerHTML = json.name;
    let abilities =""
    json.abilities.forEach(e => {
        abilities += e.ability.name + ", ";
    });
    abilities = abilities.slice(0,-2);
    let moves = ""
    for (let i = 0; i < 3; i+=1) {
        moves = json.moves[i].move.name + ", ";
    }
    moves=moves.slice(0,-2);
    PokeFeatures.innerHTML = `
    <li>Height: ${json.height}</li>
    <li>Weight: ${json.weight}</li>
    <li>Base Experience: ${json.base_experience}</li>
    <li>Abilities: ${abilities}</li>
    <li>Moves: ${moves}</li>
    `;

    const PokeImg = document.querySelector('.poke-img');
    PokeImg.src = json.sprites.other['official-artwork'].front_default

}

export default fetchDetailsApi;