import React from 'react'
import trending_icon from '../../assets/trending/trending_icon.png'
import { Carousel } from "flowbite-react";
import trending_img_01 from "../../assets/trending/trending_img_01.jpg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Container from '../Container/Container';
// import './App.css'

function Trending() {
    const filterButtons = [
        "all items",
        "sales",
        "featured",
        "best seller",
        "top rated"
    ];
    return (
        // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        //   <Carousel slideInterval={1000} slide={true}>

        //     <p>lorem5</p>
        //     <p>loremasdfasdfa</p>
        //   </Carousel>
        // </div>


        <div className='mt-[50px] mb-[60px]'>
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
                                        className='font-heading capitalize text-gray-600 border border-button/50 
                                      hover:bg-button hover:text-white py-2 px-4 rounded-[10px] 
                                        font-semibold duration-200 cursor-pointer'
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='border border-gray-400 rounded-[20px] w-[232px] group'>
                            <img src={trending_img_01} alt="trending_img_01" className='rounded-[20px] cursor-pointer mb-3' />

                            <div className='px-4'>
                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                    <p className='ml-2 capitalize font-heading font-medium text-gray-500 text-[13px]'>( 9 reviews )</p>
                                </div>

                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer'>
                                    cat treats for picky cats
                                </p>

                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                    322.50 BDT
                                </p>

                                {/* smooth cart section */}
                                <div className='max-h-0  overflow-hidden group-hover:max-h-[200px]  transition-all duration-300'>
                                    <div className='flex items-center justify-between mb-4 mt-2'>
                                        <div className='flex items-center'>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer'>-</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center'>1</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer'>+</div>
                                        </div>
                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                            <FaCartArrowDown className='text-[20px] text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Trending


