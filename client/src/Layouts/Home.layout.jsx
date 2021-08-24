import React from 'react'


// components
import Navbar from '../Components/Navbar';
import FoodTabs from '../Components/FoodTabs/';

const HomeLayout = (props) => {
    return (
        <>
            <Navbar/>
            <div className = "container mx-auto px-4 lg:px-20">
                {props.children}
            </div>
            <FoodTabs/>
        </>
    )
}
export default HomeLayout;