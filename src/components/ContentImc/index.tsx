import { Card } from "../Card";
import { Form } from "../Form";
import { ChartLine } from "phosphor-react";
export const ContentImc = () => {
  return (
    <>
      <Card icon={<ChartLine size={50} color="#9fbdf3" />} />

      <Form />
    </>
  );
};
