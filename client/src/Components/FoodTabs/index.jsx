import React from 'react'

// icons
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"

const MobFoodTabs = () => {

    return (
        <>
            <div className=" w-full bg-white shadow-lg z-10 border p-3 fixed bottom-0 lg:hidden flex gap-4 items-center justify-between md:justify-evenly text-gray-500 ">
                <div className="flex flex-col items-center text-lg">
                    <RiShoppingBag3Line />
                    <h1 className="text-sm">Delivery</h1>
                </div>
                <div className="flex flex-col items-center  text-lg">
                    <IoFastFoodOutline />
                    <h1 className="text-sm">Dining Out</h1>
                </div>
                <div className="flex flex-col items-center text-lg">
                    <IoNutritionOutline />
                    <h1 className="text-sm">NightLife</h1>
                </div>
                <div className="flex flex-col items-center text-lg">
                    <BiDrink />
                    <h1 className="text-sm">Nutrition</h1>
                </div>
            </div>
        </>
    )
}

const PcFoodTabs = () => {
    return (
        <>
            <div className="hidden lg:flex container mx-auto px-20 gap-16">
                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-gray-200 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="Delivery" className="w-full h-full" />
                    </div>
                    <h1 className="text-lg text-gray-700">Delivery</h1>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-gray-200 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="Delivery" className="w-full h-full" />
                    </div>
                    <h1 className="text-lg text-gray-700">Dining Out</h1>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-gray-200 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="Delivery" className="w-full h-full" />
                    </div>
                    <h1 className="text-lg text-gray-700">Nightlife</h1>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-16 h-16 bg-gray-200 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" alt="Delivery" className="w-full h-full" />
                    </div>
                    <h1 className="text-lg  text-gray-700">Nutrition</h1>
                </div>
            </div>
        </>
    )
}


const FoodTabs = () => {
    return (
        <>
            <div className=" w-full ">
                <MobFoodTabs />
                <PcFoodTabs/>
            </div>
        </>
    )
}

export default FoodTabs;
