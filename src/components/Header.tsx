import { FancyLink } from "./ui/fancy-ui";
import { ModeToggle } from "./ui/mode-toggle";

function Header() {
  return (
    <header className="flex gap-2 mb-2 border-b  border-slate-200 shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 px-4 py-4 items-center sticky top-0 bg-background z-50 max-w-screen-lg mx-auto rounded-b-2xl shadow-sm">
      <FancyLink href="#hero">PortFolio</FancyLink>
      <nav
        className="flex gap-2 justify-center items-center ml-auto
      "
      >
        <ModeToggle className="scale-75" />
        <FancyLink href="#about">About</FancyLink>
        <FancyLink href="#skills">Skills</FancyLink>
        <FancyLink href="#socials">Socials</FancyLink>
      </nav>
    </header>
  );
}

export default Header;
