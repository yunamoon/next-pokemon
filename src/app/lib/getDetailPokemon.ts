import { createPokemon } from "./getParsing";
import { PokemonProps } from "./pokemonProps";

const POKEMON_API = "https://pokeapi.co/api/v2";

export async function getDetailPokemon(name: string) {
  try {
    const pokemonUrl = `${POKEMON_API}/pokemon/${name}`;
    const pokemonResponse = await fetch(pokemonUrl);
    if (!pokemonResponse.ok) {
      throw new Error(
        ` ${name}의 데이터를 가지고 오는데 실패했습니다.: ${pokemonResponse.status}`
      );
    }
    const pokemonData = await pokemonResponse.json();

    const speciesUrl = `${POKEMON_API}/pokemon-species/${pokemonData.id}`;
    const speciesResponse = await fetch(speciesUrl);
    if (!speciesResponse.ok) {
      throw new Error(
        `${name}의 데이터를 가지고 오는데 실패했습니다.: ${speciesResponse.status}`
      );
    }
    const speciesData = await speciesResponse.json();

    return createPokemon(speciesData, pokemonData);
  } catch (error) {
    console.error("데이터 패치 도중 에러가 발생했습니다.", error);
    throw error;
  }
}
