import React from 'react'
import Container from '../Container/Container'
import faq_img from "../../assets/faq/faq_img.jpg"
import { TbLocationQuestion } from "react-icons/tb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BsArrowRightSquareFill } from 'react-icons/bs';
import faqData from './FAQ_data';
import faq_element from "../../assets/faq/faq_element.png"
import faq_element02 from "../../assets/faq/faq_element02.png"
import faq_element03 from "../../assets/faq/faq_element03.png"
import faq_element04 from "../../assets/faq/faq_element04.png"
import faq_element05 from "../../assets/faq/faq_element05.png"

function FAQ() {
    return (
        <>
            <Container>
                <div className='my-[85px]'>
                    <div className='flex items-center justify-between mb-10'>
                        <div className='flex items-center gap-3'>
                            <TbLocationQuestion className='text-[40px] text-red-btn' />
                            <p className='font-heading text-[36px] capitalize font-bold'>frequently asked questions</p>
                        </div>
                        <div className='flex  items-center gap-5'>
                            <p className='capitalize font-heading text-gray-500 font-medium'>do you have more questions?</p>
                            <div className='flex items-center gap-3 text-[20px] justify-between cursor-pointer group'>
                                <p className='capitalize font-heading font-semibold text-[15px]  text-red-btn group-hover:text-button duration-300'>ask more questions</p>
                                <BsArrowRightSquareFill className='text-red-btn group-hover:text-button duration-300' />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-7'>
                            <Accordion type="single" collapsible defaultValue="faq-1" >
                                {faqData.map((item) => (
                                    <AccordionItem value={item.id} key={item.id} className="border! rounded-[15px] border-gray-300 px-5 mb-7">
                                        <AccordionTrigger className="cursor-pointer hover:no-underline text-[20px] font-heading font-semibold">{item.question}</AccordionTrigger>
                                        <AccordionContent className="font-primary text-[16px] font-medium">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className='col-span-4 col-start-9 select-none pointer-events-none bg-[#F9DF8A] rounded-[20px] h-full relative overflow-hidden'>
                            {/* <img src={faq_img} alt="faq_img" className='rounded-[20px]' /> */}
                            <img src={faq_element} alt="faq_element" className='absolute -bottom-4 z-999 scale-90'/>
                            <img src={faq_element02} alt="faq_element" className='absolute bottom-1/2 right-15 z-999'/>
                            <img src={faq_element03} alt="faq_element" className='absolute bottom-0 z-980 opacity-50'/>
                            <img src={faq_element04} alt="faq_element" className='absolute bottom-40 left-8 z-980'/>
                            <img src={faq_element05} alt="faq_element" className='absolute top-0 -right-5 rotate-180 rounded-bl-[20px]'/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default FAQ