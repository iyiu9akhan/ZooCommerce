import React from 'react'
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
// import trendingProducts from '../Trending/TrendingData'
import { IoPawSharp } from "react-icons/io5";
import KittenCollectionsData, { categories } from './KittenCollectionsData';
// import categories from '../Categories/Categories';
import { FaCat } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";
import { ImSearch } from "react-icons/im";


function KittenCollections() {
    return (
        <div className='mt-[50px]  relative'>
            <Container>
                <div>
                    <div className='flex justify-between items-center mb-10 relative'>
                        <div className='flex gap-3 items-center'>
                            {/* <img src={trending_icon} alt="trending_icon" className='h-[45px] w-[45px]' /> */}
                            <FaCat className='text-red-btn text-[40px]' />
                            <p className='font-heading text-[36px] capitalize font-bold'>collections for kittens</p>
                        </div>
                        <div className='absolute right-30 top-4.5 border border-button h-[35px] w-[35px] flex items-center justify-center rounded-[5px] cursor-pointer'>
                            <ImSearch className='text-[16px] text-button' />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-2 border-2 border-red-btn rounded-[20px] px-6 h-[315px] flex flex-col justify-center'>
                            {categories.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 group cursor-pointer border-b'>
                                    <PiPawPrintFill className='text-[18px] text-gray-500 group-hover:text-red-btn duration-200' />
                                    <p className='capitalize font-heading font-medium group-hover:text-red-btn duration-200 text-[18px] text-black py-1.5'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='col-span-10'>
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                        stopOnMouseEnter: true,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}>
                                <CarouselContent>
                                    {KittenCollectionsData.map((product) => (
                                        <CarouselItem key={product.id} className='basis-1/5'>
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
                                <div className='absolute -top-[75px] right-0 flex gap-5'>
                                    <CarouselPrevious
                                        className="static translate-y-0 cursor-pointer border-button text-button hover:text-white hover:bg-button h-[35px] w-[35px] rounded-[5px]"
                                    />
                                    <CarouselNext
                                        className="static translate-y-0 cursor-pointer border-button text-button hover:text-white hover:bg-button h-[35px] w-[35px] rounded-[5px]"
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default KittenCollections


