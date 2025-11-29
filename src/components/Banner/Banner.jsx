import React from 'react'
import Container from '../Container/Container'
import banner_element_01 from "../../../public/banner/banner_element_01.png"
import banner_element_02 from "../../../public/banner/banner_element_02.png"

function Banner() {
    return (

        <div className='bg-banner-one relative'>
            <img src={banner_element_01} alt="banner_element_01" className='absolute -left-30 -top-13 z-0'/>
            <img src={banner_element_02} alt="banner_element_02" className='absolute left-72 top-12'/>
            <Container>
                <div className='pt-[200px]'>
                    <p className='font-subHeading text-[32px] capitalize text-red-btn tracking-widest'>hight rated pet products !</p>
                </div>
            </Container>

        </div>

    )
}

export default Banner