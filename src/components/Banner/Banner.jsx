import React, { useRef, useState } from 'react';
import heroImg1 from "../../assets/Hero/2.png"
import heroImg2 from "../../assets/Hero/applelaptop.png"
import { SiFireship } from "react-icons/si";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='h-[600px] md:h-[calc(100vh-70px)]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% '>

            <Swiper
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                {/* slider 1  */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between gap-10 items-center max-w-[1920px] mx-auto md:w-[85%]">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                                <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                                    <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                                        <SiFireship />
                                    </div>
                                    Top Brands
                                </div>

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                    Discover the Future <br />
                                    of Electronics
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Stay ahead with the latest tech trends and innovations.
                                </p>

                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                        <span className="mr-3">
                                            <i className="bx bx-hive"></i>
                                        </span>
                                        Explore Now
                                    </button>
                                </div>
                            </div>

                            {/* left */}
                            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={heroImg1}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 2  */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between  gap-10 items-center max-w-[1920px] mx-auto md:w-[85%]">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                                <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                                    <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                                        <SiFireship />
                                    </div>
                                    Top Brands
                                </div>

                                <p className="xl:text-[45px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                    Your Trusted Source for <br />
                                    Quality Gadgets
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Explore a wide range of cutting-edge electronic devices
                                </p>

                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                        <span className="mr-3">
                                            <i className="bx bx-hive"></i>
                                        </span>
                                        Explore Now
                                    </button>
                                </div>
                            </div>

                            {/* left */}
                            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={heroImg2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider 3  */}
                <SwiperSlide>
                    <div className="md:h-[500px] h-auto">
                        <div className="h-full flex flex-col md:flex-row justify-between  gap-10 items-center max-w-[1920px] mx-auto md:w-[85%]">
                            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                                <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                                    <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                                        <SiFireship />
                                    </div>
                                    Top Brands
                                </div>

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                    Shop Smart, Shop <br /> TechWonders
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                    Find the perfect tech solutions for your lifestyle.
                                </p>

                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                        <span className="mr-3">
                                            <i className="bx bx-hive"></i>
                                        </span>
                                        Explore Now
                                    </button>
                                </div>
                            </div>

                            {/* left */}
                            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={heroImg2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;