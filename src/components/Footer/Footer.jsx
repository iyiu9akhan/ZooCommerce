import React from 'react'
import Container from '../Container/Container'
import footer_logo from "../../assets/footer/footer_logo.png"
import { FiPhoneCall } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi2";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import footerData from './FooterData';
import footer_element01 from "../../assets/footer/footer_element_01.jpg"
import footer_element02 from "../../assets/footer/footer_element_02.png"
import footer_element03 from "../../assets/footer/footer_element_03.png"
import footer_element04 from "../../assets/footer/footer_element_04.png"
import footer_payment from "../../assets/footer/footer_payment.png"
import { IoSend } from "react-icons/io5";

function Footer() {
    return (
        <div className='bg-button relative mt-[85px]'>
            <svg viewBox='0 0 1920 46' className='absolute -top-5 fill-white z-999'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>
            <Container>
                <div className='pt-[120px]'>
                    <div className='flex items-center justify-between border-b pb-18 border-gray-500'>
                        {/* <img src={footer_logo} alt="footer_logo" className='w-[200px]' /> */}
                        <div className='flex items-center gap-5'>
                            <div className='h-14 w-14 bg-white flex items-center justify-center rounded-full text-red-btn text-[22px]'>
                                <FiPhoneCall />
                            </div>
                            <div className='text-white capitalize font-heading'>
                                <p className='text-[16px]'>hotline order</p>
                                <p className='font-bold text-[24px]'>93203950295</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='h-14 w-14 bg-white flex items-center justify-center rounded-full text-red-btn text-[22px]'>
                                <IoMailUnreadOutline />
                            </div>
                            <div className='text-white capitalize font-heading'>
                                <p className='text-[16px]'>email us</p>
                                <p className='font-bold text-[24px] lowercase'>support@example.com</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='h-14 w-14 bg-white flex items-center justify-center rounded-full text-red-btn text-[22px]'>
                                <HiLink />
                            </div>
                            <div className='text-white capitalize font-heading'>
                                <p className='text-[16px] mb-1'>follow us</p>
                                <div className='flex items-center gap-3'>
                                    <ImFacebook2 className='text-[23px] cursor-pointer hover:text-red-btn duration-300' />
                                    <FaSquareXTwitter className='text-[27px] cursor-pointer hover:text-red-btn duration-300' />
                                    <AiFillInstagram className='text-[33px] cursor-pointer hover:text-red-btn duration-300' />
                                    <FaPinterest className='text-[28px] cursor-pointer hover:text-red-btn duration-300' />
                                    <FaYoutube className='text-[30px] cursor-pointer hover:text-red-btn duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='py-20 grid grid-cols-3 gap-y-15 col-span-8'>
                            {footerData.map((item, index) =>
                                <div key={index}>
                                    <p className='text-white uppercase mb-5 font-heading text-[18px] font-bold tracking-widest w-fit'>{item.category}</p>
                                    {/* <p>{item.sub_categories}</p> */}
                                    <ul>
                                        {item.sub_categories.map((sub_item, sub_index) => (
                                            <li key={sub_index} className='w-fit font-heading text-[16px] text-white font-medium capitalize mb-2 cursor-pointer hover:text-red-btn duration-300'>
                                                {sub_item}
                                            </li>
                                        )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='col-span-4 relative'>
                            <img src={footer_element01} alt="" className='rounded-[20px] relative' />
                            <img src={footer_element02} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2' />
                            <img src={footer_element03} alt="" className='absolute bottom-40 left-20 ' />
                            <img src={footer_element04} alt="" className='absolute right-10 top-1/2' />
                            <div className='absolute top-0 p-10 text-white font-heading capitalize'>
                                <p className='text-[32px] font-bold mb-1'>our newsletter</p>
                                <p className='text-[16px] font-medium'>be the first to know about new collections and exclusive offers.</p>
                                <div className='relative'>
                                    <input type="email" name="" id="" placeholder="Enter your email" className='w-full h-12 rounded-[10px] bg-white mt-5 focus:outline-none  placeholder:font-heading placeholder:capitalize placeholder:font-medium text-black px-5' />
                                    <IoSend className='absolute right-5 text-[22px] text-red-btn top-1/2 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-[#072630] py-[50px]'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-gray-400 capitalize font-heading font-medium'>copyright © 2025 <a className='text-white cursor-pointer'>ZooCommerce</a>. all rights reserved</p>
                        </div>
                        <img src={footer_payment} alt="" />

                        <div className='flex gap-5 items-center capitalize text-gray-400 font-heading font-medium'>
                            <a href="#" className='hover:text-white duration-300'>privacy policy</a>
                            <a href="#" className='hover:text-white duration-300'>contact</a>
                            <a href="#" className='hover:text-white duration-300'>terms & conditions</a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer