import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "./styled";

const newImcFormSchema = z.object({
  weight: z.number(),
  height: z.number(),
  name: z.string(),
});

type NewImcFormInputs = z.infer<typeof newImcFormSchema>;

export function Form() {
  // IMC = Peso ÷ (Altura × Altura)

  const { register, handleSubmit } = useForm<NewImcFormInputs>({
    resolver: zodResolver(newImcFormSchema),
  });

  async function handleCreateNewImc(data: NewImcFormInputs) {
    console.log(data);
  }
  return (
    <FormWrapper onSubmit={handleSubmit(handleCreateNewImc)}>
      <input
        type="text"
        placeholder="Qual é o seu nome?"
        {...register("name")}
      />
      <input
        type="number"
        placeholder="Qual é seu peso?"
        {...register("weight", { valueAsNumber: true })}
      />
      <input
        type="number"
        placeholder="Qual é  a sua altura?"
        {...register("height", { valueAsNumber: true })}
      />

      <button type="submit">Enviar</button>
    </FormWrapper>
  );
}
