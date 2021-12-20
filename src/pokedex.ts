const readline = require("readline-sync");
import * as apiUtils from "./apiUtil";
import { indexPokemon, Pokemon } from "./assets/models/pokemon.interface";
import { printPokemon } from "./assets/printer";

let answer: string | number = "";

async function loop() {
  do {
    let pokemons: indexPokemon[] = await apiUtils.getAllPokemons();
    answer = readline.question("Welk pokemon wil je bekijken?(q to quit) \n>");
    if (answer === "q") {
      console.log("U pressed q to quit, c ya later");
      break;
    }

    let search: indexPokemon | undefined = await apiUtils.searchCollection(
      pokemons,
      answer
    );

    if (typeof search !== "undefined") {
      let finalPokemon: Pokemon = await apiUtils.getDetailByPokemon(search);
      printPokemon(finalPokemon);
    } else {
      console.log("No pokemon found for the search: " + answer);
    }
  } while (answer != "q");
}

loop();
export {};
