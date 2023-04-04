import { Container } from "react-bootstrap";
import { Navigation } from "./components/views/Navigation";

export const App = () => {
  return (
    <main>
      <Container>
        <Navigation />
        <h1>Hello World</h1>
      </Container>
    </main>
  );
};
