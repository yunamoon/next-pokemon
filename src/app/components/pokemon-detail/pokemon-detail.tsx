"use client";
import { useState, useEffect } from "react";
import "./pokemon-detail.module.css";
import { useParams } from "next/navigation";
import PokemonCard from "../pokemon-card/pokemon-card";
import { PokemonProps } from "../../lib/pokemonProps";
import { getDetailPokemon } from "@/lib/getDetailPokemon";
import testCard from "../pokemon-card/pokemon-detail-card";
import PokemonDetailCard from "../pokemon-card/pokemon-detail-card";

export default function PokemonDetail() {
  const [pokemonData, setPokemonData] = useState<any>();
  const params = useParams<{ name: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getDetailPokemon(params.name); // 1000개의 포켓몬 데이터를 가져옴
        setPokemonData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [params]);

  return (
    <div>
      {/* ability: "overgrow"
      color: "green" 
      description: "꽃봉오리가 등에 붙어 있으며\n양분을 흡수해가면\n커다란 꽃이 핀다고 한다."
      egg_groups: "plant"
      enName: "ivysaur"
      genera: "씨앗포켓몬"
      generation : "generation-i"
      growth_rate : "medium-slow"
      habitat: "grassland"
      height: 7
      id: 2 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      name:  "이상해풀"
      types: (2) [{…}, {…}]
      weight: 69*/}

      <PokemonDetailCard {...pokemonData} />
    </div>
  );
}
