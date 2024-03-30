 import Image from "next/image";
 import Logo from "./../assets/main-logo.svg"
 import { LinkedinIcon } from "lucide-react";
 import { TwitterIcon } from "lucide-react";
 import { GithubIcon } from "lucide-react";
 import Link from "next/link";

 export default function Footer(){
    return( 
    <div>
        

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col items-center space-y-3">
              <Link href="/" className="flex items-center">
                  <Image src={Logo} alt={Logo} height={50} width={50}  />
                  <div className="">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Firesink</span>
                  <p className="text-xs">Developed by adarshlkdev</p>
                  </div>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/policy" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="/features" className="hover:underline">Features</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://console.firebase.google.com/" className="hover:underline">Firebase</Link>
                      </li> 
                      <li>
                          <Link href="https://clerk.com/docs/quickstarts/nextjs/" className="hover:underline">Clerk</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://github.com/adarshlkdev" className="hover:underline ">Github</Link>
                      </li>
                      <li>
                          <Link href="https://twitter.com/adarshlkdev" className="hover:underline">Twitter</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/">Firesink™</Link>  All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="https://twitter.com/adarshlkdev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                  <TwitterIcon />
                  <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com/adarshlkdev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                  <GithubIcon />
                  <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/adarshlkdev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                  <LinkedinIcon />
                  <span className="sr-only">Linkedin</span>
              </Link>
          </div>
      </div>
    </div>
</footer>

    </div>
    );
}
