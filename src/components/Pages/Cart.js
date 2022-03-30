import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

import CartItemMobile from '../CartItem/CartItemMobile';
import base64 from 'base-64'
import Loader from '../Loader/Loader';
import { API_KEY } from '../../config/appConfig';
const Cart = ({ mobile }) => {

    const [cartArr, setCartArr] = useState();

    const [loader, setLoader] = useState(true);

    const [inputLoader, setInputLoader] = useState()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-type": "application/json",
                Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
            },
            credentials: 'include'
        };
        fetch(`${API_KEY}/api/cart`, requestOptions)
            .then(response => response.json())
            .then(result => setCartArr(result))
            .then(() => setLoader(false))
            .then(() => changeAmount())
    }, []);

    const [amount, setAmount] = useState(0)

    const [discountAmount, setDiscountAmount] = useState(0)

    const changeAmount = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-type": "application/json",
                Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
            },
            credentials: 'include'
        };
        fetch(`${API_KEY}/api/cart`, requestOptions)
            .then(response => response.json())
            .then((res) => {
                setCartArr([...res].sort((a, b) => a.product.id - b.product.id))
                let sum = 0;
                for (let i = 0; i < res.length; i++)
                    sum += res[i].product.price * res[i].quantity;
                setAmount(sum)
                sum = 0;
                for (let i = 0; i < res.length; i++)
                    sum += res[i].product.discount * res[i].quantity;
                setDiscountAmount(sum)
            })
            .then(() => setTimeout(() => setInputLoader(false), 100))
    }

    const Loaded = () => {
        if (!loader) return (
            <div>
                {!mobile ?
                    <div className='flex flex-col tablet:flex-row justify-between'>
                        <div className='mt-12 flex flex-col justify-between w-678px mx-auto tablet:mx-0'>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {cartArr.map(x =>
                                    <CartItem
                                        changeAmount={changeAmount}
                                        key={x.product.id}
                                        cartArr={cartArr}
                                        setCartArr={setCartArr}
                                        mobile={mobile}
                                        quantity={x.quantity}
                                        el={x.product}
                                        loader={inputLoader}
                                        setLoader={setInputLoader} />)}
                            </table>
                        </div>
                        <div className='w-450px h-325px shadow-md flex flex-col mx-auto mt-10 tablet:mt-0 justify-between rounded-10px font-24px font-semibold'>
                            <div className='text-text_gray flex justify-between mt-8 mx-8'>
                                <span>Итого</span>
                                <span>{amount}</span>
                            </div>
                            <div className='text-green flex justify-between mx-8'>
                                <span>Скидка</span>
                                <span>{discountAmount}</span>
                            </div>
                            <div className='text-black flex justify-between mx-8'>
                                <span>Итого к оплате</span>
                                <span>{amount - discountAmount}</span>
                            </div>
                            <div className="mx-auto"><Link to="/delivery"><button className='rounded-10px h-60px w-325px bg-purple mb-8'>Продолжить покупку</button></Link></div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col mx-20px mt-4'>
                        <div>
                            <div>Ваша корзина{cartArr.length === 0 ? " пуста" : ''}</div>
                            {cartArr.map(x => <CartItemMobile
                                changeAmount={changeAmount}
                                key={x.product.id}
                                cartArr={cartArr}
                                setCartArr={setCartArr}
                                mobile={mobile}
                                quantity={x.quantity}
                                el={x.product}
                                loader={inputLoader}
                                setLoader={setInputLoader} item={x.product} />)}
                        </div>
                        <div className='rounded-10px w-full bg-input_bg h-200px my-20px'>
                            <div className='m-15px'>
                                <div className='flex justify-between text-text_gray'>
                                    <span>Итого</span>
                                    <span>{amount}₽</span>
                                </div>
                                <div className='flex justify-between my-12px text-green'>
                                    <span>Скидка</span>
                                    <span>{discountAmount}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Итого к оплате</span>
                                    <span>{amount - discountAmount}₽</span>
                                </div>
                                <Link to="/delivery"><button className='text-center w-full mt-4 bg-purple rounded-10px h-50px'>Перейти к доставке</button></Link>
                            </div>
                        </div>
                    </div>}
            </div>)
        return (<></>)
    }
    return (
        <section className='max-w-main mx-auto'>
            <Loader loader={loader} />
            <Loaded />
        </section>
    );
};

export default Cart;