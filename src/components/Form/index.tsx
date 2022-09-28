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
 


  const [scale, setScale] = useState('');
  const [color, setColor] = useState('')


  const { register, handleSubmit } = useForm<NewImcFormInputs>({
    resolver: zodResolver(newImcFormSchema),
  });

  async function handleCalImc(data: NewImcFormInputs) {

    const { weight, height } = data;
    const resultImc = weight / (height * height);
    const formatedImc = resultImc.toFixed(2);
    if(Number(formatedImc) < 18.5) {
      setColor('red')
      return setScale('Abaixo do Peso')

    }else if(Number(formatedImc) >= 18.5 && Number(formatedImc) < 24.9) {

      setColor('green')
      return setScale('Peso Ideal')

    } else if(Number(formatedImc) >= 24.9 && Number(formatedImc) < 34.9) {

      setColor('yellow')
      return setScale('Obesidade A')

    }else if(Number(formatedImc) >= 34.9 && Number(formatedImc) < 39.9) {

      setColor('orange')
      return setScale('Obesidade B')

    }else if (Number(formatedImc) >= 39.9) {

      setColor('red')
      return setScale('Obesidade C')

    }
   
  }

  return (
    <>
    <FormWrapper onSubmit={handleSubmit(handleCalImc)}>
      <input
        type="text"
        placeholder="Digite seu nome"
        {...register("name")}
      />
      <input
        type="tex"
        placeholder="Digite seu peso (kg)"
        {...register("weight", { valueAsNumber: true })}
      />
      <input
        type="text"
        placeholder="Digite sua altura (m)"
        {...register("height", { valueAsNumber: true })}
      />

      <button onSubmit={handleSubmit(handleCalImc)} type="submit">Enviar</button>
      
    </FormWrapper>
    {scale ? (
        <h1 style={{ color: color}}>
          {scale}
        </h1>
      ): ''}
    </>
    
  );
}
