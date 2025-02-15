import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { FormTest } from "./components/FormTest";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import Info from "./components/Info";
import Preview from "./components/Preview";
import styled from "styled-components";

const BackgroundSection = styled.section`
  position: relative;
  z-index: 1; /* Garante que o conteúdo fique acima do fundo */
  padding: 5rem 0;
`;

const BackgroundInForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Faz o fundo cobrir toda a seção */
  background: #2c4b5f;
  clip-path: polygon(0% 20%, 100% 10%, 100% 100%, 0% 100%);
  z-index: -1;
`;

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Info />
      <Preview />
      <BackgroundSection>
        <BackgroundInForm />
        <FormTest />
        <Faq />
        <Footer />
      </BackgroundSection>
    </>
  );
}

export default App;
