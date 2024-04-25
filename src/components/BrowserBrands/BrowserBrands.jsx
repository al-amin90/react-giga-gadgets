import { useEffect, useState } from "react";
import { RiMicrosoftFill } from "react-icons/ri";
import { baseUrl } from "../../Utilitis/url";
import BrandCard from "../Cards/BrandCard";

const BrowserBrands = () => {
    const [brandLoading, setBrandLoading] = useState(true)
    const [brands, setBrands] = useState([])

    useEffect(() => {
        setBrandLoading(true)
        fetch(`${baseUrl}/brands`)
            .then(res => res.json())
            .then(data => {
                setBrandLoading(false)
                setBrands(data);
            })
    }, [])



    return (
        <div>
            <div className="max-w-[1920px] mx-auto md:w-[85%]">
                {/* header */}
                <div className="text-center md:text-left mt-16">
                    <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                        <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                            <RiMicrosoftFill />
                        </div>
                        Top Brands
                    </div>
                    <p className="text-[32px] lg:text-[40px] font-semibold">
                        Browse By Brands
                    </p>
                </div>

                {/* grid grid-cols-5 gap-4  dark:bg-[#0F172A] */}
                <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5  mt-10 w-full ">
                    {
                        brandLoading && <p className="font-bold mt-4 text-2xl">Brand Loading...</p>
                    }
                    {
                        brands.map(brand => <BrandCard
                            key={brand.id}
                            brand={brand}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrowserBrands;