import Image from "next/image"
import Link from 'next/link'

export default function FormFooter() {
    return(
        <div className="card p-3 mb-3 bg-[#1F1F1F] flex justify-between"> 
            <span className="p-2 text-md text-white font-medium tracking-wider">Logo</span>
            

            <div className="flex-row justify-center cursor-pointer" >
                <span className="z-0 flex justify-center"><Image src="/back2top.png" width="12.96px" height="13.33px"/></span>
                <Link href='#top'><span className="text-white p-1 text-xs text-center md:text-sm ">Back to top</span></Link>
                
            </div>
           
            
        </div>
    )
    
}