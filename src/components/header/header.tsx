import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Wrapper, ThemeToggle } from "@/components";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">LOGO</Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
