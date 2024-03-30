import Link from "next/link"
import Logo from "./../assets/main-logo.svg"
import Image from "next/image"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { SignedOut } from "@clerk/nextjs"
import { ThemeToggler } from "./ui/ThemeToggler"

function Header() {
  return (
    <header className='flex flex-row items-center justify-between h-[60]'>
      <Link href="/" className="flex items-center space-x-2">
        <div>
          <Image
           src={Logo}
           alt="logo" 
           width={60} 
           height={60}
           />
        </div>
        <div className="flex flex-row justify-end items-center space-x-6 gap-4 ml-8">
        <h1 className="font-bold text-xl my-4">Firesink</h1>
        </div>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
      <Link className="max-md:hidden px-4 py-1.5 font-medium border rounded-md hover:border-blue-500 ease-in-out hover:transition-all hover:duration-150 " href="/features">Features</Link>
        <Link className="max-md:hidden px-4 py-1.5  font-medium border rounded-md hover:border-blue-500 ease-in-out hover:transition-all hover:duration-150" href="/policy">Privacy Policy</Link>
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}

export default Header
