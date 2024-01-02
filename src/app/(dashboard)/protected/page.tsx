import { currentUser } from "@clerk/nextjs";
import { Wrapper } from "@/components";

const ProtectedPage = async () => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div>
      <Wrapper>
        <p>Hello, {user.firstName}</p>
      </Wrapper>
    </div>
  );
};

export default ProtectedPage;
