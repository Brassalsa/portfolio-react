import Container from "./ui/container";
import IconComp from "./ui/icon";
import { Meteors } from "./ui/meteors";
import { useTheme } from "./ui/theme-provider";

function About() {
  const { theme } = useTheme();
  return (
    <Container id="about" className="flex flex-col justify-center">
      <Container.Heading>About</Container.Heading>
      <Container.Description className="text-xl flex flex-col gap-4 md:flex-row md:gap-8 justify-center items-center h-[100%] relative">
        <p>
          Myself{" "}
          <span className="text-red-500 dark:text-red-400">Saurav Chauhan</span>
          , I am a Full Stack developer, Software Engineer.
          <br /> I build stuff and play games in my free time.
          {theme === "dark" && <Meteors number={20} />}
        </p>
        <IconComp
          src="/vc.svg"
          className="md:h-60 animate-[shrink_4s_infinite]"
        />
      </Container.Description>
    </Container>
  );
}

export default About;
