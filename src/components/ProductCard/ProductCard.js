import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config/appConfig';
import base64 from 'base-64'
const ProductCard = ({ el, setNotification }) => {

    const addToCart = () => {
        if (localStorage.user === undefined) {
            setNotification('Вам необходимо войти')
        }
        else {
            setItem(1)
            let raw = [{
                productId: el.id,
                quantity: 1,
            }]

            var requestOptions = {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
                },
                credentials: 'include',
                body: JSON.stringify(raw)
            };
            fetch(`${API_KEY}/api/cart`, requestOptions)
        }
    }

    const [item, setItem] = useState(undefined)

    return (
        <div className='w-150px mobile:w-260px shadow-md rounded-20px text-18px box-inside product-card justify-between flex flex-col'>
            <div className='w-full max-h-1/2 flex flex-col justify-center mt-4'>
                <Link to={`/card/${el.id}`}>
                    <img className='max-h-140px mx-auto rounded-20px' src={`${API_KEY}/api/images/${el.imagePath}`} alt="product" />
                </Link>
            </div>
            <div className='flex  flex-col justify-between'>
                <Link to={`/card/${el.id}`}>
                    <div className='flex flex-col ml-3 mobile:ml-8 mt-4'>
                        <span className='font-semibold text-18px mobile:text-24px'>{el.price + "₽"}</span>
                        <span className='font-normal mb-4 mobile:pt-2 text-14px mobile:text-16px'>{el.name}</span>
                        {/* <span className='font-normal text-10px mobile:text-14px text-text_gray'>{el.category_name}</span> */}
                    </div>
                </Link>
                <div>
                    {item === undefined ?
                        <div className='w-full max-h-300px h-full flex flex-col justify-end mobile:mb-2'>
                            <button
                                onClick={() => addToCart()}
                                className='mx-auto mb-4 font-bold rounded-10px bg-purple h-36px w-120px text-11px mobile:text-18px
                            mobile:w-207px mobile:h-41px text-white text-semibold'>
                                В корзину
                            </button>
                        </div>
                        : <div className='w-full max-h-300px h-full flex flex-col justify-end mobile:mb-2'>
                            <button
                                className='mb-4 mx-auto font-bold rounded-10px bg-green h-36px w-120px text-11px mobile:text-18px
                        mobile:w-207px mobile:h-41px text-white text-semibold'>
                                В корзине
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;