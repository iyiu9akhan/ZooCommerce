import React from 'react'
import Container from '../Container/Container'
import trending_icon from '../../assets/trending/trending_icon.png'
import { BsArrowRightSquareFill } from "react-icons/bs";
import categoriesData from "../Categories/CategoriesData"

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
                    <div>
                        {categoriesData.map((cat) => (
                            <div>
                                <div className='bg-categoriesBG_one'>
                                    <img src={cat.img} alt={cat.title} />
                                    <p>{cat.title}</p>
                                    <p>{cat.item} items</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Categories