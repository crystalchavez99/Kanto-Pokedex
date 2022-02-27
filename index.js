function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => viewAllPokemon(allpokemon))
}
function viewAllPokemon(pokemonData) {
    pokemonData.results.forEach(pokemon => {
        fetchPokemonData(pokemon);
    });
};

function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    //console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(poke =>{
                let pokemonList = document.getElementById("pokemonList");
                let pokemonBox = document.createElement("div");
                pokemonBox.setAttribute("class", "pokemon");

                let pokemonName = document.createElement("h4");
                pokemonName.setAttribute("id", poke.name);
                pokemonName.innerText = poke.name;

                let pokemonImage = document.createElement("img");
                pokemonImage.src = poke.sprites.front_default;


                let pokemonNumber = document.createElement("p");
                pokemonNumber.innerText = `#${poke.id}`;
                let pokemonTypes = document.createElement("ul");
                pokemonTypes.setAttribute("class", "types");

                setType(poke.types, pokemonTypes);

                pokemonBox.append(pokemonName);
                pokemonBox.append(pokemonNumber);
                pokemonBox.append(pokemonImage)
                pokemonBox.append(pokemonTypes);
                pokemonList.appendChild(pokemonBox);
        })
}

// didnt work out as a function so had to implement within fetch/then promise
// function pokemon(data) {
//     let pokemonList = document.getElementById("pokemonList");
//     let pokemonBox = document.createElement("div");
//     pokemonBox.setAttribute("class", "pokemon");
//     let pokemonName = document.createElement("h4");
//     pokemonName.setAttribute("id", data.name);
//     pokemonName.innerText = data.name;
//     let pokemonNumber = document.createElement("p");
//     pokemonNumber.innerText = `#${data.id}`;
//     let pokemonTypes = document.createElement("ul");
//     pokemonTypes.setAttribute("class", "types");

//     setType(data.types, pokemonTypes);

//     pokemonBox.append(pokemonName);
//     pokemonBox.append(pokemonNumber);
//     pokemonBox.append(pokemonTypes);
//     pokemonList.appendChild(pokemonBox);
// }

function setType(types, list) {
    types.forEach(type => {
        let typeItem = document.createElement("li");
        typeItem.innerText = type.type.name;
        typeItem.setAttribute("class",type.type.name)
        list.append(typeItem);
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    fetchPokemon();
})
