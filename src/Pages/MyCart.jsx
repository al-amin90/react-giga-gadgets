import React, { useEffect, useState } from 'react';
import { baseUrl } from '../Utilitis/url';
import useAuth from '../Hooks/useAuth';
import { data } from 'autoprefixer';
import ProductCard from '../components/Cards/ProductCard';

const MyCart = () => {
    const { user } = useAuth()
    const [myProduct, setMyProduct] = useState(null)

    useEffect(() => {
        fetch(`${baseUrl}/addProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data);
            })
    }, [user])


    return (
        <div className='max-w-[1920px] mx-auto md:w-[85%]'>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
                {myProduct?.map(item => <ProductCard
                    key={item._id}
                    item={item}
                    editOption={true}
                    myProduct={myProduct}
                    setMyProduct={setMyProduct}
                ></ProductCard>)}
            </div>
        </div>
    );
};

export default MyCart;