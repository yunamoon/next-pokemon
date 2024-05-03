"use client";

import Image from "next/image";

export default function PokemonImage({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <Image
      src={image}
      width="200"
      height="200"
      alt={`Image of ${name}`}
      priority
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
