import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { TracingBeam } from "@/components/ui/tracing-beam";

function App() {
  return (
    <div className="antialiased mx-auto w-fit">
      <TracingBeam className="px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Socials />
      </TracingBeam>
    </div>
  );
}

export default App;
