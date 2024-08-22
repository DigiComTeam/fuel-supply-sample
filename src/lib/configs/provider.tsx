import { PropsWithChildren } from "react";
import { QueryProvider } from "./query";

export const Providers = (props: PropsWithChildren) => {
  const { children } = props;
  return <QueryProvider>{children}</QueryProvider>;
};
