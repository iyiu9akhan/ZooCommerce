import React from 'react'
import Container from '../Container/Container';
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import offer_banner_one from "../../assets/offer/offer_banner(1).png"
import offer_banner_two from "../../assets/offer/offer_banner(2).png"
import offer_banner_three from "../../assets/offer/offer_banner(3).png"
import offer_banner_four from "../../assets/offer/offer_banner(4).png"

const offerTopData = [
    {
        title: "save 35%",
        subtitle: "on your first repeat delivery order",
        icon: FaTruckFast,
        iconColor: 'text-[#FF5C00]',
        bgColor: 'bg-offerBG_one',
        borderColor: 'border-[#FF5C00]/30',
    },
    {
        title: "latest deals",
        subtitle: "save up to BDT 4500/Year",
        icon: TbRosetteDiscountCheckFilled,
        iconColor: 'text-[#5B4472]',
        bgColor: 'bg-offerBG_two',
        borderColor: 'border-[#5B4472]/30',
    },
    {
        title: "top rate products",
        subtitle: "recommended pet favourites",
        icon: HiMiniShoppingCart,
        iconColor: 'text-[#15B8DA]',
        bgColor: 'bg-offerBG_three',
        borderColor: 'border-[#15B8DA]/30',
    }
];

const offerBottomData = [
    {
        img: offer_banner_one
    },
    {
        img: offer_banner_two
    },
    {
        img: offer_banner_three
    },
    {
        img: offer_banner_four
    }
]

function Offer() {
    return (
        <>
            <Container>
                <div >
                    <div className='flex justify-between gap-10 mb-10 '>
                        {offerTopData.map((offer_top) => (
                            <div
                                className={`flex ${offer_top.bgColor} rounded-[20px] flex-1 p-[30px] justify-between items-center cursor-pointer group border ${offer_top.borderColor}`}>
                                <div className='select-none'>
                                    <p className='font-heading text-[22px] font-bold capitalize mb-2 '>
                                        {offer_top.title}
                                    </p>
                                    <p className='font-heading text-[16px] font-medium capitalize text-gray-500 '>
                                        {offer_top.subtitle}
                                    </p>
                                </div>
                                <offer_top.icon className={`text-[60px] ${offer_top.iconColor} transition duration-300 ease-in-out transform scale-100 group-hover:scale-90`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between gap-5 mb-20 pointer-events-none select-none'>
                    {offerBottomData.map((offer_bottom) => (
                        <div>
                            <img src={offer_bottom.img} alt="offerBottom_img" className='rounded-[20px]'/>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Offer
