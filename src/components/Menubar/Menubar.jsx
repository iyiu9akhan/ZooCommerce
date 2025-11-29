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
                        <a href="#">home</a>
                        <div className='flex items-center cursor-pointer'>
                            <a href="#">shop</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px]  pt-1 text-gray-600' />
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <a href="#">page</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px]  pt-1 text-gray-600' />
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <a href="#">blog</a>
                            <MdOutlineKeyboardArrowDown className='text-[25px]  pt-1 text-gray-600' />
                        </div>
                        <a href="#">about</a>
                        <a href="#">contact</a>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaSquarePhone className='text-[22px] text-red-btn' />
                            <p className='font-semibold font-primary text-[16px]'>85494521039</p>
                        </div>
                        <div className='border-l border-gray-400'></div>
                        <div className='flex items-center text-button gap-3'>
                            <a href="#"> <FaFacebookSquare className='text-[22px] cursor-pointer' /></a>
                            <a href="#"><BiLogoInstagramAlt className='text-[26px] cursor-pointer' /></a>
                            <a href="#"> <IoLogoYoutube className='text-[24px] cursor-pointer' /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menubar