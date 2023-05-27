const fetchNamesApi = async (x) => {
    // Fetching Pokemon Api For Names 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${x}&offset=0/`);
    const json = await response.json();
    const PokeNames = [];
    json.results.forEach((e,i) => {
        PokeNames[i] = e.name;
    });;

    // Fill Cards With Names & Images
    const CardName = document.querySelectorAll('.card-name');
    const CardImg = document.querySelectorAll('.card-img')
    PokeNames.forEach((e,i) => {
        CardName[i].innerHTML = e;
        CardImg[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`;
    });


}

export default fetchNamesApi;