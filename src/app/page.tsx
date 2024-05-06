//test
import PokemonList from "./components/pokemon-list/pokemon-list";
import style from "./home.module.css";
import Header from "./components/header/header";

import { PokemonListProps, PokemonProps } from "./lib/pokemonProps";

export default async function Home() {
  return (
    <div className={style.main}>
      <h1 className={style.title}>Next Pokemon App</h1>
      <p className={style.comment}>
        Next.js + Pokemon API를 활용한 포켓몬 도감입니다.
      </p>
      <PokemonList />
    </div>
  );
}
