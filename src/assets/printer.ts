import { Pokemon } from "./models/pokemon.interface";

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
export { printPokemon };
