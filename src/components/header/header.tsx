import { UserButton } from "@clerk/nextjs";
import { Wrapper } from "@/components";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className="flex h-16 items-center justify-between">
          <span>LOGO</span>
          <UserButton />
        </div>
      </Wrapper>
    </header>
  );
};
