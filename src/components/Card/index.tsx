import { CardWrapper } from "./styled";
import curiousBoy from "../../../src/assets/curiousBoy.jpg";

type CardProps = {
  img?: string;
  title?: string;
};

export const Card = ({
  img = curiousBoy,
  title = "Descubra seu IMC",
}: CardProps) => {
  return (
    <CardWrapper>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </CardWrapper>
  );
};
