import { BiSolidAlarmAdd } from "react-icons/bi";
import useAuth from "../Hooks/useAuth";
import { baseUrl } from "../Utilitis/url";
import { useLoaderData } from "react-router-dom";

const AddProduct = ({ update }) => {
    const { user } = useAuth() || {};
    const product = useLoaderData()
    const { _id, productName, brandName, price, image, type, rating } = product || {};
    console.log(brandName);

    //add products 
    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const type = e.target.type.value;
        const brand = e.target.brand.value;
        const rating = e.target.rating.value;
        const email = user.email;

        const info = { name, price, image, type, brand, rating, email };
        console.log(info);

        update ? fetch(`${baseUrl}/addProduct/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    alert("update to database");
                }
            })
            : fetch(`${baseUrl}/addProduct`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.insertedId) {
                        alert("added to database");
                    }
                    console.log(data);
                });


    };

    return (
        <div className="max-w-[1920px] mx-auto md:w-[85%] pt-10">
            <div className="shadow-lg p-5 border">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="flex items-center justify-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <BiSolidAlarmAdd />
                        </span>
                        <span className="">
                            <span className="text-[#FF497C]">
                                {update ? "Update " : "Add "}
                            </span>
                            Your Product
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddProduct}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2 " htmlFor="name">
                                Name
                            </label>
                            <input
                                defaultValue={productName || ""}
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                            />

                            <label className="block mt-4 mb-2 " htmlFor="brand">
                                Brand Name
                            </label>
                            <select
                                name="brand"
                                id="brand"
                                defaultValue={brandName || ""}
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Brand"
                            >
                                <option defaultValue="HP">HP</option>
                                <option defaultValue="Apple">Apple</option>
                                <option defaultValue="LG">LG</option>
                                <option defaultValue="Samsung">Samsung</option>
                                <option defaultValue="Huawei">Huawei</option>
                                <option defaultValue="Google">Google</option>
                                <option defaultValue="Panasonic">Panasonic</option>
                            </select>

                            <label className="block mt-4 mb-2 " htmlFor="price">
                                Price
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={price || ""}
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                            />
                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 " htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={image || ""}
                                placeholder="Enter Image URL"
                                id="image"
                                name="image"
                            />
                            <label className="block mb-2 mt-4 " htmlFor="type">
                                Type
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={type || ""}
                                placeholder="Enter type"
                                id="type"
                                name="type"
                            />

                            <label className="block mt-4 mb-2 " htmlFor="rating">
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"

                                max={5}
                                min={0}
                                defaultValue={rating || ""}
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />
                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value={update ? "Update Product" : "Add Product"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
