import React from 'react';
import { API_KEY } from '../../config/appConfig';
import MCloseX from '../../icons/MCloseX';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import base64 from 'base-64'
const CartItemMobile = ({ el, setCartArr, cartArr, quantity, changeAmount, loader, setLoader, item }) => {

    const remove = () => {
        let raw = [{
            productId: el.id,
            quantity: 0,
        }]
        var requestOptions = {
            method: 'PUT',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-type": "application/json",
                Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
            },
            credentials: 'include',
            body: JSON.stringify(raw)
        };
        fetch(`${API_KEY}/api/cart`, requestOptions)
            .then(() => setCartArr([...cartArr].filter(x => x.product.id !== el.id)))
            .then(() => changeAmount())
    }

    return (
        <div className='rounded-10px h-120px bg-input_bg flex mt-10px flex justify-between mt-2'>
            <div className='my-auto w-80px h-80px rounded-10px bg-white mx-12px flex flex-col justify-center'>
                <img className='w-80px h-80px' src={`${API_KEY}/api/images/${item.imagePath}`} alt={"product"} />
            </div>
            <div className='max-w-100px text-14px flex flex-col justify-center'><span>{item.name}</span></div>
            <div className='my-auto'>
                {/* <div className='w-50px h-12px bg-green text-8px text-white flex justify-center rounded-10px'>СКИДКА</div> */}
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='text-center ml-2 mb-2 text-16px font-bold'>{item.price}₽</div>
                        <div onClick={() => remove()} className='my-auto mr-4'><button><MCloseX /></button></div>
                    </div>
                    <div className='my-auto'><MyInputNumber
                        loader={loader}
                        setLoader={setLoader}
                        changeAmount={changeAmount}
                        quantity={quantity}
                        el={el} /></div>
                </div>
            </div>

        </div>
    );
};

export default CartItemMobile;