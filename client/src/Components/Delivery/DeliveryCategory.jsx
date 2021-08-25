import React from 'react'


const DeliverySmCard = ({image , food}) => {
    return (
        <>
            <div className="lg:hidden bg-white shadow-md my-2 rounded-md w-24 md:w-56">
                <div className="w-full h-20">
                    <img src={image}alt="food" className="h-full w-full object-cover rounded-t-md" />
                </div>
                <div>
                    <h1 className="text-sm my-1 font-light text-center">{food}</h1>
                </div>
            </div>
        </>
    )
}

const DeliveryLgCard = () => {
    return(
        <>
            <div className=" hidden lg:block my-2 w-64 h-48">
                <div className="w-full h-full shadow-lg">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/8/59648/120794cd00119657455bbe51514affab_o2_featured_v2.jpg" alt="food" className="h-full w-full object-cover rounded-md" />
                </div>
                <div>
                    <h1 className="text-xl my-1 font-medium">Biriyani</h1>
                </div>
            </div>
        </>
    )
}
const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
        </>
    )
}

export default DeliveryCategory;
