import PokemonDetail from "@/components/pokemon-detail/pokemon-detail";
import style from "../../home.module.css";
export default async function Detail() {
  return (
    <div className={style.main}>
      <h1 className={style.title}>Pokemon Detail</h1>
      <p className={style.comment}>포켓몬에 대해 더 자세히 알아봅니다.</p>
      <PokemonDetail />
    </div>
  );
}
