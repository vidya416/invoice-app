import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Home() {
  return (
    <main className=" flex flex-col justify-center h-screen gap-6 uppercase text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicer</h1>
      <p className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>

      </p>
    </main>
  );
}
