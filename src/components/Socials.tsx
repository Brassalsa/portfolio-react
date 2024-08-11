import { mediaLinks } from "@/lib/constants";
import Container from "./ui/container";
import { navRoutes } from "@/lib/routes";
import { useTheme } from "./ui/theme-provider";

function Socials() {
  const { theme } = useTheme();
  return (
    <Container id={navRoutes.socials.id} className="min-h-fit pb-10">
      <Container.Heading>Socials</Container.Heading>
      <Container.Description className="flex flex-wrap justify-center items-center gap-6">
        {mediaLinks.map((i) => (
          <a
            key={i.url}
            href={i.url}
            target="_blank"
            className="flex flex-col justify-center items-center"
          >
            <img
              src={theme === "light" && i.light ? i.light : i.img}
              className="size-10"
            />
            {i.name}
          </a>
        ))}
      </Container.Description>
    </Container>
  );
}

export default Socials;
