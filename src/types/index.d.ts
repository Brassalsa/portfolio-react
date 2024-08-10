import type { PropsWithChildren } from "react";

type PropsDefault = PropsWithChildren & PropsWithClassName;

type PropsWithClassName = {
  className?: string;
};
