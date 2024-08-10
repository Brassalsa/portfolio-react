import { navRoutes } from "@/lib/routes";
import Container from "./ui/container";
import IconComp from "./ui/icon";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
  return (
    <Container
      id={navRoutes.portfolio.id}
      className="flex flex-col md:flex-row gap-4 md:gap-8 mt-5 items-center justify-center"
    >
      <div className="-mt-32">
        <IconComp
          src="/developer.svg"
          className="animate-[up-down_2s_infinite_alternate] 
          drop-shadow-[0_3px_2px_var(--foreground)]
          "
        />
      </div>
      <div className="flex flex-col gap-1 group hover:cursor-default justify-center mt-0 md:-mt-32">
        <h2 className="text-2xl text-red-500 dark:text-red-400 border-white w-fit animation_test">
          Saurav Chauhan
          <div className="w-full overflow-hidden">
            <div className="border-b border-red-400 translate-x-[-110%] group-hover:translate-x-0 duration-500 ease-in-out"></div>
          </div>
        </h2>
        <TextGenerateEffect
          words="Full stack developer and a Software Engineer"
          className="-mt-6 font-semibold text-4xl leading-tight"
        />
      </div>
    </Container>
  );
}

export default Hero;
