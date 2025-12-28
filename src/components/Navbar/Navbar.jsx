import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/logo.png"
import { HiMenuAlt1 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className='border-b border-gray-300 relative z-30'>
            <Container>
                <div className='my-3 flex justify-center sm:justify-between items-center'>
                    <img src={logo} alt="primary_logo" className='w-[200px] sm:w-[250px] cursor-pointer ' />
                    <div className='flex gap-5'>
                        <div className='hidden sm:flex items-center gap-3 border rounded-[10px] p-3 cursor-pointer bg-button'>
                            <HiMenuAlt1 className='text-[22px] text-white' />
                            <p className='capitalize font-primary font-semibold text-[16px] text-white'>all categories</p>
                        </div>
                        <div className='hidden sm:flex relative'>
                            <input type="text" className='border border-gray-300 rounded-[10px] w-[450px] pl-5 pr-15 placeholder:font-primary placeholder:text-[16px]' placeholder='Search for Products' />
                            <FaSearch className=' text-gray-700 absolute text-[20px] right-5 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                        </div>
                    </div>
                    <div className='hidden sm:flex gap-3 items-center'>
                        <div className='sm:border border-gray-400 rounded-[10px] sm:p-3 cursor-pointer group sm:hover:bg-button duration-300'>
                            <IoPersonSharp className='text-[22px] sm:text-[24px] text-gray-700 sm:group-hover:text-white duration-300' />
                        </div>
                        <div className='sm:border border-gray-400 rounded-[10px] sm:p-3 cursor-pointer group sm:hover:bg-button duration-300'>
                            <IoHeartSharp className='text-[22px] sm:text-[24px] text-gray-700 sm:group-hover:text-white duration-300' />
                        </div>
                        <div className='sm:border border-gray-400 rounded-[10px] sm:p-3 cursor-pointer group sm:hover:bg-button duration-300'>
                            <FaCartPlus className='text-[22px] sm:text-[24px] text-gray-700 sm:group-hover:text-white duration-300' />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar