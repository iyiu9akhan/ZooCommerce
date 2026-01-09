import React, { useEffect, useState } from 'react'
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
import { Skeleton } from "@/components/ui/skeleton";
import KittenCollectionsData, { kittenCategories } from './KittenCollectionsData';
import { AiFillPicture } from "react-icons/ai";

function KittenCollections() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, selectedCategory])

    const filteredProducts = KittenCollectionsData.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

        const categoryMatch = selectedCategory.toLowerCase() === "all" ||
            product.category?.toLowerCase() === selectedCategory.toLowerCase();
        return titleMatch && categoryMatch;
    });

    const ProductSkeleton = () => (
        <div className="border border-gray-200 rounded-[20px] h-[290px] md:h-80 mb-[75px] ">
            <div className='flex relative'>
                <Skeleton className="h-[165px] md:h-[200px] w-full rounded-[20px]" />
                <AiFillPicture className='absolute text-[120px] text-gray-200 left-1/2 top-1/2 -translate-1/2' />
            </div>
            <div className='p-4'>
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-5 w-full mb-4" />
                <Skeleton className="h-6 w-20" />
            </div>
        </div>
    );

    return (
        <div className='mt-[50px] relative'>
            <Container>
                <div className='mx-3 md:mx-auto'>
                    <div className='flex justify-between items-center mb-10 relative'>
                        <div className='flex gap-3 items-center mb-5 md:mb-0'>
                            <FaCat className='text-red-btn text-[40px] md:text-[50px]' />
                            <p className='font-heading text-[30px] md:text-[36px] capitalize font-bold'>collections for kittens</p>
                        </div>
                        <div className='flex items-center gap-2 border border-button px-3 h-[35px] rounded-[5px] w-[200px] absolute md:right-29 top-[60px] md:top-[19px]'>
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

                    <div className='md:grid md:grid-cols-12 gap-5'>
                        <div className='col-span-2 md:border-2 md:border-red-btn rounded-[20px] mb-5 md:mb-0 md:px-6 md:h-[315px] grid grid-cols-3 gap-y-2 gap-x-3 items-center md:items-stretch md:flex md:flex-col md:justify-center md:gap-x-0 md:gap-y-0'>
                            {["all", ...kittenCategories].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCategory(item)}
                                    className={`flex items-center gap-2 group cursor-pointer border-gray-400 border rounded-[10px] px-2 md:px-0 md:rounded-none md:border-gray-300 md:border-0 md:border-b md:last:border-0 ${selectedCategory.toLowerCase() === item.toLowerCase() ? "bg-red-btn border-red-btn text-white md:bg-transparent" : "text-gray-500"} `}
                                >
                                    <PiPawPrintFill className={`text-[18px] duration-200 md:group-hover:text-red-btn ${selectedCategory.toLowerCase() === item.toLowerCase() ? "text-white md:text-red-btn" : "text-gray-500"}`} />
                                    <p className={`capitalize font-heading font-medium duration-200 text-[15px] md:text-[18px] py-1 md:group-hover:text-red-btn ${selectedCategory.toLowerCase() === item.toLowerCase() ? "text-white md:text-red-btn" : "text-black"}`}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='col-span-10'>
                            {isLoading ? (
                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                                    {[1, 2, 3, 4, 5].map((item, index) => (
                                        <div key={item} className={index >= 2 ? 'hidden md:block' : 'block'}>
                                            <ProductSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : filteredProducts.length > 0 ? (
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
                                            <CarouselItem key={product.id} className='md:basis-1/5 basis-2/4'>
                                                <div className='border border-gray-300 rounded-[20px] h-[285px] hover:h-[340px] md:h-[315px] md:hover:h-[385px] group transition-all duration-300 ease-in-out mb-20 hover:mb-[25px] md:hover:mb-2.5'>
                                                    <img
                                                        src={product.img}
                                                        alt={product.title}
                                                        className='rounded-[20px] cursor-pointer mb-3'
                                                    />
                                                    <div className='px-4'>
                                                        <div className='flex gap-0.5 text-amber-500 items-center mb-1 text-[12px] md:text-[16px]'>
                                                            {[...Array(5)].map((_, i) => {
                                                                if (i < Math.floor(product.rating)) {
                                                                    return <FaStar key={i} />;
                                                                }
                                                                if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                                                                    return <FaStarHalfAlt key={i} />;
                                                                }
                                                                return <FaRegStar key={i} className="text-gray-300" />
                                                            })}

                                                            <p className='ml-2 text-gray-500 text-[11px] md:text-[13px] font-medium'>
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
                                                                    <div className='h-[33px] w-[33px] md:h-[42px] md:w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                                                    <div className='h-[33px] w-[33px] md:h-[42px] md:w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                                                    <div className='h-[33px] w-[33px] md:h-[42px] md:w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                                                </div>
                                                                <div className='h-[33px] w-[33px] md:h-[42px] md:w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                                                    <FaCartArrowDown className=' text-[16px] md:text-[20px] text-white' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className='absolute -top-45 md:-top-[75px] right-0 flex gap-5'>
                                        <CarouselPrevious className="cursor-pointer static translate-y-0 border-button text-button hover:bg-button hover:text-white h-[35px] w-[35px] rounded-[5px]" />
                                        <CarouselNext className="cursor-pointer static translate-y-0 border-button text-button hover:bg-button hover:text-white h-[35px] w-[35px] rounded-[5px]" />
                                    </div>
                                </Carousel>
                            ) : (
                                <div className="text-center py-20 text-gray-500 h-[290px] md:h-[315px] border rounded-[20px] flex flex-col justify-center font-heading mb-[125px] md:mb-20">
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