import Image from "next/image"


export default function PublishSectionCard() {
    return(
        <div className=" p-5"> 
            <span className="p-2 text-lg font-extrabold">Collection</span>
            <p className="text-[#7C8185] p-2 pt-0 text-md">Uniquely catering to your every need.</p>

            <div className="card">

            <div className="bg-[#F5F5F5] h-[full] w-[full] mt-5 p-10 flex-row justify-center md:p-20" >
                <span className="z-0 flex justify-center"><Image src="/product-1.png" width="173px" height="240px"/></span>
                
            </div>
            <span className="p-5">
                <p className="text-lg text-[#1F1F1F] font-bold">Dresses Galore</p>
                <p className=" text-[#7C8185] pb-2 text-md">Shop the latest dresses of best-selling styles. </p>
                <button className="bg-[#1F1F1F] rounded p-[6px]  px-11">
                  <span className="text-xs text-white pl-1 font-bold tracking-wider">Visit Store</span>
                </button>
            </span></div>

            <div className="card">

                <div className="bg-[#F5F5F5] h-[full] w-[full] mt-5 p-10 flex-row justify-center md:p-20" >
                    <span className="z-0 flex justify-center"><Image src="/product-2.png" width="173px" height="240px"/></span>
                    
                </div>
                <span className="p-5">
                    <p className="text-lg text-[#1F1F1F] font-bold">Elegant Casuals</p>
                    <p className=" text-[#7C8185] pb-2 text-md">Shop the latest dresses of best-selling styles. </p>
                    <button className="bg-[#1F1F1F] rounded p-[6px]  px-11">
                    <span className="text-xs text-white pl-1 font-bold tracking-wider">Visit Store</span>
                    </button>
                </span></div>
            
        </div>
    )
    
}