import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "./styled";
import { useCalcImc } from "../../hooks/useCalImc";
import { useState } from "react";

interface FormProps {
  formatedImc: number | string;
}
const newImcFormSchema = z.object({
  weight: z.number(),
  height: z.number(),
  name: z.string(),
});

type NewImcFormInputs = z.infer<typeof newImcFormSchema>;

export function Form({ formatedImc }: FormProps) {
  //const {
  //sobrepeso,
  //setResultImc,
  //resultImc,
  //pesoNormal,
  //obsediadeC,
  //obsediadeB,
  //obsediadeA,
  //abaixoDoPeso,
  //} = useCalcImc();

  const [resultImc, setResultImc] = useState(0);

  const { register, handleSubmit } = useForm<NewImcFormInputs>({
    resolver: zodResolver(newImcFormSchema),
  });

  async function handleCalImc(data: NewImcFormInputs) {
    const { weight, height } = data;
    const resultImc = weight / (height * height);
    const formatedImc = resultImc.toFixed(2);
    setResultImc(+formatedImc);
    console.log(formatedImc);
  }

  const abaixoDoPeso = resultImc < 18.5;
  const pesoNormal = resultImc >= 18.5;
  const sobrepeso = resultImc >= 24.9;
  const obsediadeA = resultImc >= 29.9;
  const obsediadeB = resultImc >= 34.9;
  const obsediadeC = resultImc >= 39.9;

  return (
    <FormWrapper onSubmit={handleSubmit(handleCalImc)}>
      <input
        type="text"
        placeholder="Qual é o seu nome?"
        {...register("name")}
      />
      <input
        type="tex"
        placeholder="Qual é seu peso?"
        {...register("weight", { valueAsNumber: true })}
      />
      <input
        type="text"
        placeholder="Qual é  a sua altura?"
        {...register("height", { valueAsNumber: true })}
      />

      <button type="submit">Enviar</button>

      {resultImc}
      {abaixoDoPeso ? <h1>abaixoDoPeso</h1> : "null"}
      {pesoNormal && <h1>pesoNormal</h1>}
      {sobrepeso && <h1>sobrepeso</h1>}
      {obsediadeA && <h1>obsediadeA</h1>}
      {obsediadeB && <h1>obsediadeB</h1>}
      {obsediadeC && <h1>obsediadeC</h1>}
    </FormWrapper>
  );
}
