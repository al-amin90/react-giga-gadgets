import "./Card.css"

const BrandCard = ({ brand }) => {
    const { id, brandName, imageURL } = brand;

    return (
        <div className="cardShadow p-5 w-full bg-white rounded">
            <img
                className="w-full h-[150px] object-contain rounded-md"
                src={imageURL}
                alt={brandName}
            />
            <div className=" w-full hover:bg-[#ab3154] rounded h-10 mt-2 bg-[#FF497C] flex justify-center items-center">
                <p className="text-center font-bold text-white">{brandName}</p>
            </div>
        </div>
    );
};

export default BrandCard;