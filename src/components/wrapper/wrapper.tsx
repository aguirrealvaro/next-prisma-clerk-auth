import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mx-auto w-4/5 max-w-6xl">{children}</div>;
};
