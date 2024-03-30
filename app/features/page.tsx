import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Features(){
    return(

      <div>
      <section className="body-font bg-[#1E1919] dark:bg-slate-800">
<div className="container px-5 py-24 mx-auto dark:bg-slate-800 text-white">
<div className="text-center mb-20">
<h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">Features</h1>
<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Introducing Firesink, your ultimate file storage solution based on Cloud Firebase technology. With Firesink, you can seamlessly rename, delete, and add documents from anywhere using your authorized account. Say goodbye to scattered files and hello to organized management in one secure place. Whether you&apos;re working remotely or on-the-go, Firesink&apos;s intuitive interface and robust features empower you to stay productive. Experience effortless file management with Firesink and unlock the power of streamlined document handling. Try Firesink today and elevate your storage experience to new heights!</p>
</div>
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">Mobility</span>
  </div>
</div>
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">Security</span>
  </div>
</div>
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">Easy to use</span>
  </div>
</div>
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">Cloud based Storage</span>
  </div>
</div>
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">File rewinds</span>
  </div>
</div>
<div className="p-2 sm:w-1/2 w-full">
  <div className="bg-gray-900 rounded flex p-4 h-full items-center">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span className="title-font font-medium text-white">Automate your workflow</span>
  </div>
</div>
</div>
<div className="flex flex-col items-center mt-5"> 
<Link className="flex text-center bg-blue-600 md:p-3 md:w-fit md:text-lg text-sm p-2 w-fit rounded-sm  hover:duration-200 hover:transition-all hover:ease-in-out hover:bg-blue-700 mb-2"
    href="/dashboard"
    >
    Try it for free
    <ArrowRight className="text-center ml-4"/>
 </Link>
 </div>
</div>
</section>
  </div>
   
    );
};