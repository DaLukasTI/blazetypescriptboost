const readline = require("readline-sync");

interface Pokemon {
  name: string;
  id: number;
  english_flavor_text: string;
  how_heavy: number;
  eggs: string[];
  pokedex_entries: any;
}

let pokemons: Pokemon[] = require("./assets/yassin.elberrad.json");
let answer: string | number = "";

function pokedex() {
  answer = readline.question(
    "Give me a number or name of a pokemon please(q to quit)\n> "
  );

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

  console.log("Could not find pokemon nigger");
  return answer;
}

function printPokemon(pokemon: Pokemon) {
  console.log("NAAM: " + pokemon.name);
  console.log("ID: " + pokemon.id);
  console.log(
    "Omschrijving: " + pokemon.english_flavor_text.replace("\f", " ")
  );
  console.log("Gewicht: " + pokemon.how_heavy);
  console.log("Eiertypes:");
  pokemon.eggs.forEach((element) => {
    console.log("- " + element);
  });
  console.log("Pokédexnummers:");
  for (let key in pokemon.pokedex_entries) {
    console.log("- " + key + ": " + pokemon.pokedex_entries[key]);
  }
  console.log("\n");
}

do {
  pokedex();
} while (answer != "q");
