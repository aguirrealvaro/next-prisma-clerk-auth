import "@/styles/globals.css";
import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Header } from "@/components";
import { ThemeProvider } from "@/providers";
import { cn } from "@/utils/cn";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Next Tailwind Template",
  description: "Description",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-bg-primary text-text-primary antialiased",
            `${inter.variable} font-body`
          )}
        >
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <footer>Footer</footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
