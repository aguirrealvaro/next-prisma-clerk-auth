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
            <Link href="/protected">Protected</Link>
            <SignedIn>
              <UserButton afterSignOutUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL} />
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
