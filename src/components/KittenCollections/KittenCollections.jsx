import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartArrowDown, FaCat } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";
import { ImSearch, ImCross } from "react-icons/im";
import Container from '../Container/Container';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import KittenCollectionsData, { categories } from './KittenCollectionsData';

function KittenCollections() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = KittenCollectionsData.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

        const categoryMatch = selectedCategory.toLowerCase() === "all" ||
            product.category?.toLowerCase() === selectedCategory.toLowerCase();

        return titleMatch && categoryMatch;
    });

    return (
        <div className='mt-[50px] relative'>
            <Container>
                <div>
                    <div className='flex justify-between items-center mb-10 relative'>
                        <div className='flex gap-3 items-center'>
                            <FaCat className='text-red-btn text-[40px]' />
                            <p className='font-heading text-[36px] capitalize font-bold'>collections for kittens</p>
                        </div>
                        <div className='flex items-center gap-2 border border-button px-3 h-[35px] rounded-[5px] w-[200px] absolute right-29 top-[19px]'>
                            <ImSearch className='text-button shrink-0' />

                            <input
                                type="text"
                                placeholder="Search for Kittens..."
                                className='outline-none bg-transparent w-full text-[14px] placeholder:font-primary placeholder:font-semibold font-primary font-semibold'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            {searchQuery && (
                                <ImCross
                                    className='text-[10px] text-gray-400 cursor-pointer hover:text-red-btn transition-all shrink-0'
                                    onClick={() => setSearchQuery("")} 
                                />
                            )}
                        </div>
                    </div>

                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-2 border-2 border-red-btn rounded-[20px] px-6 h-[315px] flex flex-col justify-center'>
                            {["all", ...categories].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCategory(item)}
                                    className='flex items-center gap-2 group cursor-pointer border-b last:border-0'
                                >
                                    <PiPawPrintFill className={`text-[18px] duration-200 group-hover:text-red-btn ${selectedCategory.toLowerCase() === item.toLowerCase() ? "text-red-btn" : "text-gray-500"}`} />
                                    <p className={`capitalize font-heading font-medium duration-200 text-[18px] py-1 group-hover:text-red-btn ${selectedCategory.toLowerCase() === item.toLowerCase() ? "text-red-btn" : "text-black"}`}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='col-span-10'>
                            {filteredProducts.length > 0 ? (
                                <Carousel
                                    key={selectedCategory}
                                    plugins={[
                                        Autoplay({
                                            delay: 2000,
                                            stopOnMouseEnter: true,
                                            stopOnInteraction: false,
                                        }),
                                    ]}
                                    opts={{
                                        align: "start",
                                        loop: filteredProducts.length > 5,
                                    }}>
                                    <CarouselContent>
                                        {filteredProducts.map((product) => (
                                            <CarouselItem key={product.id} className='basis-1/5'>
                                                <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out mb-[75px] hover:mb-0'>
                                                    <img
                                                        src={product.img}
                                                        alt={product.title}
                                                        className='rounded-[20px] cursor-pointer mb-3 w-full'
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
                                                                return <FaRegStar key={i} className="text-gray-300" />;
                                                            })}

                                                            <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                                                ({product.rating} reviews)
                                                            </p>
                                                        </div>
                                                        <p className='font-heading font-semibold capitalize text-[16px] mb-2 truncate'>{product.title}</p>
                                                        <p className='font-heading font-semibold text-[22px] text-button mb-3'>{product.price}</p>

                                                        <div className="max-h-0 overflow-hidden transition-all ease-out duration-150 group-hover:max-h-[200px] group-hover:ease-in group-hover:duration-500">
                                                            <div className='flex items-center justify-between mb-4 mt-2'>
                                                                <div className='flex items-center'>
                                                                    <div className='h-[42px] w-[35px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300'>-</div>
                                                                    <div className='h-[42px] w-[35px] border-t border-b flex items-center justify-center border-gray-300'>1</div>
                                                                    <div className='h-[42px] w-[35px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300'>+</div>
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
                                        <CarouselPrevious className="cursor-pointer static translate-y-0 border-button text-button hover:bg-button hover:text-white h-[35px] w-[35px] rounded-[5px]" />
                                        <CarouselNext className="cursor-pointer static translate-y-0 border-button text-button hover:bg-button hover:text-white h-[35px] w-[35px] rounded-[5px]" />
                                    </div>
                                </Carousel>
                            ) : (
                                <div className="text-center py-20 text-gray-500 h-[315px] border rounded-[20px] flex flex-col justify-center font-heading">
                                    <p className='text-[22px] capitalize'>No products found in " {selectedCategory} "</p>
                                    <button
                                        onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                                        className="text-red-btn mt-2 cursor-pointer text-[20px] capitalize font-medium"
                                    >
                                        view all products
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default KittenCollections