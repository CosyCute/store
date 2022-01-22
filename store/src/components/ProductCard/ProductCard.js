import React from 'react';
import afabazol from '../../assets/afabazol.png';
import { Link } from 'react-router-dom';
const ProductCard = () => {
    return (
        <div className='w-150px h-185px mobile:w-260px mobile:h-325px shadow-md rounded-20px mt-8 text-18px'>
            <div className='h-1/2'><img className='m-auto' src={afabazol} alt="product" /></div>
            <div className='h-1/2 flex'>
                <div className='flex flex-col ml-3 mobile:ml-8'>
                    <span className='font-semibold text-14px mobile:text-24px'>800₽</span>
                    <span className='font-normal text-14px mobile:text-16px whitespace-nowrap'>Афабазол таблетки</span>
                    <span className='font-medium text-11px mobile:text-16px text-text_gray'>60шт 10мг</span>
                    <span className='font-normal text-10px mobile:text-14px text-text_gray'>Таблетки</span>
                    <span className='font-normal text-10px mobile:text-14px text-text_gray'>Россия</span>
                </div>
                <Link to="/card">
                    <div className='pt-14 -ml-14 mobile:pt-20 mobile:-ml-10'>
                        <button
                            className='rounded-20px bg-purple h-20px w-60px text-11px mobile:text-18px
                            mobile:w-100px mobile:h-33px text-white text-semibold'>
                            В корзину
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;