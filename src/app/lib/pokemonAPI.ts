const POKEMON_API = "https://pokeapi.co/api/v2";
import { PokemonProps } from "./pokemonProps";
export const koreanName: any = [];

export async function getPokemonData(number: number) {
  const pokemonList: PokemonProps[] = [];

  for (let i = 0; i < number; i++) {
    const speciesUrl = `${POKEMON_API}/pokemon-species/${i + 1}`;
    const speciesResponse = await fetch(speciesUrl);

    if (!speciesResponse.ok) {
      console.error(
        `Failed to fetch data for Pokemon ${i + 1}: ${speciesResponse.status}`
      );
      continue; // 다음 순번의 포켓몬으로 넘어감
    }

    const speciesData = await speciesResponse.json();

    const pokemonUrl = `${POKEMON_API}/pokemon/${speciesData.name}`;
    const pokemonResponse = await fetch(pokemonUrl);

    if (!pokemonResponse.ok) {
      console.error(
        `Failed to fetch data for Pokemon ${speciesData.name}: ${pokemonResponse.status}`
      );
      continue; // 다음 순번의 포켓몬으로 넘어감
    }

    const pokemonData = await pokemonResponse.json();

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

    pokemonList.push(pokemon);
  }

  return pokemonList;
}

export async function getPokemonList(number: number) {
  const response = await fetch(POKEMON_API + `pokemon/bulbasaur`);
  const data = await response.json();

  console.log(data);
  const loadPokemon = data.results.map((pokemon: any, index: any) => {
    return {
      id: index + 1,
      name: pokemon.name,
      koreanName: koreanName[index],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });

  return loadPokemon;
}

// getPokemon  = 검색어와 일치하는 포켓몬 1
export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + `pokemon/${name}`);
  const data = await response.json();
  return data;
}

export async function getPokemonImage(name: string) {
  const response = await fetch(POKEMON_API + `pokemon/${name}`);
  const data = await response.json();
  return data;
}
