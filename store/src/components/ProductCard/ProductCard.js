import React from 'react';
import afabazol from '../../assets/afabazol.png'
const ProductCard = () => {
    return (
        <div className='h-325px w-260px shadow-md rounded-20px mt-8 text-18px'>
            <div className='h-1/2'><img className='m-auto' src={afabazol} /></div>
            <div className='h-1/2 flex'>
                <div className='flex flex-col ml-8'>
                    <span className='font-semibold'>800₽</span>
                    <span className='font-normal text-16px whitespace-nowrap'>Афабазол таблетки</span>
                    <span className='font-medium text-16px text-text_gray'>60шт 10мг</span>
                    <span className='font-normal text-14px text-text_gray'>Таблетки</span>
                    <span className='font-normal text-14px text-text_gray'>Россия</span>
                </div>
                <div className='relative top-20 right-8'><button className='rounded-20px bg-purple w-100px h-33px text-white  text-semibold'>В корзину</button></div>
            </div>
        </div>
    );
};

export default ProductCard;