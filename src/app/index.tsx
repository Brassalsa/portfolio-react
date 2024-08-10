import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

function App() {
  return (
    <div className="h-[2000px] antialiased mx-auto w-fit">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
