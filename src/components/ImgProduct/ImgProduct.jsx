import React from 'react'
import Container from '../Container/Container'
import imgProduct_bg from '../../assets/imgProduct/imgProduct_bg.jpg'
import imgProduct_element_one from '../../assets/imgProduct/imgProduct_element_one.png'
import imgProduct_element_two from '../../assets/imgProduct/imgProduct_element_two.png'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import { FaCartArrowDown, FaRegStar, FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import imgProductData from './ImgProductData'

const product1 = imgProductData[0];
const product2 = imgProductData[1];
const product3 = imgProductData[2];
const product4 = imgProductData[3];

function ImgProduct() {
    return (
        <div className='bg-imgProduct_bg relative '>
            <svg viewBox='0 0 1920 46' className='absolute -top-5 fill-white z-999'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>

            <img src={imgProduct_element_one} alt="imgProduct_element_one" className='absolute' />
            <img src={imgProduct_element_two} alt="imgProduct_element_two" className='absolute bottom-0 left-140' />

            <Container>
                <div className='flex flex-col max-w-[450px] pt-[200px] pb-[200px]'>
                    <p className='font-subHeading text-red-btn text-[30px] capitalize mb-5'>taste of the wild</p>
                    <p className='font-heading capitalize font-bold text-heading text-[65px]  leading-20 mb-5'>pet food as it should be, pure & simple.</p>
                    <p className='mb-5 text-[16px] font-heading font-medium text-gray-600'>We are committed to providing nutritious meals for your pets made with the highest quality natural ingredients.
                    </p>
                    <div className='flex items-center bg-red-btn w-fit my-5 py-3 px-6 gap-3 rounded-[10px] cursor-pointer hover:bg-button duration-300'>
                        <p className='capitalize font-primary text-[18px] font-bold text-white'>shop now</p>
                        <BsArrowRightSquareFill className='text-white text-[22px] mt-0.5' />
                    </div>
                </div>
            </Container>

            <div className='absolute right-0 top-0 z-10'>
                <img src={imgProduct_bg} alt="imgProduct_bg" />
                
                <div className='absolute z-30 right-[610px] top-[510px] w-10 h-10 flex items-center justify-center group animate-bounce'>
                    <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex w-4 h-4 rounded-full bg-white group-hover:w-5 group-hover:h-5 duration-300 group-hover:bg-orange-btn"></span>
                    <div className='absolute -top-80 -right-20  scale-0 group-hover:scale-100 duration-300 origin-bottom'>
                        <div
                            className='border border-gray-300 rounded-[20px] w-[216px] h-[325px] hover:h-[395px] transition-all duration-300 ease-in-out bg-white overflow-hidden relative'
                        >
                            <img
                                src={product1.img}
                                alt={product1.title}
                                className='rounded-[20px] cursor-pointer mb-3'
                            />
                            <div className='px-4 rounded-[20px]'>
                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                    {[...Array(5)].map((_, i) => {
                                        if (i < Math.floor(product1.rating)) return <FaStar key={i} />;
                                        if (i === Math.floor(product1.rating) && product1.rating % 1 >= 0.5) return <FaStarHalfAlt key={i} />;
                                        return <FaRegStar key={i} className="text-gray-300" />;
                                    })}
                                    <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                        ({product1.rating} reviews)
                                    </p>
                                </div>
                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                    {product1.title}
                                </p>
                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                    {product1.price}
                                </p>

                                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] relative">
                                    <div className='flex items-center justify-between mb-4 mt-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100'>
                                        <div className='flex items-center'>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                        </div>

                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                            <FaCartArrowDown className='text-[20px] text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute z-30 right-[400px] top-[540px] w-10 h-10 flex items-center justify-center group animate-bounce'>
                    <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex   w-4 h-4 rounded-full bg-white group-hover:w-5 group-hover:h-5 duration-300 group-hover:bg-orange-btn"></span>
                    <div className='absolute -top-80 -right-22  scale-0 group-hover:scale-100 duration-300 origin-bottom'>
                        <div
                            className='border border-gray-300 rounded-[20px] h-[325px] w-[216px] hover:h-[395px] transition-all duration-300 ease-in-out bg-white overflow-hidden relative'
                        >
                            <img
                                src={product2.img}
                                alt={product2.title}
                                className='rounded-[20px] cursor-pointer mb-3'
                            />
                            <div className='px-4 rounded-[20px]'>
                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                    {[...Array(5)].map((_, i) => {
                                        if (i < Math.floor(product2.rating)) return <FaStar key={i} />;
                                        if (i === Math.floor(product2.rating) && product2.rating % 1 >= 0.5) return <FaStarHalfAlt key={i} />;
                                        return <FaRegStar key={i} className="text-gray-300" />;
                                    })}
                                    <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                        ({product2.rating} reviews)
                                    </p>
                                </div>
                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                    {product2.title}
                                </p>
                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                    {product2.price}
                                </p>

                                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] relative">
                                    <div className='flex items-center justify-between mb-4 mt-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100'>
                                        <div className='flex items-center'>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                        </div>

                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                            <FaCartArrowDown className='text-[20px] text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute z-50 right-[245px] bottom-[150px] w-10 h-10 flex items-center justify-center group animate-bounce'>
                    <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex   w-4 h-4 rounded-full bg-white group-hover:w-5 group-hover:h-5 duration-300 group-hover:bg-orange-btn"></span>
                    <div className='absolute -top-80 -right-22  scale-0 group-hover:scale-100 duration-300 origin-bottom'>
                        <div
                            className='border border-gray-300 rounded-[20px] h-[325px] w-[216px] hover:h-[395px] transition-all duration-300 ease-in-out bg-white overflow-hidden relative'
                        >
                            <img
                                src={product3.img}
                                alt={product3.title}
                                className='rounded-[20px] cursor-pointer mb-3'
                            />
                            <div className='px-4 rounded-[20px]'>
                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                    {[...Array(5)].map((_, i) => {
                                        if (i < Math.floor(product3.rating)) return <FaStar key={i} />;
                                        if (i === Math.floor(product3.rating) && product3.rating % 1 >= 0.5) return <FaStarHalfAlt key={i} />;
                                        return <FaRegStar key={i} className="text-gray-300" />;
                                    })}
                                    <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                        ({product3.rating} reviews)
                                    </p>
                                </div>
                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                    {product3.title}
                                </p>
                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                    {product3.price}
                                </p>

                                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] relative">
                                    <div className='flex items-center justify-between mb-4 mt-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100'>
                                        <div className='flex items-center'>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                        </div>

                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                            <FaCartArrowDown className='text-[20px] text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute z-30 right-[140px] bottom-[430px] w-10 h-10 flex items-center justify-center group animate-bounce'>
                    <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-90"></span>
                    <span className="relative inline-flex   w-4 h-4 rounded-full bg-white group-hover:w-5 group-hover:h-5 duration-300 group-hover:bg-orange-btn"></span>
                    <div className='absolute -top-80 -right-22  scale-0 group-hover:scale-100 duration-300 origin-bottom'>
                        <div
                            className='border border-gray-300 rounded-[20px] h-[325px] w-[216px] hover:h-[395px] transition-all duration-300 ease-in-out bg-white overflow-hidden relative'
                        >
                            <img
                                src={product4.img}
                                alt={product4.title}
                                className='rounded-[20px] cursor-pointer mb-3'
                            />
                            <div className='px-4 rounded-[20px]'>
                                <div className='flex gap-0.5 text-amber-500 items-center mb-1'>
                                    {[...Array(5)].map((_, i) => {
                                        if (i < Math.floor(product4.rating)) return <FaStar key={i} />;
                                        if (i === Math.floor(product4.rating) && product4.rating % 1 >= 0.5) return <FaStarHalfAlt key={i} />;
                                        return <FaRegStar key={i} className="text-gray-300" />;
                                    })}
                                    <p className='ml-2 text-gray-500 text-[13px] font-medium'>
                                        ({product4.rating} reviews)
                                    </p>
                                </div>
                                <p className='font-heading font-semibold capitalize text-[16px] mb-2 cursor-pointer truncate'>
                                    {product4.title}
                                </p>
                                <p className='font-heading font-semibold capitalize text-[22px] text-button mb-3'>
                                    {product4.price}
                                </p>

                                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] relative">
                                    <div className='flex items-center justify-between mb-4 mt-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100'>
                                        <div className='flex items-center'>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-l-[9px] cursor-pointer border-gray-300 border-r-0'>-</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center border-gray-300'>1</div>
                                            <div className='h-[42px] w-[42px] border flex items-center justify-center rounded-r-[9px] cursor-pointer border-gray-300 border-l-0'>+</div>
                                        </div>

                                        <div className='h-[42px] w-[42px] bg-button flex items-center justify-center rounded-[9px] cursor-pointer'>
                                            <FaCartArrowDown className='text-[20px] text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <svg viewBox='0 0 1920 46' className='absolute -bottom-6 fill-white rotate-180 z-999'>
                <path d='M878.736 45.8506C906.605 46.9571 933.274 41.7324 960 36.3539L961.932 35.9643C980.625 32.1942 999.359 28.4156 1018.57 26.7321C1051.17 23.8782 1083.56 28.2887 1115.86 32.6878C1126.57 34.1471 1137.28 35.6052 1147.98 36.7965C1191.42 41.6362 1236.61 41.0204 1280.14 37.316C1285.55 36.8638 1290.94 36.3442 1296.34 35.7766C1305.03 34.8578 1313.72 33.7976 1322.41 32.7373C1349.13 29.4779 1375.85 26.2171 1402.71 27.0592C1415.19 27.4537 1427.61 28.7238 1440 30.3306C1447.35 31.2832 1454.69 32.3512 1462.03 33.4191C1484.26 36.6552 1506.49 39.8898 1528.92 39.9043C1553.09 39.9209 1576.89 36.1462 1600.63 32.3816C1631.91 27.4202 1663.09 22.4762 1694.83 26.251C1713.32 28.4465 1731.67 31.5622 1750.02 34.6766C1779.42 39.6696 1808.81 44.6595 1838.74 45.8506C1866.6 46.9571 1893.27 41.7324 1920 36.3539V0H0V36.3539C0.64402 36.2241 1.28807 36.0942 1.93217 35.9643C20.6249 32.1942 39.3595 28.4156 58.5696 26.7321C91.1741 23.8782 123.557 28.2887 155.856 32.6878C166.571 34.1471 177.276 35.6052 187.978 36.7965C231.418 41.6362 276.614 41.0204 320.141 37.316C325.546 36.8638 330.941 36.3442 336.336 35.7766C345.029 34.8578 353.719 33.7976 362.41 32.7373C389.126 29.4779 415.854 26.2171 442.714 27.0592C455.194 27.4537 467.606 28.7238 480 30.3306C487.348 31.2832 494.688 32.3512 502.026 33.4191C524.263 36.6552 546.491 39.8898 568.925 39.9043C593.087 39.9209 616.889 36.1462 640.627 32.3816C671.912 27.4202 703.086 22.4762 734.832 26.251C753.323 28.4465 771.673 31.5622 790.017 34.6766C819.425 39.6696 848.814 44.6595 878.736 45.8506Z'></path>
            </svg>
        </div>
    )
}

export default ImgProduct