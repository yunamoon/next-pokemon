import Image from "next/image";
import PokemonList from "./components/pokemon-list";
import { getPokemonList } from "./lib/pokemonAPI";

export default async function Home() {
  const getPokemonData = await getPokemonList();
  return (
    <main className="main">
      <h1>Next Pokemon App</h1>
      <p>Next.js + Pokemon API를 활용한 포켓몬 도감입니다.</p>
      <PokemonList pokemonList={getPokemonData} />
    </main>
  );
}
