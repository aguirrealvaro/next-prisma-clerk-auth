import { ClerkProvider as DefaultClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type ClerkProviderProps = {
  children: React.ReactNode;
};

export const ClerkProvider = ({ children }: ClerkProviderProps) => {
  return (
    <DefaultClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </DefaultClerkProvider>
  );
};
