const PokeImg = document.querySelector('.poke-img');
const PokeName = document.querySelector('.poke-name');
const PokeFeatures = document.querySelector('.features');

const fetchDetailsApi = async (index, icon) => {
  PokeName.innerHTML = 'Poké Name';
  PokeFeatures.innerHTML = `
    <li>Height: ?</li>
    <li>Weight: ?</li>
    <li>Base Experience: ?</li>
    <li>Abilities: ?</li>
    <li>Moves: ?</li>
    `;
  PokeImg.src = icon;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const json = await response.json();
  let abilities = '';
  json.abilities.forEach((e) => {
    abilities += `${e.ability.name}, `;
  });
  abilities = abilities.slice(0, -2);
  let moves = '';
  for (let i = 0; i < 3; i += 1) {
    moves = `${json.moves[i].move.name}, `;
  }
  moves = moves.slice(0, -2);
  PokeName.innerHTML = json.name;
  PokeFeatures.innerHTML = `
    <li>Height: ${json.height / 10} m</li>
    <li>Weight: ${json.weight / 10} kg</li>
    <li>Base Experience: ${json.base_experience}</li>
    <li>Abilities: ${abilities}</li>
    <li>Moves: ${moves}</li>
    `;
  PokeImg.src = json.sprites.other['official-artwork'].front_default;
};

export default fetchDetailsApi;