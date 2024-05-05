import PokemonImage from "../../components/pokemon-image";
import { getPokemon, getPokemonList } from "../../lib/pokemonAPI";
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
  // const pokemonObject = await getPokemon(name);
  // console.log(pokemonObject.name);
  // const pokemonImage =
  //   pokemonObject.sprites.other["official-artwork"].front_default;
  // const pokemonId = pokemonObject.id - 1;
  return (
    <div className="main">
      <h1 className="details">Pokemon Details</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <PokemonImage image={""} name={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              영문 이름 : {""} <br />
              타입 : {""} <br />키 : {""}
              <br />
              몸무게 : {""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
