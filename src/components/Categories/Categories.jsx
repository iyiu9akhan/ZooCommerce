import React from 'react'
import Container from '../Container/Container'
import trending_icon from '../../assets/trending/trending_icon.png'
import { BsArrowRightSquareFill } from "react-icons/bs";
import categoriesData from "../Categories/CategoriesData"
import { IoArrowRedoSharp } from "react-icons/io5";


function Categories() {
    return (
        <div className='my-[50px]'>
            <Container>
                <div>
                    <div className='flex justify-between items-center mb-10'>
                        <div className='flex gap-3 items-center'>
                            <img src={trending_icon} alt="trending_icon" className='h-[45px] w-[45px]' />
                            <p className='font-heading text-[36px] capitalize font-bold'>browse by categories</p>
                        </div>
                        <div className='flex items-center gap-3 text-[20px] justify-between cursor-pointer group'>
                            <p className='capitalize font-heading font-semibold text-[15px]  text-red-btn group-hover:text-button duration-300'>view all products</p>
                            <BsArrowRightSquareFill className='text-red-btn group-hover:text-button duration-300' />
                        </div>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <div className='w-8/12 grid grid-cols-4 gap-x-6 gap-y-9 items-center'>
                            {categoriesData.map((cat) => (
                                <div className={`${cat.bg_color} text-center capitalize rounded-[20px] py-8 cursor-auto group relative`}>
                                    <img src={cat.img} alt={cat.title} className=' bg-white rounded-full m-auto p-5 mb-4 group-hover:scale-90 scale-100 duration-300' />
                                    <p className='font-bold font-primary text-[20px] select-none'>{cat.title}</p>
                                    <p className='font-heading font-medium text-gray-600 select-none'>{cat.item} items</p>
                                    <div className='absolute -bottom-[35px] left-1/2 transform -translate-x-1/2 bg-button p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 cursor-pointer hover:bg-orange-btn border-7 border-white'>
                                        <IoArrowRedoSharp className='text-white text-[25px]' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-4/12 text-justify bg-red-600 rounded-[20px]'>


                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Categories