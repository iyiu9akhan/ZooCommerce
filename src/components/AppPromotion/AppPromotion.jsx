import React from 'react'
import Container from '../Container/Container'
import { FaBirthdayCake } from "react-icons/fa";
import appStore_img from "../../assets/appPromotion/appstore.jpg"
import googlepPlayStore_img from "../../assets/appPromotion/googleplay.jpg"
import { BsArrowRightSquareFill } from 'react-icons/bs';
import appPromotions_element01 from "../../assets/appPromotion/appPromotions_element01.png"
import appPromotions_element02 from "../../assets/appPromotion/appPromotions_element02.png"
import appPromotions_element03 from "../../assets/appPromotion/appPromotions_element03.png"
import appPromotions_element04 from "../../assets/appPromotion/appPromotions_element04.png"
import appPromotions_element05 from "../../assets/appPromotion/appPromotions_element05.png"
import appPromotions_element06 from "../../assets/appPromotion/appPromotions_element06.png"
import appPromotions_element07 from "../../assets/appPromotion/appPromotions_element07.png"
import appPromotions_mobile_img from "../../assets/appPromotion/appPromotions_mobile_img.png"
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function AppPromotion() {
    return (
        <div className='relative  bg-appPromotion_bg overflow-hidden pointer-events-none select-none'>
            <svg viewBox='0 0 1920 46' className='absolute -top-5 fill-white z-999'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>
            <img src={appPromotions_element01} alt="appPromotions_element01" className='absolute left-0 ' />
            <Container>
                <div className='grid grid-cols-12 justify-between gap-10 py-[150px]'>
                    <div className='col-span-4 flex-col flex gap-2 items-center'>
                        <FaBirthdayCake className='text-[40px] text-red-btn' />
                        <p className='font-heading font-bold text-[36px] capitalize w-100 text-center leading-10'>exclusive birthday <span className='block'>&</span> new trending</p>
                        <p className='font-subHeading capitalize text-red-btn text-[32px]'>your rewards</p>
                        <p className='font-heading font-medium text-[16px] text-gray-500 text-center'>Complete your online pet profile for a surprise email offer during their special month.</p>
                        <div className='flex items-center gap-10 mt-8'>
                            <img src={googlepPlayStore_img} alt="googlePlayStoreImg" className='rounded-[10px] cursor-pointer pointer-events-auto'/>
                            <img src={appStore_img} alt="appStoreImg" className='rounded-[10px] cursor-pointer pointer-events-auto' />
                        </div>
                    </div>
                    <div className='col-span-5 relative'>
                        <svg className='left-6 absolute z-990 w-full h-full'>
                            <path d="M 465.596 174.321 C 491.712 269.429 434.803 376.621 351.778 433.53 C 268.753 490.05 160.002 496.286 88.2807 445.224 C 16.1698 394.552 -18.5214 286.97 9.93318 189.133 C 37.998 91.296 129.598 2.81401 229.774 0.0854928 C 330.339 -3.03282 439.48 79.6024 465.596 174.321 Z" fill="#E595ED"></path>
                        </svg>
                        <img src={appPromotions_mobile_img} alt="appPromotions_mobile_img" className='absolute z-995 left-35' />
                        <img src={appPromotions_element07} alt="appPromotions_element07" className='absolute z-999 left-9 -bottom-20' />
                        <img src={appPromotions_element06} alt="appPromotions_element06" className='absolute z-999 right-10 -bottom-20' />
                    </div>
                    <div className='col-span-3 flex justify-end'>
                        <div className='flex flex-col justify-center gap-8'>
                            <p className='font-heading font-bold text-[20px] w-[250px]'>How to complete your pet’s profile</p>
                            <ul className='font-heading font-medium text-[16px] capitalize text-gray-500 flex flex-col gap-4'>
                                <div className='flex items-center gap-3'>
                                    <span className='h-8 w-8 bg-button rounded-full text-white flex items-center justify-center font-bold text-[18px]'>1</span> <li className=''>login to <span className='text-black cursor-pointer'>your reward</span> account</li>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='h-8 w-8 bg-button rounded-full text-white flex items-center justify-center font-bold text-[18px]'>2</span>   <li className=''>scroll down to <span className='text-black cursor-pointer'>my pets</span></li>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='h-8 w-8 bg-button rounded-full text-white flex items-center justify-center font-bold text-[18px]'>3</span>  <li>add your pet profile details</li>
                                </div>
                            </ul>
                            <div>
                                <p className='font-heading font-medium text-[16px] capitalize text-gray-500 mb-3'>not a your rewards member yet?</p>
                                <div className='flex items-center gap-3 text-[20px] cursor-pointer group'>
                                    <p className='capitalize font-heading font-semibold text-[18px] text-red-btn group-hover:text-button duration-300'>read more</p>
                                    <BsArrowRightSquareFill className='text-red-btn group-hover:text-button duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-[20px] relative p-[85px] mb-[120px] flex justify-between items-center overflow-hidden'>
                    <img src={appPromotions_element04} alt="appPromotions_element04" className='absolute top-0 left-0 rounded-tl-[20px]' />
                    <img src={appPromotions_element05} alt="appPromotions_element05" className='absolute top-3 left-1/2 -translate-x-1/2 pointer-events-none select-none'/>
                    <div className='flex gap-5 items-center'>
                        <div className='h-15 w-15 bg-red-btn rounded-full flex items-center justify-center'>
                            <TbTruckDelivery className='text-[40px] text-white' />
                        </div>
                        <div>
                            <p className='font-heading font-bold capitalize text-[20px]'>free shipping</p>
                            <p className='font-heading font-medium capitalize [text-16px] text-gray-500'>orders over $99 free shipping!</p>
                        </div>
                    </div>
                    <img src={appPromotions_element04} alt="appPromotions_element04" className='absolute top-0 left-0 rounded-tl-[20px]' />
                    <div className='flex gap-5 items-center'>
                        <div className='h-15 w-15 bg-red-btn rounded-full flex items-center justify-center'>
                            <MdSupportAgent className='text-[40px] text-white' />
                        </div>
                        <div>
                            <p className='font-heading font-bold capitalize text-[20px]'>customer services</p>
                            <p className='font-heading font-medium capitalize [text-16px] text-gray-500'>click the chat with us botton!</p>
                        </div>
                    </div>
                    <img src={appPromotions_element04} alt="appPromotions_element04" className='absolute top-0 left-0 rounded-tl-[20px]' />
                    <div className='flex gap-5 items-center'>
                        <div className='h-15 w-15 bg-red-btn rounded-full flex items-center justify-center'>
                            <RiVerifiedBadgeFill className='text-[40px] text-white' />
                        </div>
                        <div>
                            <p className='font-heading font-bold capitalize text-[20px]'>our guarantee</p>
                            <p className='font-heading font-medium capitalize [text-16px] text-gray-500'>90 days satisfaction guarantee</p>
                        </div>
                    </div>
                    <img src={appPromotions_element03} alt="appPromotions_element03" className='absolute bottom-0 right-0 rounded-br-[20px]' />
                </div>
            </Container>
            <img src={appPromotions_element02} alt="appPromotions_element02" className='absolute right-0 -bottom-10' />
            <svg viewBox='0 0 1920 46' className='absolute -bottom-6 fill-white rotate-180 z-999'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>
        </div>
    )
}

export default AppPromotion