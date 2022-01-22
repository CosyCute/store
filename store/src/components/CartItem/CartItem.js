import React from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import afabazol from '../../assets/afabazol.png'
const CartItem = () => {
    return (
        <div className='h-158px w-678px shadow-md rounded-10px my-10px flex justify-between'>
            <div className='my-auto ml-4'><input className='h-30px w-30px' type="checkbox" /></div>
            <div className='shadow-md w-120px h-120px my-auto rounded-10px'><img className='mt-4' src={afabazol} alt="product"/></div>
            <div className='flex flex-col justify-between my-auto'>
                <div className='rounded-10px bg-green font-16px w-100px h-20px text-center text-white leading-20px'>
                    СКИДКА
                </div>
                <span>Афобазол таблетки</span>
                <span>60шт 10мг</span>
            </div>
            <div className='my-auto'><MyInputNumber /></div>
            <div className='my-auto mr-4'>800₽</div>
        </div>
    );
};

export default CartItem;