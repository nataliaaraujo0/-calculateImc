import { AppWrapper } from "./app.styled";
import { Card } from "./components/Card";
import { Form } from "./components/Form";

export function App() {
  return (
    <AppWrapper>
      <Card />
      <Form />
    </AppWrapper>
  );
}
