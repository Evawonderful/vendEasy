import Image from "next/image"


export default function SectionCard() {
    return(
        <div className="card "> 
            <span className="p-2 text-lg font-extrabold">Heading</span>
            <p className="text-[#7C8185] p-2 pt-0 text-md">Sub-heading goes here.</p>

            <div className="bg-[#F5F5F5] h-[full] w-[full] mt-5 p-10 flex-row justify-center md:p-20" >
                <span className="z-0 flex justify-center"><Image src="/image.png" width="25px" height="22.5px"/></span>
                <p className="text-[#7C8185] p-1 text-xs text-center md:text-sm">Featured Image</p>
            </div>
            <span className="p-5">
                <p className="text-lg text-[#1F1F1F] font-bold">Card 1</p>
                <p className=" text-[#7C8185] pb-2 text-md">Add description</p>
                <button className="bg-[#7C8185] rounded p-[6px]  px-11">
                  <span className="text-xs text-white pl-1 font-bold tracking-wider">Button</span>
                </button>
            </span>
            
        </div>
    )
    
}