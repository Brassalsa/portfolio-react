import { navRoutes } from "@/lib/routes";
import { FancyCard } from "./ui/card";
import Container from "./ui/container";
import { skillExtract } from "@/lib/utils";

const frontendSkills = skillExtract("frontend", "url") as string[];
const backendSkills = skillExtract("backend", "url") as string[];
const fullStack = skillExtract("fullstack", "url") as string[];
const otherSkills = skillExtract("others", "url") as string[];
function Skills() {
  return (
    <Container id={navRoutes.skills.id}>
      <Container.Heading>Skills</Container.Heading>
      <Container.Description className="flex gap-2 flex-wrap items-start">
        <FancyCard
          iconHref={frontendSkills}
          title="Frontend"
          description="Proficient with HTML/CSS/JS, Typescript, React and more."
          iconClassName=""
        />
        <FancyCard
          iconHref={backendSkills}
          title="Backend"
          description="Experienced in Python, Go lang, Node.js, Express, Hono, SQL(MySQL, PostgreSQL), No-SQL(MongoDB), Prisma ORM."
        />
        <FancyCard
          iconHref={fullStack}
          title="Fullstack"
          description="Fullstack knwoledge in Next.js, MERN stack"
          iconContainerClassName="scale-[300%] translate-y-6"
        />
        <FancyCard
          iconHref={otherSkills}
          title="Other Skills"
          description="Also know version control system like Git and Github."
          iconContainerClassName="scale-[200%] m-4 translate-y-6"
        />
      </Container.Description>
    </Container>
  );
}

export default Skills;
