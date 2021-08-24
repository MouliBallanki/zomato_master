import { React, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// icons
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"
import classnames from "classnames"


const MobFoodTabs = () => {
    const [allTypes, setallTypes] = useState([
        {
            id: "delivery",
            name: "Delivery",
            icon: <RiShoppingBag3Line />
        },

        {
            id: "dining",
            name: "Dining Out",
            icon: <IoFastFoodOutline />
        },

        {
            id: "night",
            name: "NightLife",
            icon: <IoNutritionOutline />
        },

        {
            id: "nutri",
            name: "Nutrition",
            icon: <BiDrink />
        }
    ])

    const { type } = useParams();

    return (
        <>
            <div className=" w-full bg-white z-10 border-t-2 p-3 fixed bottom-0 lg:hidden flex gap-4 items-center justify-between md:justify-evenly text-gray-500 ">
                {
                    allTypes.map((item) => (
                        <Link to={`/${item.id}`}>
                            <div className={
                                classnames(
                                    "flex flex-col items-center text-lg py-1",
                                    {
                                        "text-zomato-400 relative":
                                            type === item.id
                                    })} >

                                {item.icon}
                                <h1 className="text-sm">{item.name}</h1>
                                <div className={type === item.id && " absolute w-full -top-4 border-t-4 border-zomato-400 text-zomato-400"} />
                            </div>
                        </Link>

                    ))
                }
            </div>
        </>
    )
}

const PcFoodTabs = () => {
    const { type } = useParams();
    const [allTypes, setallTypes] = useState([
        {
            id: "delivery",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery",
            activeColor: "yellow"
        },

        {
            id: "dining",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: "Dining Out",
            activeColor: "blue"
        },

        {
            id: "night",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name: "NightLife",
            activeColor: "purple"
        },

        {
            id: "nutri",
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name: "Nutrition",
            activeColor: "yellow"
        }
    ])
    return (
        <>
            <div className="mt-8 hidden lg:flex container mx-auto px-20 gap-16">
                {allTypes.map((item) => (
                    <Link to={`/${item.id}`}>
                        <div className={classnames(
                            "flex items-center gap-2 pb-2",
                            { "border-b-4 border-zomato-400": type === item.id })}>
                            <div className={classnames("w-16 h-16 bg-gray-200 p-2 rounded-full",
                                { [`bg-${item.activeColor}-300`]: type === item.id })}>
                                <img src={type === item.id ? item.imageActive : item.imageDefault} alt="Delivery" className="w-full h-full" />
                            </div>
                            <h1 className={type === item.id ? "text-lg text-zomato-400" : "text-lg text-gray-700"}>{item.name}</h1>
                        </div>
                    </Link>

                ))}
            </div>
        </>
    )
}


const FoodTabs = () => {
    return (
        <>
            <div className=" w-full ">
                <MobFoodTabs />
                <PcFoodTabs />
            </div>
        </>
    )
}

export default FoodTabs;
