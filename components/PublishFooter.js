import Image from "next/image"
import Link from 'next/link'

export default function PublishFooter() {
    return(
        <div className="card p-3 mb-3 bg-[#1F1F1F] flex justify-between"> 
            <div className="flex justify-start" >
                <span className="pt-2"><Image src="/logo.png" width="25px" height="25px"/></span>
                <p className="p-2 text-white font-extralight">La’ Nusin House</p>
            </div>
            

            <div className="flex-row justify-center cursor-pointer" >
                <span className="z-0 flex justify-center"><Image src="/back2top.png" width="12.96px" height="13.33px"/></span>
                <Link href='#top'><span className="text-white p-1 text-xs text-center md:text-sm ">Back to top</span></Link>
                
            </div>
           
            
        </div>
    )
    
}