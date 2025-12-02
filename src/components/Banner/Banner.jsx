import React from 'react'
import Container from '../Container/Container'
// import banner_element_01 from "../../../assets/banner/banner_element_01.png"
import banner_element_01 from "../../assets/banner/banner_element_01.png"
import banner_element_02 from "../../assets/banner/banner_element_02.png"
import banner_element_03 from "../../assets/banner/banner_element_03.png"
import banner_element_04 from "../../assets/banner/banner_element_04.png"
import banner_element_05 from "../../assets/banner/banner_element_05.png"
import banner_element_06 from "../../assets/banner/banner_element_06.png"
import banner_element_07 from "../../assets/banner/banner_element_07.png"
import banner_img_01 from "../../assets/banner/banner_img_01.png"
import banner_img_02 from "../../assets/banner/banner_img_02.png"
import banner_img_03 from "../../assets/banner/banner_img_03.png"
import banner_img_bg_01 from "../../assets/banner/banner_img_bg_01.png"
import banner_img_bg_02 from "../../assets/banner/banner_img_bg_02.png"
import banner_img_bg_03 from "../../assets/banner/banner_img_bg_03.png"
import { BsArrowRightSquareFill } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import "../Banner/Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from "flowbite-react";

function Banner() {
    return (

        <div>
            <Carousel fade>

                {/* <Carousel.Item>
                    <div className='bg-banner-one relative py-[200px] mb-[50px]'>
                        <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0' />
                        <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12' />
                        <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12' />
                        <div className='absolute right-[50px] top-[200px] z-30'>
                            <img src={banner_element_05} alt="banner_element_05" />
                            <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                        </div>
                        <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30' />
                        <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30' />
                        <img src={banner_img_bg_01} alt="banner_img_bg_01" className='absolute right-[150px] top-[50px]' />
                        <img src={banner_img_01} alt="banner_img_bg_01" className='absolute right-[100px] top-[110px]' />
                        <Container>
                            <div className='flex'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <img src={banner_element_03} alt="banner_element_03" className='animate-bounce' />
                                        <p className='font-subHeading text-[32px] capitalize text-red-btn tracking-widest'>hight rated pet products!</p>
                                    </div>
                                    <div>
                                        <p className='text-[96px] max-w-[650px] capitalize font-bold leading-25 text-heading font-heading'>feed them elite formulas</p>
                                        <p className='text-[18px] capitalize font-medium text-gray-600 mt-5'>fuel your dog with the gold standard of performance nutrition</p>
                                    </div>
                                    <div className='inline-flex items-center bg-red-btn  mt-5 py-3 px-6 gap-3 rounded-[10px] cursor-pointer hover:bg-button duration-300'>
                                        <p className='capitalize font-primary text-[18px] font-bold text-white'>shop now</p>
                                        <BsArrowRightSquareFill className='text-white text-[22px] mt-0.5' />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item> */}

                <Carousel.Item>
                    <div className='bg-banner-two relative py-[200px] mb-[50px]'>
                        <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0' />
                        <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12' />
                        <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12' />
                        <div className='absolute right-[50px] top-[200px] z-30'>
                            <img src={banner_element_05} alt="banner_element_05" />
                            <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                        </div>
                        <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30' />
                        <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30' />
                        <img src={banner_img_bg_02} alt="banner_img_bg_02" className='absolute right-[150px] top-[50px]' />
                        <img src={banner_img_02} alt="banner_img_bg_02" className='absolute right-[250px] top-10' />
                        <Container>
                            <div className='flex'>
                                <div>
                                    <div className='flex items-center gap-3 '>
                                        <img src={banner_element_03} alt="banner_element_03" className='animate-bounce' />
                                        <p className='font-subHeading text-[32px] capitalize text-red-btn tracking-widest'>exclusive launch!</p>
                                    </div>
                                    <div>
                                        <p className='text-[96px] max-w-[650px] capitalize font-bold leading-25 text-heading font-heading'>toy treasure for your pets</p>
                                        <p className='text-[18px] capitalize font-medium text-gray-600 mt-5'>healthy and nutritional food for cat & poppies</p>
                                    </div>
                                    <div className='inline-flex items-center bg-red-btn  mt-5 py-3 px-6 gap-3 rounded-[10px] cursor-pointer hover:bg-button duration-300'>
                                        <p className='capitalize font-primary text-[18px] font-bold text-white'>shop now</p>
                                        <BsArrowRightSquareFill className='text-white text-[22px] mt-0.5' />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <div className='bg-banner-three relative py-[200px] mb-[50px]'>
                        <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0' />
                        <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12' />
                        <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12' />
                        <div className='absolute right-[120px] top-20 z-30'>
                            <img src={banner_element_05} alt="banner_element_05" />
                            <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                        </div>
                        <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30' />
                        <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30' />
                        <img src={banner_img_bg_03} alt="banner_img_bg_03" className='absolute right-[150px] top-[50px]' />
                        <img src={banner_img_03} alt="banner_img_bg_03" className='absolute right-[230px] top-[150px]' />
                        <Container>
                            <div className='flex'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <img src={banner_element_03} alt="banner_element_03" className='animate-bounce' />
                                        <p className='font-subHeading text-[32px] capitalize text-red-btn tracking-widest'>everything & anything pets!</p>
                                    </div>
                                    <div>
                                        <p className='text-[96px] max-w-[650px] capitalize font-bold leading-25 text-heading font-heading'>the clearance sales event</p>
                                        <p className='text-[18px] capitalize font-medium text-gray-600 mt-5'>fuel your dog with the gold standard of performance nutrition</p>
                                    </div>
                                    <div className='inline-flex items-center bg-red-btn mt-5 py-3 px-6 gap-3 rounded-[10px] cursor-pointer hover:bg-button duration-300'>
                                        <p className='capitalize font-primary text-[18px] font-bold text-white'>shop now</p>
                                        <BsArrowRightSquareFill className='text-white text-[22px] mt-0.5' />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item> */}

            </Carousel>
        </div>

    
   
    )
}

export default Banner