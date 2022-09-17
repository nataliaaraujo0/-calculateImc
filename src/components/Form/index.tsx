import { FormWrapper } from "./styled";
export const Form = () => {
  return (
    <FormWrapper>
      <input type="text" placeholder="Qual é seu peso?" />
      <input type="text" placeholder="Qual é  a sua altura?" />

      <button>Enviar</button>
    </FormWrapper>
  );
};
