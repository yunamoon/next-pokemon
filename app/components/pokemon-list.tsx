"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonCard from "./pokemon-card";
import { koreanName } from "../lib/pokemonAPI";
import { PokemonListProps } from "../lib/pokemonProps";
import { handleScroll } from "@/util/handleScroll";

export default function PokemonList({ pokemonList }: PokemonListProps) {
  const [search, setSearch] = useState("");
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const [searchPokemon, setSearchPokemon] =
    useState<PokemonListProps[]>(pokemonList);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);

  const searchItem = (pokemonList: any) => {
    return pokemonList?.filter((pokemon: any) =>
      pokemon.koreanName?.includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    const searchResult = searchItem(pokemonList);
    setSearchPokemon(searchResult);
  }, [search]);

  const handleEndPoint = () => {
    const scroll = handleScroll();

    if (scroll) {
      setEnd((prevEnd) => prevEnd + 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleEndPoint);
    return () => {
      window.removeEventListener("scroll", handleEndPoint);
    };
  }, []);

  return (
    <>
      {pokemonList ? (
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
            {searchPokemon.slice(start, end).map((pokemon: any) => {
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
      ) : (
        <div className="data-loading">Data loading ... </div>
      )}
    </>
  );
}
