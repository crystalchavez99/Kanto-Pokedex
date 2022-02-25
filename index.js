window.addEventListener("DOMContentLoaded", ()=>{
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
        const pokeTypeDiv = document.createElement("ul");
        let pokeType;

        pokeDiv.setAttribute("class", "pokemon")
        pokeTypeDiv.setAttribute("class","type")
        document.body.appendChild(pokeDiv)
        pokeDiv.appendChild(pokename)
        pokeDiv.appendChild(pokeNumber)
        pokeDiv.appendChild(pokeimage)
        pokeDiv.appendChild(pokeTypeDiv)


        let pokemon = await fetch(url);
        let data = await pokemon.json();
        //console.log(data);
        pokeNumber.innerText = `#${data.id}`;
        const pokeName = data.name;
        pokename.innerText = pokeName;
        pokeDiv.setAttribute("id", pokeName)
        //console.log(pokeName);
        pokeimage.src = data.sprites.front_default;

        //console.log(data.types);
        let arrayType = data.types;
        for(let i = 0; i < arrayType.length; i++){
            let type = arrayType[i].type.name;
            //console.log(type);
            pokeType = document.createElement("li");
            pokeType.setAttribute("class",type)
            pokeType.innerText = type;
            pokeTypeDiv.appendChild(pokeType)
        }




    }

    pokedex();


})
