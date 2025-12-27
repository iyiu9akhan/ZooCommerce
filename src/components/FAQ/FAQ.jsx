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

function FAQ() {
    return (
        <>
            <Container>
                <div className='mt-[85px]'>
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
                        <div className='col-span-4 col-start-9'>
                            <img src={faq_img} alt="faq_img" className='rounded-[20px]' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default FAQ