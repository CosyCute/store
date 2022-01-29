import React from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import MCloseX from '../../icons/MCloseX';
const CartItem = ({el}) => {
    return (
        <div className='h-158px w-full max-w-678px shadow-md rounded-10px my-10px flex justify-between'>
            <div className='shadow-md w-120px h-120px my-auto rounded-10px ml-4'><img src={`https://d1zero.ru${el.image}`} className='mt-4' alt="product"/></div>
            <div className='flex flex-col justify-between my-auto'>
                {/* <div className='rounded-10px bg-green font-16px w-100px h-20px text-center text-white leading-20px'>
                    СКИДКА
                </div> */}
                <span>{el.name}</span>
                {/* <span>60шт 10мг</span> */}
            </div>
            <div className='my-auto'><MyInputNumber /></div>
            <div className='my-auto mr-4'>{el.price}₽</div>
            <div className='my-auto mr-4'><button><MCloseX/></button></div>
        </div>
    );
};

export default CartItem;