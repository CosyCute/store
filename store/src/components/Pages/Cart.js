import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

import CartItemMobile from '../CartItem/CartItemMobile';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from '../Loader/Loader';
const Cart = ({ mobile }) => {

    const [cartArr, setCartArr] = useState();

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        var requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({ jwt: localStorage.getItem('jwt') })
        };
        fetch("https://d1zero.ru/api/get-cart/", requestOptions)
            .then(response => response.json())
            // .then(res => console.log(res))
            .then(result => setCartArr(result))
            .then(() => setLoader(false))

    }, []);

    const Loaded = () => {
        if (!loader) return (
            <div>
                {!mobile ?
                    <div className='flex flex-col tablet:flex-row justify-between'>
                        <div className='mt-12 flex flex-col justify-between w-678px mx-auto tablet:mx-0'>
                            {cartArr.cart.map(x => <CartItem mobile={mobile} el={x.product_info} />)}
                        </div>
                        <div className='w-450px h-325px shadow-md flex flex-col mx-auto mt-10 tablet:mt-0 justify-between rounded-10px font-24px font-semibold'>
                            <div className='text-text_gray flex justify-between mt-8 mx-8'>
                                <span>Итого</span>
                                <span>{cartArr.total}</span>
                            </div>
                            {/* <div className='text-green flex justify-between mx-8'>
                        <span>Скидка</span>
                        <span>0</span>
                    </div> */}
                            <div className='text-black flex justify-between mx-8'>
                                <span>Итого к оплате</span>
                                <span>{cartArr.total}</span>
                            </div>
                            <div className="mx-auto"><Link to="/delivery"><button className='rounded-10px h-60px w-325px bg-purple mb-8'>Продолжить покупку</button></Link></div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col mx-20px'>
                        <div>
                            <div>Ваша корзина</div>
                            {cartArr.cart.map(x => <CartItemMobile key={x.id} item={x.product_info}/>)}
                        </div>
                        {/* <div className='mt-20px'>
                        <div>Рекомендуем к покупке</div>
                        <div className='relative w-screen'>
                            <Swiper
                                navigation
                                slidesPerView={3}>
                                {arr.map(x =>
                                    <SwiperSlide key={x}>
                                        <div className='w-87px h-110px box-inside rounded-10px text-8px'>
                                            <div className='ml-2'>
                                                <div><img alt="product" /></div>
                                                <div className='flex flex-col justify-between'>
                                                    <div className='text-black'>Афобазол таблетки</div>
                                                    <div>60шт 10мг</div>
                                                    <div>Таблетки</div>
                                                    <div>Россия</div>
                                                </div>
                                                <div className='relative bottom-5 left-10 rounded-10px bg-purple text-white w-33px h-15px'>
                                                    <button className='flex pl-2 pt-2px'>800₽</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div> */}
                        <div className='rounded-10px w-full bg-input_bg h-175px my-20px'>
                            <div className='m-15px'>
                                <div className='flex justify-between text-text_gray'>
                                    <span>Итого</span>
                                    <span>{cartArr.total}₽</span>
                                </div>
                                <div className='flex justify-between my-12px text-green'>
                                    <span>Скидка</span>
                                    <span>0</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Итого к оплате</span>
                                    <span>{cartArr.total}₽</span>
                                </div>
                                <Link to="/delivery"><button></button></Link>
                            </div>
                        </div>
                    </div>}
            </div>)
        return (<></>)
    }
    return (
        <section className='max-w-main mx-auto'>
            <Loader loader={loader} />
            <Loaded/>
        </section>
    );
};

export default Cart;