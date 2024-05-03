import PokemonImage from "@/components/pokemon-image";
import { getPokemon, getPokemonList } from "@/lib/pokemonAPI";
import Image from "next/image";
import { koreanName } from "../../lib/pokemonAPI";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

export default async function Detail({ params }: { params: { name: string } }) {
  const { name } = params;
  const pokemonObject = await getPokemon(name);
  console.log(pokemonObject.name);
  const pokemonImage =
    pokemonObject.sprites.other["official-artwork"].front_default;
  const pokemonId = pokemonObject.id - 1;
  return (
    <main className="main">
      <Link href={"/"}>
        <Button size="small">뒤로가기</Button>
      </Link>
      <h1 className="details">Pokemon Details</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <PokemonImage image={pokemonImage} name={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {koreanName[pokemonId]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              영문 이름 : {pokemonObject.name} <br />
              타입 : {pokemonObject.types[0].type.name} <br />키 :{" "}
              {pokemonObject.height}
              <br />
              몸무게 : {pokemonObject.weight}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}
