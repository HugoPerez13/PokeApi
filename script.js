const ol$$ = document.querySelector("#pokedex");


function arrayPokemon() {
    const todosPokemon = [];

    for (let i = 1; i <= 151; i++) {
        const pokeApi = "https://pokeapi.co/api/v2/pokemon/" + i;
        todosPokemon.push(fetch(pokeApi).then((res) => res.json()));
    }

    Promise.all(todosPokemon).then((results) => {
        print(results);
    });
}

const print = (results) => {
    for (const poke of results) {
        const div2$$ =document.createElement("div");
        div2$$.innerHTML = 
        `<h2> ${poke.name}</h2>
        <img  class="fotocarta" src="${poke.sprites.other.dream_world.front_default}"/>
        <p>nº ${poke.id}</p> 
        <p>experiencia: ${poke.base_experience}</p>
        <p>altura: ${poke.height}</p>
        <p>peso: ${poke.weight}</p>` ;
        ol$$.appendChild(div2$$);



    }
}
arrayPokemon();




 


  

