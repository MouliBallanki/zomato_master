import React from 'react'
// react icons
import { FaUser } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import { IoMdArrowDropdown } from "react-icons/io"
import { RiSearch2Line } from "react-icons/ri"



const MobNavbar = () => {
    return (
        <>
            <div className="flex w-full  items-center justify-between lg:hidden">
                <div className="w-20">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                </div>

                <div className="flex items-center gap-2">
                    <button className="text-sm font-semi-bold text-white bg-zomato-400  py-2 px-3 rounded-full">Use App</button>
                    <span className="p-2 border border-gray-300 text-zomato-400 rounded-full">
                        <FaUser />
                    </span>
                </div>
            </div>
        </>
    )
}



const PcNavbar = () => {
    return (
        <>
            <div className="hidden  lg:flex container max-auto px-20">
                <div className="flex  items-center gap-4 w-full bg-white gap-3">
                    <div className="w-28 h-8">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-2/3 flex items-center gap-3 p-3 bg-white border border-color-gray-300 shadow-md rounded-md ">
                        <div className="flex items-center gap-3 border-r-2 border-color-gray-400 pr-2">
                            <span className="text-zomato-400 ">
                                <TiLocation />
                            </span>
                            <input type="text" placeholder="Vizianagaram" className="focus:outline-none " />
                            <IoMdArrowDropdown />

                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <RiSearch2Line className="text-gray-400" />
                            <input type="search"
                                placeholder="Search for restaurant cuisine or a dish"
                                className="focus:outline-none w-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 ml-16">
                        <button className="text-gray-500 hover:text-gray-800 text-lg">Login</button>
                        <button className="text-gray-500 hover:text-gray-800 text-lg">SignUp</button>

                    </div>
                </div>
            </div>
        </>
    )
}
const Navbar = () => {
    return (
        <>
            <nav className=" flex shadow-md lg:shadow-none items-center px-4 py-3 bg-white border-b border-gray-300">
                <MobNavbar />
                <PcNavbar />
            </nav>
        </>
    )
}
export default Navbar;