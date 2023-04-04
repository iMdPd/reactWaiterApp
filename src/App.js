import { Container } from "react-bootstrap";
import { Footer } from "./components/views/Footer";
import { Header } from "./components/views/Header";

export const App = () => {
  return (
    <main>
      <Container
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <h1>Hello World</h1>
        <Footer />
      </Container>
    </main>
  );
};
