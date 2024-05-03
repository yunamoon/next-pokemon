"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonCard from "./pokemon-card";

interface PokemonListProps {
  pokemonList: any;
}

export default function PokemonList({ pokemonList }: PokemonListProps) {
  const [search, setSearch] = useState("");
  const [searchPokemon, setSearchPokemon] = useState([]);

  // const searchItem = (pokemonList: any) => {
  //   return pokemonList.filter((pokemon: any) =>
  //     pokemon.koreanName.toLowerCase().includes(search.toLowerCase())
  //   );
  // };

  // useEffect(() => {
  //   const searchResult = searchItem(pokemonList);
  //   setSearchPokemon(searchResult);
  // }, [search]);

  return (
    <>
      <div className="list">
        <TextField
          className="input"
          id="search"
          label="Search"
          variant="standard"
          value={search}
          placeholder="원하는 포켓몬을 검색해보세요!😊"
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2>Pokemon Collection</h2>
        <div className="card_wrap">
          {pokemonList.map((pokemon: any) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                koreanName={pokemon.koreanName}
                image={pokemon.image}
                id={pokemon.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
