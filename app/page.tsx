import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="h-full relative flex flex-col items-center p-4 space-y-8 mx-auto">
      <Navigation/>
      <Hero/>
      <Projects/>
      <Bio/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}
