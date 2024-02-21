import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p></p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
