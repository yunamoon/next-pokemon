import style from "../pokemon-card.module.css";
export const getColorCard = (color: string) => {
  switch (color) {
    case "red":
      return style.redCard;
    case "blue":
      return style.blueCard;
    case "green":
      return style.greenCard;
    case "purple":
      return style.purpleCard;
    case "brown":
      return style.brownCard;
    case "yellow":
      return style.yellowCard;
    case "pink":
      return style.pinkCard;
    case "gray":
      return style.grayCard;
    case "white":
      return style.whiteCard;
    default:
      return style.defaultCard;
  }
};
