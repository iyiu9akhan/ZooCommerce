import React from 'react'
import trending_icon from '../../assets/trending/trending_icon.png'
import trending_img_01 from "../../assets/trending/trending_img_01.jpg"
import trending_img_02 from "../../assets/trending/trending_img_02.jpg"
import trending_img_03 from "../../assets/trending/trending_img_03.jpg"
import trending_img_04 from "../../assets/trending/trending_img_04.jpg"
import trending_img_05 from "../../assets/trending/trending_img_05.jpg"
import trending_img_06 from "../../assets/trending/trending_img_06.jpg"
import trending_img_07 from "../../assets/trending/trending_img_07.jpg"
import trending_img_08 from "../../assets/trending/trending_img_08.jpg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Container from '../Container/Container';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay";


function Trending() {
    const filterButtons = [
        "all items",
        "sales",
        "featured",
        "best seller",
        "top rated"
    ];
    return (

        <div className='mt-[50px] mb-[60px] relative'>
            <Container>
                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={trending_icon} alt="trending_icon" className='h-[45px] w-[45px]' />
                            <p className='font-heading text-[36px] capitalize font-bold'>trending this week</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-3 '>
                                {filterButtons.map((label, index) => (
                                    <div
                                        key={index}
                                        className='font-heading capitalize text-gray-600 border border-gray-400 
                                      hover:bg-button hover:text-white py-2 px-4 rounded-[10px] 
                                        font-semibold duration-200 cursor-pointer'
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div >
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}>

                            <CarouselContent>

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_01} alt="trending_img_01" className='rounded-[20px] cursor-pointer mb-3' />

                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                cat treats for picky cats
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                322.50 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_02} alt="trending_img_02" className='rounded-[20px] cursor-pointer mb-3' />

                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                grass hut toy for pet
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                970 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_03} alt="trending_img_03" className='rounded-[20px] cursor-pointer mb-3' />

                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate '>
                                                benebone large 4-pack dog
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                575 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_04} alt="trending_img_04" className='rounded-[20px] cursor-pointer mb-3' />

                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                dog treat dispensing chew toy
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                140 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_01} alt="trending_img_01" className='rounded-[20px] cursor-pointer mb-3' />

                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                cat treats for picky cats
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                322.50 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_05} alt="trending_img_05" className='rounded-[20px] cursor-pointer mb-3' />
                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                dry dog food small paws
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                825 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_06} alt="trending_img_06" className='rounded-[20px] cursor-pointer mb-3' />
                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                wellness soft puppy bites
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                970 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_07} alt="trending_img_07" className='rounded-[20px] cursor-pointer mb-3' />
                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                rubber band flyer dog toy
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                75 BDT
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

                                <CarouselItem className='basis-1/6'>
                                    <div className='border border-gray-300 rounded-[20px] h-[315px] hover:h-[385px] group transition-all duration-300 ease-in-out'>
                                        <img src={trending_img_08} alt="trending_img_08" className='rounded-[20px] cursor-pointer mb-3' />
                                        <div className='px-4'>
                                            <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                                <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                            </div>

                                            <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                                meow mix irresistibles soft cat
                                            </p>

                                            <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                                390 BDT
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



                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />

                        </Carousel>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Trending


