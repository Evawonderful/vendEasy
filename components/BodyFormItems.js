import Image from "next/image";
import { useState } from "react";

export default function BodyFormItems() {

    const [isCollapsed1, setIsCollapsed1] = useState(null)
    const [isCollapsed2, setIsCollapsed2] = useState(null)
    const [isCollapsed3, setIsCollapsed3] = useState(null)
    const [isCollapsed4, setIsCollapsed4] = useState(null)

    return(
        <div className="divide-y divide-[#EDEFF1]">
            <div className="flex justify-between p-5">
                <span>
                    <p className="text-[#1F1F1F] text-md font-semibold">Heading</p>
                </span>
                <span onClick={() => setIsCollapsed1(!isCollapsed1)}>
                    {
                        isCollapsed1?(
                            <Image src="/plus.png" width="14px" height="14px"/>
                        ) : (
                            <Image src="/minus.png" width="14px" height="2px"/>
                        )
                    }
                    

                </span>
            </div>


            {/* Dropdown */}

            <div className="p-5">
            
                

                <span className="py-3  rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" ><input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="Explore"/></span>

            </div>


            <div className="flex justify-between p-5">
                <span>
                    <p className="text-[#1F1F1F] text-md font-semibold">Sub-Heading</p>
                </span>
                <span onClick={() => setIsCollapsed2(!isCollapsed2)}>
                    {
                        isCollapsed2?(
                            <Image src="/plus.png" width="14px" height="14px"/>
                        ) : (
                            <Image src="/minus.png" width="14px" height="2px"/>
                        )
                    }
                    

                </span>
            </div>
          {/* Dropdown */}
          <div className="p-5 mb-5">
                <span className="py-3 pb-10 rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" >
                    <input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="The best fashion store can deliver."/></span>

            </div>

          <div className="flex justify-between p-5">
                <span>
                    <p className="text-[#1F1F1F] text-md font-semibold">Card 1</p>
                </span>
                <span onClick={() => setIsCollapsed1(!isCollapsed1)}>
                    {
                        isCollapsed1?(
                            <Image src="/plus.png" width="14px" height="14px"/>
                        ) : (
                            <Image src="/minus.png" width="14px" height="2px"/>
                        )
                    }
                    

                </span>
            </div>


            {/* Dropdown */}

            <div className="p-5">
            
                <p className="text-[#1F1F1F] text-md font-medium">Card Name</p>

                <span className="py-3  rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" ><input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="Card 1"/></span>

            </div>
            
            <div className="p-5">
            
                <p className="text-[#1F1F1F] text-md font-medium">Featured Image</p>

                <span className="py-3  rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" ><input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="Card 1"/></span>

            </div>
           
             {/* Dropdown */}
             <div className="p-5">
                <span className="flex justify-center m-2 mb-3 w-full p-3 border-2 rounded-lg border-[#EDEFF1]">
                    <span>
                        <Image src="/add-image.png" width="18.33px" height="16.67px" />
                    </span>
                    <span className="pl-2"> Upload a PNG or JPG file </span>
                    
                </span>
            </div>


            <div className="flex justify-between p-5">
                <span>
                    <p className="text-[#1F1F1F] text-md font-semibold">Sub-Heading</p>
                </span>
                <span onClick={() => setIsCollapsed3(!isCollapsed3)}>
                    {
                        isCollapsed3?(
                            <Image src="/plus.png" width="14px" height="14px"/>
                        ) : (
                            <Image src="/minus.png" width="14px" height="2px"/>
                        )
                    }
                    

                </span>
            </div>

            {/* Dropdown */}

            <div className="p-5">
                <span className="py-3  rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" ><input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="New and thrift jeans avaliable for you anywhere."/></span>

            </div>
            


            <div className="flex justify-between p-5">
                <span>
                    <p className="text-[#1F1F1F] text-md font-semibold">Button Label</p>
                </span>
                <span onClick={() => setIsCollapsed4(!isCollapsed4)}>
                    {
                        isCollapsed4?(
                            <Image src="/plus.png" width="14px" height="14px"/>
                        ) : (
                            <Image src="/minus.png" width="14px" height="2px"/>
                        )
                    }
                    

                </span>

            </div>

            {/* Dropdown */}

            <div className="p-5 mb-5">
                <span className="py-3 rounded-lg bg-[#EDEFF1] text-[#7C8185] text-xs" ><input className="bg-[#EDEFF1] w-full p-2" type="text" placeholder="Shop Now"/></span>

            </div>

            <div className="p-5">
                <span className="flex justify-center m-2 mb-3 w-full p-3 border-[#EDEFF1]">
                    <span>
                        <Image src="/plus.png" width="17.33px" height="15.67px" />
                    </span>
                    <span className="pl-2"> Add new card </span>
                    
                </span>
            </div>
           
            
        </div>
    )
    
}