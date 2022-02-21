async function pokedex() {
    let pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    let data = await pokedex.json();
    //console.log(data)
    data.results.forEach(pokemon => {
        //console.log(pokemon);
        let pokemonName = pokemon.name;
        //console.log(pokemonName);
        let pokemonUrl = pokemon.url;
        //console.log(pokemonUrl);
        grabPokemon(pokemonUrl)
    });
}

async function grabPokemon(url){
    const pokeDiv = document.createElement("div");
    let pokename = document.createElement("h3");
    let pokeNumber = document.createElement("p");
    pokeNumber.setAttribute("class", "dex-number")
    let pokeimage = document.createElement("img");
    let pokeTypeDiv = document.createElement("div");
    let pokeType = document.createElement("p")

    pokeDiv.setAttribute("class", "pokemon")
    document.body.appendChild(pokeDiv)
    pokeDiv.appendChild(pokename)
    pokeDiv.appendChild(pokeNumber)
    pokeDiv.appendChild(pokeimage)
    pokeDiv.appendChild(pokeTypeDiv)
    pokeTypeDiv.appendChild(pokeType);

    let pokemon = await fetch(url);
    let data = await pokemon.json();
    console.log(data);
    pokeNumber.innerText = `#${data.id}`;
    const pokeName = data.name;
    pokename.innerText = pokeName;
    pokeDiv.setAttribute("id", pokeName)
    //console.log(pokeName);
    pokeimage.src = data.sprites.front_default;
    data.types.forEach(type=>{
        pokeType.innerText = type.type.name;
        console.log(type.type.name)
    })
}

pokedex();
