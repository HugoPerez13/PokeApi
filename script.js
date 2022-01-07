const ol$$ = document.querySelector("#pokedex");
const todosPokemon = [];

const buttom = document.querySelector(".botonBuscar");
const imput = document.querySelector(".textobuscar");

function arrayPokemon() {
  for (let i = 1; i <= 151; i++) {
    const pokeApi = "https://pokeapi.co/api/v2/pokemon/" + i;
    todosPokemon.push(fetch(pokeApi).then((res) => res.json()));
  }

  Promise.all(todosPokemon).then((results) => {
    print(results);
    buttom.addEventListener("click", () => buscar(results));
  });
}


const print = (results) => {
    ol$$.innerHTML="";
  for (const poke of results) {
    const div2$$ = document.createElement("div");
    div2$$.innerHTML = `<h2> ${poke.name}</h2>
        <img  class="fotocarta" src="${poke.sprites.other.dream_world.front_default}"/>
        <p>nº ${poke.id}</p> 
        <p>experiencia: ${poke.base_experience}</p>
        <p>altura: ${poke.height}</p>
        <p>peso: ${poke.weight}</p>`;
    ol$$.appendChild(div2$$);
  }
};
arrayPokemon();

//531968465496

const buscar = (results) => {
  const cartuca =document.querySelector(".cartuca");
    cartuca.innerHTML="";
    console.log(imput.value.toLowerCase());
  for (const result of results) {
    if (result.name === imput.value.toLowerCase()) {
        const div$$ = document.createElement("div");
        div$$.classList.add("fotoencontrada")
        div$$.innerHTML = `<h2> ${result.name}</h2>
        <img  class="fotocarta" src="${result.sprites.other.dream_world.front_default}"/>
        <p>nº ${result.id}</p> 
        <p>experiencia: ${result.base_experience}</p>
        <p>altura: ${result.height}</p>
        <p>peso: ${result.weight}</p>`;
        cartuca.appendChild(div$$)



    }
  }
};
