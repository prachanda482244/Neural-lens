import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>
        HOme page
      </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
