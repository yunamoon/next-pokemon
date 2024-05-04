const POKEMON_API = "https://pokeapi.co/api/v2/";
const fetchNum: any = 1000;
export const koreanName: any = [];

export async function getKoreanName(number: number) {
  const urls = [];

  for (let i = 0; i < fetchNum; i++) {
    let url = `${POKEMON_API}/pokemon-species/${i + 1}`;
    urls.push(url);
  }

  let requests = urls.map((url) => fetch(url));

  return Promise.all(requests)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((results) => {
      for (let result of results) {
        koreanName.push(result.names[2].name);
      }
      return getPokemonList(number);
    });
}

export async function getPokemonList(number: number) {
  const response = await fetch(
    POKEMON_API + `pokemon?limit=${number}&offset=0`
  );
  const data = await response.json();
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
