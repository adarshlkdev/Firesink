import Image from "next/image";
import Link from "next/link";
import ErrorImage from "./../assets/404error.svg"

export default function CustomError(){
    return(
        <div className="flex flex-col items-center bg-[#1E1919] dark:bg-slate-800">
                <Image
                 src={ErrorImage}
                 className=""
                 alt="Page not found"
                 height={600}
                 width={600} />
                 <Link href="/dashboard" className="text-center md:px-5 mb-5 inline md:py-3 md:text-sm px-3 py-2 text-xs font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent hover:border-blue-500 rounded-lg focus:outline-none bg-blue-600 active:bg:transparent hover:bg-blue-700">Back to homepage</Link>
            </div>
    );
}
