import React from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
const CartItemMobile = ({item}) => {

    return (
        <div className='rounded-10px h-120px bg-input_bg flex mt-10px flex justify-between'>
            {/* <div className='pl-20px my-auto'><input type='checkbox' /></div> */}
            <div className='my-auto w-80px h-80px rounded-10px bg-white mx-12px flex flex-col justify-center'>
                <img className='max-w' src={`https://d1zero.ru${item.image}`} alt={"product"} />
            </div>
            <div className='my-auto'>
                {/* <div className='w-50px h-12px bg-green text-8px text-white flex justify-center rounded-10px'>СКИДКА</div> */}
                <div className='text-10px font-bold'>{item.category_name}</div>
                <div className='flex'>
                    <div className='text-16px font-bold'>{item.price}₽</div>
                </div>
            </div>
            <div className='my-auto'><MyInputNumber /></div>
        </div>
    );
};

export default CartItemMobile;