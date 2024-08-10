import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

export const FancyLink = (
  props: ComponentPropsWithRef<"a"> & {
    href: string;
  }
) => (
  <a
    {...props}
    className={cn(
      "cursor-pointer text-sm font-semibold group opacity-85 hover:opacity-100 transition-opacity duration-300",
      props.className
    )}
    children={
      <>
        {props.children}
        <div className="w-full overflow-hidden">
          <div
            className="border-b-2 border-red-400 w-full -translate-x-[110%]
          group-hover:translate-x-0
          transition-transform duration-500
          "
          />
        </div>
      </>
    }
  />
);
