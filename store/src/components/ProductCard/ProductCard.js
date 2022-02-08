import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ el }) => {

    const addToCart = () => {
        var formdata = new FormData();
        formdata.append("product_id", el.id);
        formdata.append("amount", 1);
        formdata.append("jwt", localStorage.getItem("jwt"));

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://d1zero.ru/api/cart/", requestOptions)
    }

    return (
        <div className='w-150px mobile:w-260px shadow-md rounded-20px text-18px box-inside product-card flex flex-col'>
            <div className='w-full max-h-1/2 flex flex-col justify-center'>
                <Link to={`/card/${el.id}`}>
                    <img className='max-h-140px mx-auto rounded-20px' src={`https://d1zero.ru${el.image}`} alt="product" />
                </Link>
            </div>
            <div className='flex grow flex-col justify-between'>
                <Link to={`/card/${el.id}`}>
                    <div className='flex flex-col ml-3 mobile:ml-8 mt-4'>
                        <span className='font-semibold text-14px mobile:text-24px'>{el.price + "₽"}</span>
                        <span className='font-normal pt-2 text-14px mobile:text-16px'>{el.name}</span>
                        <span className='font-normal text-10px mobile:text-14px text-text_gray'>{el.category_name}</span>
                    </div>
                </Link>
                <div className='w-full max-h-300px h-full flex flex-col justify-end mb-2'>
                    <button
                        onClick={() => addToCart()}
                        className='mx-auto rounded-20px bg-purple h-20px w-60px text-11px mobile:text-18px
                            mobile:w-150px mobile:h-41px text-white text-semibold'>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;