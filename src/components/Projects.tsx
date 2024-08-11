import { projects } from "@/lib/constants";
import { PinContainer } from "./ui/3d-pin";
import Container from "./ui/container";
import { navRoutes } from "@/lib/routes";
import { BackgroundBeams } from "./ui/background-beams";

function Projects() {
  return (
    <Container id={navRoutes.projects.id}>
      <Container.Heading>Projects</Container.Heading>
      <Container.Description className="flex gap-5 flex-wrap mx-auto relative justify-center">
        {projects.map((i) => (
          <PinContainer
            containerClassName="size-52 m-4"
            className="size-52"
            title={i.github.replace("https://", "")}
            href={i.github}
            key={i.label}
          >
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-xl font-semibold mb-3">{i.label}</h3>
              <p className="my-auto">{i.info}</p>
            </div>
          </PinContainer>
        ))}
        <BackgroundBeams />
      </Container.Description>
    </Container>
  );
}

export default Projects;
