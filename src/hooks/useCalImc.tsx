import { useState } from "react";

export const useCalcImc = () => {
  const [resultImc, setResultImc] = useState(0);

  const abaixoDoPeso = resultImc < 18.5;
  const pesoNormal = resultImc >= 18.5;
  const sobrepeso = resultImc >= 24.9;
  const obsediadeA = resultImc >= 29.9;
  const obsediadeB = resultImc >= 34.9;
  const obsediadeC = resultImc >= 39.9;

  return {
    resultImc,
    setResultImc,
    abaixoDoPeso,
    pesoNormal,
    sobrepeso,
    obsediadeA,
    obsediadeB,
    obsediadeC,
  };
};
