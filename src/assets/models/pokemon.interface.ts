interface indexPokemon {
  id: number;
  name: string;
  href: string;
}

interface Pokemon {
  name: string;
  id: number;
  english_flavor_text: string;
  how_heavy: number;
  eggs: string[];
  pokedex_entries: number[];
}

export interface indexDetailPokemon {
  name: string;
  id: number;
  generation: number;
  shape: string;
  family: Family;
  english_flavor_text: string;
  types: Types;
  pokedex_entries: PokedexEntries;
  how_heavy: number;
  location: string;
  eggs: Eggs;
  techniques: Techniques;
  variations: Variations;
}

export interface Family {
  href: string;
}

export interface Types {
  href: string;
}

export interface PokedexEntries {
  href: string;
}

export interface Eggs {
  href: string;
}

export interface Techniques {
  href: string;
}

export interface Variations {
  href: string;
}

export { indexPokemon, Pokemon };
