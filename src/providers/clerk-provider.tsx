"use client";

import { ClerkProvider as DefaultClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

type ClerkProviderProps = {
  children: React.ReactNode;
};

export const ClerkProvider = ({ children }: ClerkProviderProps) => {
  const { resolvedTheme } = useTheme();

  const clerkTheme = resolvedTheme === "light" ? undefined : dark;

  return (
    <DefaultClerkProvider
      appearance={{
        baseTheme: clerkTheme,
      }}
    >
      {children}
    </DefaultClerkProvider>
  );
};
