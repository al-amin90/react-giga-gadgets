import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Testimonials = () => {
    return (
        <div>
            <div className="gadgetContainer py-24 mt-20 bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90%">
                <div className='max-w-[1920px] mx-auto md:w-[85%]'>
                    {/* header */}
                    <div className="text-center md:text-left ">
                        <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                            <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                                <BiSolidQuoteSingleLeft />
                            </div>
                            Testimonial
                        </div>
                        <p className="text-[32px] lg:text-[40px] font-semibold">
                            Users Feedback
                        </p>
                    </div>

                    {/* Container */}
                    <div className="text-gray-600 body-font">
                        <div className="mx-auto mt-8">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/2 w-full ">
                                    <div className="h-full bg-gray-100 p-8 shadow-lg rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6">I recently purchased the Apple MacBook Air, and I must say, I'm thoroughly impressed with this fantastic piece of technology. From its design to its performance, it has exceeded my expectations in every way.</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-gray-900">Mr X</span>
                                                <span className="text-gray-500 text-sm">DEVELOPER</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 shadow-lg p-8 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed  mb-6">The HP Pavilion series is a reliable and affordable line of laptops that are well-suited for everyday computing needs. While it may not be the most powerful or feature-packed laptop on the market, it offers good value for the price.</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-gray-900">Mr. Y</span>
                                                <span className="text-gray-500 text-sm">DESIGNER</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;