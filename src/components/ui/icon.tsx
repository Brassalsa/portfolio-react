import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const IconComp = (props: ComponentPropsWithoutRef<"img">) => (
  <img
    {...props}
    className={cn(
      "h-52 md:h-80 shrink-0 drop-shadow-[0_3px_2px_var(--foreground)]",
      props.className
    )}
  />
);

export default IconComp;
