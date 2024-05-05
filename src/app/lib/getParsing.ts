import { PokemonProps } from "./pokemonProps";

export function createPokemon(speciesData: any, pokemonData: any) {
  const pokemon: PokemonProps = {
    id: speciesData.id,
    name: speciesData.names[2]?.name || "x",
    enName: speciesData.name || "x",
    color: speciesData.color?.name || "x",
    egg_groups: speciesData.egg_groups?.[1]?.name || "x",
    description: speciesData.flavor_text_entries?.[23]?.flavor_text || "x",
    genera: speciesData.genera?.[1]?.genus || "x",
    generation: speciesData.generation?.name || "x",
    growth_rate: speciesData.growth_rate?.name || "x",
    habitat: speciesData.habitat?.name || "x",
    image: pokemonData.sprites.other["official-artwork"].front_default || "x",
    ability: pokemonData.abilities[0].ability.name || "x",
    height: pokemonData.height || "x",
    weight: pokemonData.weight || "x",
    types: pokemonData.types || "x",
  };

  return pokemon;
}
