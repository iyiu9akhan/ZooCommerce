import React from 'react'
import Container from '../Container/Container'
import trending_icon from '../../assets/trending/trending_icon.png'
import { BsArrowRightSquareFill } from "react-icons/bs";
import categoriesData, { categoriesSlider } from "../Categories/CategoriesData";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoPawSharp } from "react-icons/io5";

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "../ui/carousel"
// import Autoplay from "embla-carousel-autoplay";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaCartArrowDown } from "react-icons/fa";
import Countdown from 'react-countdown';
import categories_shape_01 from "../../assets/categories/categories_shape_01.png"
import categories_shape_02 from "../../assets/categories/categories_shape_02.png"
import categories_shape_03 from "../../assets/categories/categories_shape_03.png"
import categories_shape_04 from "../../assets/categories/categories_shape_04.png"

function Categories() {

    // const targetDate = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    const targetDate = localStorage.getItem('countdownEnd') || (() => {
        const date = Date.now() + 30 * 24 * 60 * 60 * 1000;
        localStorage.setItem('countdownEnd', date);
    })();

    return (
        <div className='my-[50px]'>
            <Container>
                <div className='mx-3 md:mx-0'>
                    <div className='md:flex justify-between items-center mb-10 '>
                        <div className='flex gap-3 items-center mb-3 md:mb-0'>
                            {/* <img src={trending_icon} alt="trending_icon" className='h-[45px] w-[45px]' /> */}
                            <IoPawSharp className='text-red-btn text-[40px] md:text-[50px]' />
                            <p className='font-heading text-[30px] md:text-[36px] capitalize font-bold'>browse by categories</p>
                        </div>
                        <div className='flex items-center gap-3 text-[20px] md:justify-between cursor-pointer group'>
                            <p className='capitalize font-heading font-semibold text-[15px]  text-red-btn group-hover:text-button duration-300'>view all products</p>
                            <BsArrowRightSquareFill className='text-red-btn group-hover:text-button duration-300' />
                        </div>
                    </div>
                    <div className='md:flex justify-between md:gap-6'>
                        <div className='w-full md:w-8/12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 md:gap-y-9 items-center mb-20 md:mb-0'>
                            {categoriesData.map((item) => (
                                <div className={`${item.bg_color} text-center capitalize rounded-[20px] py-8 cursor-auto group relative`}>
                                    <img src={item.img} alt={item.title} className=' bg-white rounded-full m-auto p-5 mb-4 md:group-hover:scale-90 md:scale-100 duration-300 pointer-events-none select-none' />
                                    <p className='font-bold font-primary text-[20px] select-none'>{item.title}</p>
                                    <p className='font-heading font-medium text-gray-600 select-none'>{item.item} items</p>
                                    <div className='absolute -bottom-[35px] left-1/2 transform -translate-x-1/2 bg-button p-3 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:scale-0 md:group-hover:scale-100 cursor-pointer hover:bg-red-btn border-7 border-white'>
                                        <IoArrowRedoSharp className='text-white text-[25px]' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='w-full h-130 md:h-auto md:w-4/12 bg-categoriesCounterBG rounded-[20px] flex flex-col items-center  relative pointer-events-none select-none'>

                            {/* <Carousel 
                                className="rounded-[20px] h-full"
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                        // stopOnMouseEnter: true,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}>
                                <CarouselContent>
                                    {categoriesSlider.map((slider) => (
                                        <CarouselItem>
                                            <div >
                                                <img
                                                    src={slider.img}
                                                    alt="slider_img"
                                                    className='rounded-[20px]'
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <p className='font-subHeading capitalize text-orange-btn tracking-widest text-[27px] text-center mt-4'><span className='text-black text-[30px]'>"</span>your next obsession starts here<span className='text-black text-[30px]'>"</span></p>
                            </Carousel> */}

                            <p className='text-[40px] md:text-[50px] capitalize font-heading font-bold text-white text-center leading-11 md:leading-13 mt-10 mb-5 select-none'>something new just landed</p>
                            <p className='mb-5 text-white font-bold font-primary text-[19px] md:text-[20px] select-none'>Hurry up ! Claim your deal</p>
                            <Countdown
                                date={parseInt(targetDate)}
                                renderer={({ days, hours, minutes, seconds }) => (
                                    <div className='flex font-heading text-white font-bold text-[25px] text-center gap-3 select-none'>
                                        <div>
                                            <p className='w-[55px] h-[55px] bg-button rounded-[15px] flex items-center justify-center -mb-[7px]'>{days}</p>
                                            <span className='text-[14px]'>Days</span>
                                        </div>
                                        <div>
                                            <p className='w-[55px] h-[55px] bg-button rounded-[15px] flex items-center justify-center -mb-[7px]'>{hours}</p>
                                            <span className='text-[14px]'>Hrs</span>
                                        </div>
                                        <div>
                                            <p className='w-[55px] h-[55px] bg-button rounded-[15px] flex items-center justify-center -mb-[7px]'>{minutes}</p>
                                            <span className='text-[14px]'>Mins</span>
                                        </div>
                                        <div>
                                            <p className='w-[55px] h-[55px] bg-button rounded-[15px] flex items-center justify-center -mb-[7px]'>{seconds}</p>
                                            <span className='text-[14px]'>Secs</span>
                                        </div>
                                    </div>
                                )}
                            />
                            <img src={categories_shape_01} alt="categories_shape_01" className='absolute opacity-30 -bottom-8' />
                            <img src={categories_shape_02} alt="categories_shape_02" className='absolute bottom-2 h-50 w-60 md:left-35' />
                            <img src={categories_shape_03} alt="categories_shape_03" className='absolute  bottom-35 left-5' />
                            <img src={categories_shape_04} alt="categories_shape_04" className='absolute top-75 md:top-40 right-5' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Categories