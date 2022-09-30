import { useCalcImc } from "../../hooks/useCalImc";
import { Card } from "../Card";
import { Form } from "../Form";

export const ContentImc = () => {
  const {
    abaixoDoPeso,
    obsediadeA,
    obsediadeB,
    obsediadeC,
    pesoNormal,
    sobrepeso,
  } = useCalcImc();
  return (
    <>
      {abaixoDoPeso && (
        <Card img="https://i.pinimg.com/474x/48/c4/fb/48c4fb169d22a699576ff52c7efa6ea8.jpg" />
      )}
      {obsediadeA && (
        <Card img="https://i.pinimg.com/originals/16/a1/0e/16a10e9ec110cd84a3f73632a4342d2c.jpg" />
      )}
      {obsediadeB && (
        <Card img="https://i.pinimg.com/originals/cc/11/69/cc1169e18889624e999872260ecc1789.jpg" />
      )}
      {obsediadeC && (
        <Card img="https://i.pinimg.com/originals/d2/34/a4/d234a4be22977ad4a7a21941a4320e29.jpg" />
      )}
      {pesoNormal && (
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFGsik3roCrUsjlZarRa-bQQf8hEujUCdYb7BkEpWSmIS3nKTbDq9V1KXVeaxOyoAws4&usqp=CAU" />
      )}
      {sobrepeso && (
        <Card img="https://i.pinimg.com/736x/b2/e0/97/b2e097481598f51e6956ba4581c2d169.jpg" />
      )}
      <Form />
    </>
  );
};
