import Image from "next/image";

export default function DemoHeroDiv(){
    return(
        <div className="bg-[#1F1F1F] h-full z-0 text-[#D7D9DB] flex justify-between items-stretch">
             <span className="w-2/3  p-5">
                
                <span className="p-5"><p className="text-white text-sm p-2">Section &gt; <span className="font-medium"></span> Hero</p></span>


                <div >Here’s what visitors first see on your page. Make a good first impression!</div>
            
            </span>   
            
            <div className="triangle z-5" ></div>
            
                <span className="z-8 flex absolute right-7 self-end">
                    <Image src="/hero-image.png" width="125px" height="184px"/>
                </span>
            
        
            

        </div>
    )
}