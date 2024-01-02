import "@/styles/globals.css";
import { ReactNode } from "react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Metadata } from "next";
import { Footer, Header } from "@/components";
import { ClerkProvider, ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "next-prisma-clerk-auth",
  description: "Description",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${inter.variable} font-body`
        )}
      >
        <ThemeProvider>
          <ClerkProvider>
            <div className="flex min-h-screen flex-col">
              <ClerkLoading>
                <div className="flex flex-1 items-center justify-center">loading</div>
              </ClerkLoading>
              <ClerkLoaded>
                <Header />
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
              </ClerkLoaded>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
