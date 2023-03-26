import './App.css';
import { NavBar } from "./components/NavBar";
import { FrontPage } from "./components/FrontPage";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from './components/Certifications';
// import { Papers } from "./components/Papers";
import { Experience } from "./components/Experience"; 
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FrontPage />
      <Banner />
      <Skills />
      <Projects />
      <Certifications />
      {/* <Papers /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
