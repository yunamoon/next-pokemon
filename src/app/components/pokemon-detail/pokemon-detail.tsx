"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PokemonCard from "../pokemon-card/pokemon-card";
import { getDetailPokemon } from "@/lib/getDetailPokemon";
import style from "./pokemon-detail.module.css";
import { PokemonProps } from "../../lib/pokemonProps";

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

  console.log(pokemonData);

  return (
    <>
      {pokemonData ? (
        <div className={style.detail}>
          {/* 
    

      General : 
      서식지 : habitat 
      군 : egg_groups
      일반분류: genera
      세대 : generation 
      성장 속도 :  growth_rate 

      Physical : 
      키 : height
      몸무게 :  weight

      Special note
      능력 :  ability 
      특성 :   types 
      설명 :  description */}

          <PokemonCard {...pokemonData} />

          <div className={style.contetns}>
            <table className={style.table}>
              <tr>
                <th colSpan={2}>General</th>
                <th colSpan={2}>Physical</th>
              </tr>

              <tr>
                <td>일반분류</td>
                <td>{pokemonData.genera}</td>
                <td>키</td>
                <td>{pokemonData.height} cm</td>
              </tr>

              <tr>
                <td>서식지</td>
                <td>{pokemonData.habitat}</td>
                <td>몸무게</td>
                <td>{pokemonData.weight} g</td>
              </tr>
              <tr>
                <td>군</td>
                <td>{pokemonData.egg_groups}</td>
                <td>성장 속도</td>
                <td>{pokemonData.growth_rate}</td>
              </tr>

              <tr>
                <th colSpan={2}>Special note</th>
              </tr>
              <tr>
                <td>능력</td>
                <td>{pokemonData.weight}</td>
              </tr>
              <tr>
                <td>특성</td>
                <td>
                  {pokemonData.types?.map((item: any, index: string) => {
                    return <p key={index}>{item.type.name}</p>;
                  })}
                </td>
              </tr>
              <tr>
                <td>설명</td>
                <td colSpan={4}>
                  {pokemonData.description.split("\n").join("")}
                </td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
