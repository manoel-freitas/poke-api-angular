
export interface PokemonList {
  count:    number;
  next:     string;
  previous: null;
  results:  Pokes[];
}

export interface Poke {
  name: string;
  image: string;
  id: number;
  detailsUrl: string;
}

export interface Pokes {
  name: string;
  url:  string;
}
