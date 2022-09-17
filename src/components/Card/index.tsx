import { CardWrapper } from "./styled";
import curiousBoy from "../../../src/assets/curiousBoy.jpg";
export const Card = () => {
  return (
    <CardWrapper>
      <img src={curiousBoy} alt="" />
      <h1>Descubra seu IMC</h1>
    </CardWrapper>
  );
};
