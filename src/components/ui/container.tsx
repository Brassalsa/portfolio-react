import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

function Container(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("min-h-svh pt-20 relative", props.className)}
    />
  );
}
Container.Heading = (props: ComponentPropsWithoutRef<"h2">) => (
  <h2
    {...props}
    className={cn(
      "font-semibold text-2xl fancy-heading sticky top-0 left-0 ",
      props.className
    )}
  />
);
Container.Description = (props: ComponentPropsWithoutRef<"div">) => (
  <div {...props} className={cn("", props.className)} />
);
export default Container;
