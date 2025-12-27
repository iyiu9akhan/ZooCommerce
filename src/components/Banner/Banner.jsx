import React from 'react'
import Container from '../Container/Container'
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
import "../Banner/Banner.css";
import { Carousel } from "flowbite-react";
import { MdArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";

function Banner() {

    const CustomLeftControl = () => (
        <div className="hover:bg-button hover:text-white duration-300 text-button rounded-[10px] cursor-pointer p-1 border border-button/50 hover:border hover:border-button/50">
            <MdArrowLeft className='text-[40px]' />
        </div>
    );
    const CustomRightControl = () => (
        <div className="hover:bg-button hover:text-white duration-300 text-button rounded-[10px] cursor-pointer p-1 border border-button/50 hover:border hover:border-button/50">
            <MdOutlineArrowRight className='text-[40px]' />
        </div>
    )

    return (

        <div className='relative'>
            <Carousel slideInterval={5000}
                // leftControl="&nbsp;"
                // rightControl="&nbsp;"
                leftControl={<CustomLeftControl />}
                rightControl={<CustomRightControl />}
                //  leftControl={<div />}
                // rightControl={<div />}
                indicators={false}
            >
                <div className='bg-banner-one relative py-[200px] overflow-hidden cursor-default'>
                    {/* {CustomGroupedControls} */}
                    <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0 pointer-events-none select-none' />
                    <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12 pointer-events-none select-none' />
                    <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12 pointer-events-none select-none' />
                    <div className='absolute right-[50px] top-[200px] z-30 pointer-events-none select-none'>
                        <img src={banner_element_05} alt="banner_element_05" />
                        <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                    </div>
                    <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30 pointer-events-none select-none' />
                    <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30 pointer-events-none select-none' />
                    <img src={banner_img_bg_01} alt="banner_img_bg_01" className='absolute right-[150px] top-[50px] pointer-events-none select-none' />
                    <img src={banner_img_01} alt="banner_img_bg_01" className='absolute right-[100px] top-[110px] pointer-events-none select-none' />
                    <Container>
                        <div className='flex'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <img src={banner_element_03} alt="banner_element_03" className='animate-bounce pointer-events-none select-none' />
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

                <div className='bg-banner-three relative py-[200px] overflow-hidden cursor-default'>
                    <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0 pointer-events-none select-none' />
                    <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12 pointer-events-none select-none' />
                    <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12 pointer-events-none select-none' />
                    <div className='absolute right-[120px] top-20 z-30 pointer-events-none select-none'>
                        <img src={banner_element_05} alt="banner_element_05" />
                        <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                    </div>
                    <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30 pointer-events-none select-none' />
                    <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30 pointer-events-none select-none' />
                    <img src={banner_img_bg_03} alt="banner_img_bg_03" className='absolute right-[150px] top-[50px] pointer-events-none select-none' />
                    <img src={banner_img_03} alt="banner_img_bg_03" className='absolute right-[230px] top-[150px] pointer-events-none select-none' />
                    <Container>
                        <div className='flex'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <img src={banner_element_03} alt="banner_element_03" className='animate-bounce pointer-events-none select-none' />
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

                <div className='bg-banner-two relative py-[200px] overflow-hidden cursor-default'>
                    <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0 pointer-events-none select-none' />
                    <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12 pointer-events-none select-none' />
                    <img src={banner_element_04} alt="banner_element_04" className='absolute right-[750px] top-12 pointer-events-none select-none' />
                    <div className='absolute right-[50px] top-[200px] z-30 pointer-events-none select-none'>
                        <img src={banner_element_05} alt="banner_element_05" />
                        <p className='absolute top-[50px] right-[55px] font-heading text-[64px] text-center font-bold text-white capitalize leading-[55px]'>50% <span className='text-[40px] block'>off</span></p>
                    </div>
                    <img src={banner_element_06} alt="banner_element_06" className='absolute right-[60px] bottom-[280px] z-30 pointer-events-none select-none' />
                    <img src={banner_element_07} alt="banner_element_07" className='absolute left-[650px] bottom-0 z-30 pointer-events-none select-none' />
                    <img src={banner_img_bg_02} alt="banner_img_bg_02" className='absolute right-[150px] top-[50px] pointer-events-none select-none' />
                    <img src={banner_img_02} alt="banner_img_bg_02" className='absolute right-[250px] top-10 pointer-events-none select-none' />
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
            </Carousel>
            <svg viewBox='0 0 1920 46' className='absolute -bottom-6 fill-white rotate-180'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>
        </div >
    )
}

export default Banner