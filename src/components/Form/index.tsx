import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "./styled";
import { useCalcImc } from "../../hooks/useCalImc";
import { Card } from "../Card";

const newImcFormSchema = z.object({
  weight: z.number(),
  height: z.number(),
  name: z.string(),
});

type NewImcFormInputs = z.infer<typeof newImcFormSchema>;

export function Form() {
  const { setResultImc, obsediadeA } = useCalcImc();

  const { register, handleSubmit } = useForm<NewImcFormInputs>({
    resolver: zodResolver(newImcFormSchema),
  });

  async function handleCalImc(data: NewImcFormInputs) {
    const { weight, height } = data;
    const resultImc = weight / (height * height);
    const formatedImc = resultImc.toFixed(2);
    setResultImc(+formatedImc);
    console.log(formatedImc);
    console.log(formatedImc, obsediadeA);
  }

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
    </FormWrapper>
  );
}
