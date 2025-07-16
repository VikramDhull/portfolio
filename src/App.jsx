import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectPage />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
