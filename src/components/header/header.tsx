import { UserButton } from "@clerk/nextjs";
import { Wrapper, ThemeToggle } from "@/components";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className="flex h-16 items-center justify-between">
          <span>LOGO</span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserButton />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
