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
        <nav className='border-b border-gray-300'>
            <Container>
                <div className='my-3 flex justify-between items-center'>
                    <img src={logo} alt="primary_logo" className='w-[250px]' />
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-3 border rounded-[10px] p-3 cursor-pointer bg-button'>
                            <HiMenuAlt1 className='text-[22px] text-white' />
                            <p className='capitalize font-primary font-semibold text-[16px] text-white'>all categories</p>
                        </div>
                        <div className='flex relative'>
                            <input type="text" className='border border-gray-300 rounded-[10px] w-[450px] pl-5 pr-15' />
                            <FaSearch className=' text-gray-700 absolute text-[20px] right-5 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <div className=' border border-gray-400 rounded-[10px] p-3 cursor-pointer group hover:bg-button duration-300'>
                            <IoPersonSharp className='text-[24px] text-gray-700 group-hover:text-white duration-300' />
                        </div>
                        <div className=' border border-gray-400 rounded-[10px] p-3 cursor-pointer group hover:bg-button duration-300'>
                            <IoHeartSharp className='text-[24px] text-gray-700 group-hover:text-white duration-300' />
                        </div>
                        <div className=' border border-gray-400 rounded-[10px] p-3 cursor-pointer group hover:bg-button duration-300'>
                            <FaCartPlus className='text-[24px] text-gray-700 group-hover:text-white duration-300' />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar