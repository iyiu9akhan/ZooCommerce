import React from 'react'
import Container from '../Container/Container'
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Menubar() {
    return (
        <div className='z-30 relative bg-white py-3'>
            <Container >
                <div className='flex justify-between  capitalize'>
                    <div className='flex gap-10 font-primary font-semibold text-[16px]'>
                        <a href="#" className='hover:text-red-btn! duration-300 text-black'>home</a>
                        <div className='flex items-center cursor-pointer group'>
                            <a href="#" className='group-hover:text-red-btn! duration-300 text-black'>shop</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px] pt-1 text-gray-600 group-hover:text-red-btn duration-300' />
                        </div>
                        <div className='flex items-center cursor-pointer group'>
                            <a href="#" className='group-hover:text-red-btn! duration-300 text-black'>page</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px]  pt-1 text-gray-600 group-hover:text-red-btn duration-300' />
                        </div>
                        <div className='flex items-center cursor-pointer group'>
                            <a href="#" className=' group-hover:text-red-btn! duration-300 text-black'>blog</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px] pt-1 text-gray-600 group-hover:text-red-btn duration-300' />
                        </div>
                        <a href="#" className='hover:text-red-btn! duration-300 text-black'>about</a>
                        <a href="#" className='hover:text-red-btn! duration-300 text-black'>contact</a>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaSquarePhone className='text-[22px] text-red-btn' />
                            <p className='font-semibold font-primary text-[16px] text-black'>85494521039</p>
                        </div>
                        <div className='border-l border-gray-400'></div>
                        <div className='flex items-center text-button gap-3'>
                            <a href="#"> <FaFacebookSquare className='text-[22px] cursor-pointer text-button' /></a>
                            <a href="#"><BiLogoInstagramAlt className='text-[26px] cursor-pointer text-button' /></a>
                            <a href="#"> <IoLogoYoutube className='text-[24px] cursor-pointer text-button' /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menubar