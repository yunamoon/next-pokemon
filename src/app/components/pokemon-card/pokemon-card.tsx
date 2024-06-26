import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./pokemon-card.module.css";
import { PokemonProps } from "../../lib/pokemonProps";
import { getColorCard } from "./custom/getColorCard";

export default function PokemonCard({ ...pokemonData }: PokemonProps) {
  return (
    <Link className={style.link} href={`/detail/${pokemonData.enName}`}>
      <Card
        sx={{ maxWidth: 345 }}
        className={`${style.card} ${getColorCard(pokemonData.color)}`}
      >
        <Typography className={style.title} variant="h5" component="div">
          {pokemonData.name}
        </Typography>
        <p className={style.sub}> {pokemonData.enName}</p>
        <CardMedia
          component="img"
          alt={`${pokemonData.name} img`}
          image={pokemonData.image}
          className="card_img"
        />
        <CardContent className={style.content}>
          <div className={style.types}>
            {pokemonData.types?.map((item: any, index: string) => {
              return <div key={index}>{item.type.name}</div>;
            })}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
