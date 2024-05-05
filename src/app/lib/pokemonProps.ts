export interface PokemonProps {
  id: string;
  name: string;
  enName: string;
  color: string;
  egg_groups: string;
  description: string;
  genera: string;
  generation: string;
  growth_rate: string;
  habitat: string;
  image: string;
  ability: string;
  height: string;
  weight: string;
  types: any;
}

export interface PokemonListProps {
  pokemonList: [];
}
