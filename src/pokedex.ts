var input = require("prompt-sync")();

interface Pokemon {
  name: string;
  id: number;
  english_flavor_text: string;
  how_heavy: number;
  eggs: string[];
  pokedex_entries: any;
}

let pokemons: Pokemon[] = require("./assets/yassin.elberrad.json");
let answer: string = "";

console.log("u kale vader blaze - pokedex hihi xd");

function pokedex() {
  answer = input("Give me a number or name of a pokemon please(q to quit)> ");
  if (answer === "q") {
    console.log("aight yuuuuuuuuuu");
    return answer;
  }

  var search: Pokemon | undefined = isNaN(answer as any)
    ? pokemons.find((pokemon) => pokemon.name === answer)
    : pokemons.find((pokemon) => pokemon.id === Number(answer));

  if (typeof search !== "undefined") {
    return printPokemon(search as Pokemon);
  }

  console.log("Could not find pokimane nigger");
  return answer;
}

function printPokemon(pokemon: Pokemon) {
  let toPrint: Pokemon = {
    name: pokemon.name,
    id: pokemon.id,
    english_flavor_text: pokemon.english_flavor_text,
    how_heavy: pokemon.how_heavy,
    eggs: pokemon.eggs,
    pokedex_entries: pokemon.pokedex_entries,
  };

  return console.log(toPrint);
}

do {
  pokedex();
} while (answer != "q");
