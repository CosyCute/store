import React from 'react';
import CartItem from '../CartItem/CartItem';
const Cart = () => {
    return (
        <section className='max-w-main mx-auto'>
            <div className='flex justify-between'>
                <div className='mt-12 flex flex-col justify-between'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className='w-450px h-325px shadow-md flex flex-col justify-between rounded-10px font-24px font-semibold'>
                    <div className='text-text_gray flex justify-between mt-8 mx-8'>
                        <span>Итого</span>
                        <span>400</span>
                    </div>
                    <div className='text-green flex justify-between mx-8'>
                        <span>Скидка</span>
                        <span>0</span>
                    </div>
                    <div className='text-black flex justify-between mx-8'>
                        <span>Итого к оплате</span>
                        <span>400</span>
                    </div>
                    <button className='rounded-10px h-60px w-325px bg-purple mx-auto mb-8'>Продолжить покупку</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;