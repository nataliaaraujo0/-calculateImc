import { CardWrapper } from "./styled";
import { ReactElement } from "react";

type CardProps = {
  icon: ReactElement;
  title?: string;
};

export const Card = ({ icon, title = "Calcule o seu Imc :" }: CardProps) => {
  return (
    <CardWrapper>
      {icon}
      <h1>{title}</h1>
    </CardWrapper>
  );
};
