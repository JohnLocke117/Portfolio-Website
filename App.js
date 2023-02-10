import './App.css';
import { Parallax } from 'react-parallax';
import { NavBar } from "./components/NavBar";
import { FrontPg } from './components/FrontPg';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../src/assets/img/test1.jpg";
import img2 from "../src/assets/img/test2.jpg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FrontPg />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
