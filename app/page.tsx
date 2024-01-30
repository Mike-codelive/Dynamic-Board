import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex-col flex-col gap-y-4">
      <h1>This is a screen for authenticated users only</h1>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
