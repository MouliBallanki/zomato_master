import React from 'react'
import Slider from "react-slick";
// components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../Arrows.carousel';

const DeliveryCarousel = () => {
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/dish_images/5f1305ff860aeebffbca92ea1d8d1cf31612436209.png",
            food: "Idli",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/9c179e4b2beb3b5e026346f946e502931613232962.png",
            food: "Vada",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            food: "Paratha",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
            food: "Sandwich",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/3465163d7c0116df60868ec57cf9ae661612436486.png",
            food: "Tea",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/90c41184dfa02a8b9b6550f2295d85781620888404.png",
            food: "Juices",
        }
    ];

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };
    return (
        <>
            <h1 className="  text-lg lg:text-3xl font-semibold my-4 text-gray-800">Inspriation for your first Order </h1>
            <div className=" lg:hidden flex flex-wrap  justify-between ">
                {
                    categories.map((food) => (
                        <DeliveryCategory {...food} />

                    ))
                }
            </div>

            <div className="hidden lg:block">
                <Slider {...settings}>
                    {
                        categories.map((food) => (
                            <DeliveryCategory {...food} />

                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default DeliveryCarousel;
