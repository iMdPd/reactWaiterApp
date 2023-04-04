import { Container } from "react-bootstrap";
import { Footer } from "./components/views/Footer";
import { Navigation } from "./components/views/Navigation";

export const App = () => {
  return (
    <main>
      <Container
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navigation />
        <h1>Hello World</h1>
        <Footer />
      </Container>
    </main>
  );
};
