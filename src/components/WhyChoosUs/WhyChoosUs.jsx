import choose1 from "../../assets/whyChoose/1.webp"
import choose2 from "../../assets/whyChoose/2.webp"
import choose3 from "../../assets/whyChoose/3.webp"
import choose4 from "../../assets/whyChoose/4.webp"
import choose5 from "../../assets/whyChoose/5.webp"
import { AiFillLike } from "react-icons/ai";

const WhyChoosUs = () => {
    return (
        <div>
            < div className="max-w-[1920px] mx-auto md:w-[85%]" >
                {/* header */}
                < div className="text-center md:text-left mt-20" >
                    <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                        <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                            <AiFillLike />
                        </div>
                        Why Us
                    </div>
                    <p className="text-[32px] lg:text-[40px] font-semibold">
                        Why People Choose Us
                    </p>

                    {/* Container */}
                    < div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8" >
                        <div className="py-6 px-2 shadow  flex justify-center items-center flex-col gap-4">
                            <img src={choose1} alt="" />
                            <p className="font-semibold text-lg text-center">
                                Fast & Secure <br />
                                Delivery
                            </p>
                        </div>
                        <div className="py-6 px-2 shadow flex justify-center items-center flex-col gap-4">
                            <img src={choose2} alt="" />
                            <p className="font-semibold text-lg text-center">
                                Money Back <br />
                                Guarantee
                            </p>
                        </div>
                        <div className="py-6 px-2 shadow flex justify-center items-center flex-col gap-4">
                            <img src={choose3} alt="" />
                            <p className="font-semibold text-lg text-center">
                                24 Hour Return <br />
                                Policy
                            </p>
                        </div>
                        <div className="py-6 px-2 shadow flex justify-center items-center flex-col gap-4">
                            <img src={choose4} alt="" />
                            <p className="font-semibold text-lg text-center">
                                Pro Quality <br />
                                Support
                            </p>
                        </div>
                        <div className="py-6 px-2 shadow flex justify-center items-center flex-col gap-4">
                            <img src={choose5} alt="" />
                            <p className="font-semibold text-lg text-center">
                                Next Level Pro <br />
                                Quality
                            </p>
                        </div>

                    </div >
                </div>
            </div>
        </div>
    );
};

export default WhyChoosUs;