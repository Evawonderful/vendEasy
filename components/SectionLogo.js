import Image from "next/image"

export default function SectionLogo() {
    return(
        <div className="card "> 
            <span className="p-2 font-bold">Logo</span>

            <div className="bg-[#F5F5F5] h-[full] w-[full] mt-5 p-10 flex-row justify-center md:p-20" >
                <span className="z-0 flex justify-center"><Image src="/image.png" width="25px" height="22.5px"/></span>
                <p className="text-[#7C8185] p-1 text-xs text-center md:text-sm">Hero Image</p>
            </div>
            <span className="p-5">
                <p className="text-xl text-[#1F1F1F] font-extrabold">Your business <br/> name goes here.</p>
                <p className="text-[#7C8185] pt-2 text-md">Business tagline or short bio.</p>
            </span>
            
        </div>
    )
    
}