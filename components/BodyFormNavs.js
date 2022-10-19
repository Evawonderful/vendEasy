import Image from "next/image"
import Link from "next/link"

export default function BodyFormNavs() {
    return (
        <nav className="bg-white sticky top-0 z-50" id="top">
            <span className="flex p-3 border-b-2 border-[#EDEFF1]">
                <Image src="/user.png" width="32px" height="32px"/> 
                <span className="pt-5 pl-2" >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99999 5.99999L0.756989 1.75699L2.17199 0.342987L4.99999 3.17199L7.82799 0.342987L9.24299 1.75699L4.99999 5.99999Z" fill="#1F1F1F"/>
                </svg>
                </span>
                
         
            </span>   

            <span className="flex justify-between p-2 border-b-2 border-[#EDEFF1]">
                <Link href="/">
                    <span className="flex">
                    
                        <span className="p-1 pt-2" >
                            <Image src="/back.png" width="7.78px" height="12.73px"/>
                        </span>
                        <span className="text-lg font-bold pl-2 pt-1">Back</span> 
                
                    </span>
                </Link>

                <span>
                    <button className="bg-[#EDEFF1] rounded p-1 px-2">
                        <span className="">
                            <Image src="/view.png" width="12.6px" height="10.5px"/>
                        </span>
                        <span className="text-[0.75rem] pl-1 font-bold tracking-wide">Preview</span>
                    </button>
                    <Link href="/published">
                    <button className="bg-[#1F1F1F] rounded p-1 px-2 ml-3">
                        <span >
                            <Image src="/check.png" width="9.9px" height="7.01px"/>
                        </span>
                        <span className="text-white text-[0.75rem] pl-1 font-medium tracking-wider">Save</span>
                    </button></Link>
                </span>
                
                
            </span>    
        </nav>




    )}