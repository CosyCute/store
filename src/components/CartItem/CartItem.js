import React from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import MCloseX from '../../icons/MCloseX';
import { API_KEY } from '../../config/appConfig';
import base64 from 'base-64'
const CartItem = ({ el, setCartArr, cartArr, quantity, changeAmount, loader, setLoader }) => {

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
        <tbody>
            <tr className='h-158px mt-3 w-full max-w-678px shadow-md rounded-10px my-10px flex justify-between'>
                <td className='shadow-md w-120px h-120px my-auto rounded-10px ml-4 flex flex-col justify-center'>
                    <img height={'100px'} className="mx-auto" src={`${API_KEY}/api/images/${el.imagePath}`} alt="product" />
                </td>
                <td className='flex justify-between my-auto max-w-200px text-center'>
                    <span>{el.name}</span>
                </td>
                <td>{el.discount !== 0 ?
                    <div className='rounded-10px my-auto bg-green font-16px w-100px h-20px text-center text-white leading-20px'>
                        СКИДКА
                    </div>
                    : <></>
                }
                </td>
                <td className='flex w-225px'>
                    <div className='my-auto'><MyInputNumber loader={loader} setLoader={setLoader} changeAmount={changeAmount} quantity={quantity} el={el} /></div>
                    <div className='my-auto mr-4'>{el.price}₽</div>
                    <div onClick={() => remove()} className='my-auto mr-4'><button><MCloseX /></button></div>
                </td>
            </tr>
        </tbody>
    );
};

export default CartItem;