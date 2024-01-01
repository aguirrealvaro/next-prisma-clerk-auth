import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${inter.variable} font-body`
        )}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header>Header</header>
            <main className="flex-1">{children}</main>
            <footer>Footer</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
