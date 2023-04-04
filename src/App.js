import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { TableDetails } from "./components/pages/TableDetails";
import { Footer } from "./components/views/Footer";
import { Header } from "./components/views/Header";

export const App = () => {
  return (
    <main>
      <Container
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};
