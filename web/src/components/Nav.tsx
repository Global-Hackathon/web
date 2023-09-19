"use client"
import Link from "next/link";
import Image from "next/image";

import house from '../../public/img/house.png'
import globe from '../../public/img/globe.png'

const NavBar = () => {
    return (
        <div 
        className={`bg-white
        sticky top-0 z-30 left-0 border-b border-dashed`}>
            <div className=" max-w-screen-2xl relative mx-auto">
                <div className="flex gap-4 flex-row p-4 mr-8">
                    <div className="flex-1">
                        <Link href="/" className="text-left btn btn-ghost">
                            <p 
                            className={` 
                            font-inter w-full md:bg-transparent md:w-fit
                            lg:mt-1 font-bold rounded-lg
                            text-lg normal-case text-left`}>
                                Uberland Transport
                            </p>
                        </Link>
                    </div>
                    <div className="flex-none ">
                        <Link href="/addresses" className="">
                            <button className="flex-none font-inter btn btn-ghost">
                                <Image src={house} alt="house" className="h-6 w-auto"/>
                            </button>
                        </Link>
                        <Link href="/map" className=" ml-2 ">
                            <button className="flex-none font-inter btn btn-ghost">
                                <Image src={globe} alt="globe" className="h-6 w-auto"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;