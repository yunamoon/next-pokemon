"use client";

import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonCard from "../pokemon-card/pokemon-card";
import { PokemonProps } from "../../lib/pokemonProps";
import { handleScroll } from "../../util/handleScroll";
import style from "./pokemon-list.module.css";

import { CssTextField } from "./custom/cssTextField";
import { getPokemonData } from "@/lib/getPokemonData";

export default function PokemonList() {
  // 데이터
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([]);

  // 검색
  const [search, setSearch] = useState("");
  const [searchPokemon, setSearchPokemon] = useState<PokemonProps[]>([]);

  // 스크롤 이벤트
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);

  // 데이터 패치
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getPokemonData(30); // 1000개의 포켓몬 데이터를 가져옴
        setPokemonData(fetchedData);
        setSearchPokemon(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 검색
  const searchItem = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    const searchResult = searchItem(pokemonData);
    setSearchPokemon(searchResult);
  }, [search]);

  // 스크롤 이벤트
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
      {searchPokemon ? (
        <div className={style.list}>
          <div className={style.input_wrap}>
            <CssTextField
              className={style.input}
              id="search"
              label="Search"
              variant="standard"
              value={search}
              placeholder="원하는 포켓몬을 검색해보세요! 😊"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={style.card_wrap}>
            {searchPokemon.slice(start, end).map((pokemon: any) => {
              return <PokemonCard key={pokemon.id} {...pokemon} />;
            })}
          </div>
        </div>
      ) : (
        <div className="data-loading">Data loading ... </div>
      )}
    </>
  );
}
