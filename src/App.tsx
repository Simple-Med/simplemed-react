import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { FormTest } from "./components/FormTest";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import Info from './components/Info';
import Preview from './components/Preview';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Info />
      <Preview />
      <FormTest />
      <Faq />
      <Footer/>
      
    </>
  );
}

export default App;
