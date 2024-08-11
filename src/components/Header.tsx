import { navRoutes } from "@/lib/routes";
import { FancyLink } from "./ui/fancy-ui";
import { ModeToggle } from "./ui/mode-toggle";

const routes = Object.keys(navRoutes).filter((i) => i !== "portfolio");
function Header() {
  return (
    <header className="flex gap-2 mb-2 border-b  border-slate-200 shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 px-4 py-4 items-center sticky top-0 bg-background z-[99] max-w-screen-lg mx-auto rounded-b-2xl shadow-sm">
      <FancyLink href={navRoutes.portfolio.url}>PortFolio</FancyLink>
      <nav
        className="flex gap-2 justify-center items-center ml-auto 
      "
      >
        <ModeToggle className="scale-75" />
        {routes.map((i) => (
          <FancyLink
            key={i}
            href={navRoutes[i as keyof typeof navRoutes].url}
            className="capitalize"
          >
            {i}
          </FancyLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
