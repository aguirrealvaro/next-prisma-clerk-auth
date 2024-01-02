import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex flex-1 items-center justify-center">{children}</div>;
};

export default AuthLayout;
