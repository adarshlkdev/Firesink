"use client"
import Link from "next/link";
import {ArrowRight} from "lucide-react"
import Footer from "./../components/Footer"
import Logo from "./../assets/main-logo.svg"
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { Linkedin } from "lucide-react";


export default function Home() {
  return (
   <main className="">
    <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
      <div className="p-10 flex flex-col bg-[#2B2929]
      dark:bg-slate-800 text-white space-y-5">
       <h1 className="md:text-4xl  text-2xl font-bold">
        Welcome to <span className="text-blue-500">Fire</span>sink<br/>
        <br/>
        Store everything for you & your business needs. All in one place.
       </h1>

       <p className="pb-18 text-sm md:text-lg space-x-1">Firesink&apos;s intuitive interface and robust features empower you to stay productive. Experience effortless file management with Firesink and unlock the power of streamlined document handling. Try Firesink today and elevate your storage experience to new heights!</p>

       <Link className="flex text-center bg-blue-600 md:p-3 md:w-fit md:text-lg text-sm p-2 w-fit rounded-sm  hover:duration-200 hover:transition-all hover:ease-in-out hover:bg-blue-700 mb-2"
          href="/dashboard"
          >
          Try it for free
          <ArrowRight className="text-center ml-2"/>
       </Link>
       </div>

       <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-20">
        <video autoPlay loop muted className="rounded-lg">
          <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" 
            type="video/mp4"
            />
            Your browser doesn&apos;t support the video tag.
        </video>
    

       </div>


    </div>
   </main>
  );
}
