import React, { useState } from 'react'
// import trending_icon from '../../assets/trending/trending_icon.png'
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartArrowDown } from "react-icons/fa";
import Container from '../Container/Container';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import trendingProducts from '../Trending/TrendingData'
import { IoPawSharp } from "react-icons/io5";

function Trending() {
    const [activeTab, setActiveTab] = useState("all items");
    const filterButtons = [
        "all items",
        "sales",
        "featured",
        "best seller",
        "top rated"
    ];
    const filteredProducts = trendingProducts.filter((product) => {
        if (activeTab === "all items") return true;
        return product.category?.toLowerCase() === activeTab.toLowerCase();
    });
    return (
        <div className='mt-[50px]  relative'>
            <Container>
                <div>
                    <div className='flex justify-between items-center mb-10'>
                        <div className='flex gap-3 items-center'>
                            {/* <img src={trending_icon} alt="trending_icon" className='h-[45px] w-[45px]' /> */}
                            <IoPawSharp className='text-red-btn text-[50px]' />
                            <p className='font-heading text-[36px] capitalize font-bold'>trending this week</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-3 '>
                                {filterButtons.map((label, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveTab(label)}
                                        className={`font-heading capitalize py-2 px-4 rounded-[10px] font-semibold duration-200 cursor-pointer border ${activeTab === label
                                                ? 'bg-red-btn text-white border-red-btn'
                                                : 'text-gray-600 border-gray-400 hover:border-red-btn hover:bg-red-btn hover:text-white' 
                                            }`}
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Carousel
                            key={activeTab}
                            plugins={[
                                Autoplay({
                                    delay: 1500,
                                    stopOnMouseEnter: true,
                                    stopOnInteraction: false,
                                }),
                            ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}>
                            <CarouselContent>
                                {filteredProducts.map((product) => (
                                    <CarouselItem key={product.id} className='basis-1/6'>
                                        <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out mb-[75px] hover:mb-0'>
                                            <img
                                                src={product.img}
                                                alt={product.title}
                                                className='rounded-[20px] cursor-pointer mb-3'
                                            />
                                            <div className='px-4'>
                                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                    {[...Array(5)].map((_, i) => {
                                                        if (i < Math.floor(product.rating)) {
                                                            return <FaStar key={i} />;
                                                        }
                                                        if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                                                            return <FaStarHalfAlt key={i} />;
                                                        }
                                                        return <FaRegStar key={i} className="text-gray-300" />
                                                    })}

                                                    <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                                        ({product.rating} reviews)
                                                    </p>
                                                </div>
                                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                    {product.title}
                                                </p>
                                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                    {product.price}
                                                </p>
                                                <div className="max-h-0 overflow-hidden transition-all ease-out duration-150 group-hover:max-h-[200px] group-hover:ease-in group-hover:duration-500">
                                                    <div className='flex items-center justify-between mb-4 mt-2'>
                                                        <div className='flex items-center'>
                                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                                            <div className='h-[42px] w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                                        </div>
                                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                                            <FaCartArrowDown className='text-[20px] text-white' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="cursor-pointer border-button text-button hover:text-white hover:bg-button hover:border-button h-[30px] w-[30px] rounded-[5px]" />
                            <CarouselNext className="cursor-pointer border-button text-button hover:text-white hover:bg-button hover:border-button h-[30px] w-[30px] rounded-[5px]" />
                        </Carousel>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Trending


