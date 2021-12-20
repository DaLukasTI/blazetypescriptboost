const axios = require("axios");

import {
  indexDetailPokemon,
  indexPokemon,
  Pokemon,
} from "./assets/models/pokemon.interface";

async function getAllPokemons() {
  let result = await axios.request(
    "https://webprogrammeren-2021.herokuapp.com/yassin.elberrad/pokemon"
  );
  return result.data;
}

async function searchCollection(
  pokemons: indexPokemon[],
  name: string | number
) {
  var search: indexPokemon | undefined = isNaN(name as any)
    ? pokemons.find((pokemon) => pokemon.name === name)
    : pokemons.find((pokemon) => pokemon.id === Number(name));
  return search;
}

async function getDetailByPokemon(pokemon: indexPokemon) {
  let newPokemon = {} as Pokemon;
  let result = {} as indexDetailPokemon;
  await axios.request(pokemon.href).then((response: any) => {
    return (result = response.data);
  });
  newPokemon.name = result.name;
  newPokemon.id = result.id;
  newPokemon.english_flavor_text = result.english_flavor_text.replace(
    "\f",
    " "
  );
  newPokemon.eggs = await getEggs(result.eggs.href);
  newPokemon.pokedex_entries = await getPokedex(result.pokedex_entries.href);
  return newPokemon;
}

async function getEggs(url: string): Promise<string[]> {
  return await axios.request(url).then((response: any) => {
    return response.data;
  });
}
async function getPokedex(url: string): Promise<number[]> {
  return await axios.request(url).then((response: any) => {
    return response.data;
  });
}

export { getAllPokemons, searchCollection, getDetailByPokemon };
