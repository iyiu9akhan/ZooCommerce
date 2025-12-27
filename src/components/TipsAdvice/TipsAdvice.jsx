import React from 'react'
import Container from '../Container/Container'
import { MdTipsAndUpdates } from "react-icons/md";
import { BsArrowRightSquareFill } from 'react-icons/bs';
import TipsAdviceData from './TipsAdviceData';

function TipsAdvice() {
    const featuredPosts = TipsAdviceData.filter(item => item.type === "featured");
    const sidebarPosts = TipsAdviceData.filter(item => item.type === "sidebar");

    return (
        <Container>
            <div className='mt-[85px]'>
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex items-center gap-3'>
                        <MdTipsAndUpdates className='text-[40px] text-red-btn' />
                        <p className='font-heading text-[36px] capitalize font-bold'>Helpful tips & advice</p>
                    </div>
                    <div className='flex items-center gap-3 text-[20px] cursor-pointer group'>
                        <p className='capitalize font-heading font-semibold text-[15px] text-red-btn group-hover:text-button duration-300'>view all blogs</p>
                        <BsArrowRightSquareFill className='text-red-btn group-hover:text-button duration-300' />
                    </div>
                </div>

                <div className='grid gap-8 grid-cols-12'>
                    {featuredPosts.map((item) => (
                        <div key={item.id} className='col-span-4 border rounded-[20px] group'>
                            <img src={item.image} alt={item.caption} className='w-full rounded-[20px] cursor-pointer' />
                            <div className='p-8 '>
                                <div className='flex items-center justify-between text-gray-400 capitalize font-heading font-medium text-[14px]'>
                                    <p> {item.date} | {item.category}</p>
                                    <p>author: <span className='text-black'>{item.postBy}</span></p>
                                </div>
                                <p className='font-heading font-bold text-[20px] capitalize my-3 cursor-pointer group-hover:text-red-btn duration-300'>{item.caption}</p>
                                <p className='font-heading text-[16px] text-gray-500 font-medium line-clamp-3'>{item.details}</p>
                                <div className='flex items-center gap-3 text-[20px] cursor-pointer mt-5'>
                                    <p className='capitalize font-heading font-semibold text-[18px] text-button group-hover:text-red-btn duration-300'>read more</p>
                                    <BsArrowRightSquareFill className='text-button group-hover:text-red-btn duration-300' />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='col-span-4 flex flex-col border justify-between rounded-[20px] px-5'>
                        {sidebarPosts.map((item) => (
                            <div key={item.id} className='flex gap-5 group cursor-pointer border-b last:border-0 py-7'>
                                <img src={item.image} alt={item.caption} className='h-[85px] w-[124px] object-cover rounded-[10px]' />
                                <div className='flex flex-col justify-between'>
                                    <p className='font-heading line-clamp-2 font-bold text-[16px] group-hover:text-red-btn duration-300'>
                                        {item.caption}
                                    </p>
                                    <div className='flex items-center justify-between text-gray-400 capitalize font-heading font-medium text-[13px]'>
                                        <p> {item.category}</p>
                                        <p>author: <span className='text-black'>{item.postBy}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TipsAdvice