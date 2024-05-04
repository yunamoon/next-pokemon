import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface PokemonCardProps {
  name: string;
  image: string;
  koreanName: string;
  id: string;
}
export default function PokemonCard({
  name,
  image,
  koreanName,
  id,
}: PokemonCardProps) {
  return (
    <Link href={`/detail/${name}`} key={name + "card"}>
      <Card sx={{ maxWidth: 345 }} className="card_item">
        <CardMedia
          component="img"
          alt={`${name}`}
          image={image}
          className="card_img"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            {koreanName}
          </Typography>
          <Typography variant="body2">
            <br />
            포켓몬 도감 {id}번 포켓몬입니다.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">상세보기</Button>{" "}
        </CardActions>
      </Card>
    </Link>
  );
}
