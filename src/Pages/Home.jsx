import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import BrowserBrands from "../components/BrowserBrands/BrowserBrands";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChoosUs from "../components/WhyChoosUs/WhyChoosUs";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { baseUrl } from "../Utilitis/url";
import ProductCard from "../components/Cards/ProductCard";

const Home = () => {
    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/addProduct`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    }, []);

    return (
        <div>
            <Banner></Banner>
            <BrowserBrands></BrowserBrands>
            <div className="max-w-[1920px] mx-auto md:w-[85%]">
                <div className="text-center md:text-left mt-16">
                    <div className="font-semibold text-[#FF497C] mb-3 text-center md:text-left flex items-center">
                        <div className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-2 w-fit flex items-center justify-center rounded-full ">
                            <FaShoppingBag />
                        </div>
                        Our Products
                    </div>
                    <p className="text-[32px] lg:text-[40px] font-semibold">
                        Explore Our Product
                    </p>
                </div>

                {/* Product container */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
                    {allProducts?.length > 8
                        ? allProducts
                            ?.slice(0, 8)
                            .map((item) => <ProductCard
                                key={item._id}
                                item={item}
                                editOption={false}
                            />)
                        : allProducts?.map((item) => (
                            <ProductCard key={item._id} item={item} editOption={false} />
                        ))}
                </div>
                {allProducts?.length > 8 && (
                    <div className="mt-10 flex justify-center">
                        <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                            See All
                        </button>
                    </div>
                )}
            </div>

            <Testimonials></Testimonials>
            <WhyChoosUs></WhyChoosUs>
        </div>
    );
};

export default Home;
