import { createPokemon } from "./getParsing";
import { PokemonProps } from "./pokemonProps";

const POKEMON_API = "https://pokeapi.co/api/v2";

export async function getPokemonData(start: number, end: number) {
  const pokemonList: PokemonProps[] = [];

  try {
    for (let i = start; i < end; i++) {
      const speciesUrl = `${POKEMON_API}/pokemon-species/${i + 1}`;
      const speciesResponse = await fetch(speciesUrl);

      if (!speciesResponse.ok) {
        console.error(
          ` ${i + 1}의 데이터를 가지고 오는데 실패했습니다.: ${
            speciesResponse.status
          }`
        );
        continue;
      }
      const speciesData = await speciesResponse.json();

      const pokemonUrl = `${POKEMON_API}/pokemon/${speciesData.name}`;
      const pokemonResponse = await fetch(pokemonUrl);
      if (!pokemonResponse.ok) {
        console.error(
          `${speciesData.name}의 데이터를 가지고 오는데 실패했습니다.: ${pokemonResponse.status}`
        );
        continue;
      }

      const pokemonData = await pokemonResponse.json();

      const data = createPokemon(speciesData, pokemonData);
      pokemonList.push(data);
    }
  } catch (error) {
    console.error("데이터 패치 도중 에러가 발생했습니다.:", error);
  }

  return pokemonList;
}
