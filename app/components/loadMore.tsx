"use client";
import { getKoreanName } from "@/lib/pokemonAPI";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PokemonList from "./pokemon-list";
import { PokemonListProps } from "../lib/pokemonProps";

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<PokemonListProps[]>([]);
  useEffect(() => {
    // getKoreanName(10).then((response) => {
    //   setData([...data, ...response]);
    // });
  }, [inView, data]);
  return (
    <>
      <PokemonList pokemonList={data} />
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
