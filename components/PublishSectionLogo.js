import Image from "next/image"

export default function PublishSectionLogo() {
    return(
        <div > 

        
            <div className="p-5 flex justify-start" >
                <span className="pt-2"><Image src="/logo.png" width="25px" height="25px"/></span>
                <p className="p-2  font-extralight">La’ Nusin House</p>
            </div>

            <div className=" ">
            <div className="bg-[#F5F5F5] h-[full] w-[full] mt-5 p-2 flex-row justify-center" >
                <span className="z-0 flex justify-center"><Image src="/hero.png" width="414px" height="600px"/></span>
                <span className="z-2 text-[white] ml-[2rem] absolute mt-[-20rem]">
                <h4 className=" p-1 text-[2rem] text-xl text-center md:text-sm">LA’ NUSIN <br/> FASHION HOUSE</h4>
                <p className="text-center text-[0.8rem] font-extralight">Luxury, For the Woman Who Deserves It.</p></span>
            </div>
           
            </div>
        </div>
    )
    
}