import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../config/appConfig';
import base64 from 'base-64'
import Loader from '../Loader/Loader';
import { type } from '@testing-library/user-event/dist/type';
const MyInputNumber = ({ mobile = false, setLoader, quantity = 'x', el, changeAmount, loader, id, setQuantity }) => {

    const [valueIn, setValueIn] = useState(quantity);

    useEffect(() => {
        if (valueIn === '' || valueIn < 1) {
            setValueIn(1)
        }
        else if (valueIn[0] === 0) {
            setValueIn(valueIn.toString().substring(1, valueIn.length))
        }
    }, [valueIn])

    const changeValue = (val) => {
        if (el.id !== 'input-number') {
            setLoader(true)
            let inputValue = undefined;
            if (typeof (val) === "number") inputValue = val
            else if (val === '-') inputValue = valueIn - 1;
            else inputValue = valueIn + 1
            let raw = [{
                productId: el.id,
                quantity: inputValue,
            }]
            fetch(`${API_KEY}/api/cart`, {
                method: 'PUT',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Content-type": "application/json",
                    Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
                },
                credentials: 'include',
                body: JSON.stringify(raw)
            })
                .then(() => setTimeout(() => changeAmount(), 100))
        }
        else {
            let inputValue = undefined;
            if (typeof (val) === "number") inputValue = val
            else if (val === '-') inputValue = valueIn - 1;
            else inputValue = valueIn + 1
            setQuantity(inputValue)
        }
    }

    return (
        <div className={`flex text-purple ${mobile ? 'h-23px text-10px' : 'h-47px text-18px'}`}>
            <Loader loader={loader} />
            <button className='relative left-4 mobile:left-6' onClick={(e) => {
                if (valueIn > 1) {
                    setValueIn(valueIn - 1)
                    changeValue('-')
                }
            }}>-</button>
            <div className={`rounded-5px border-purple border-2 ${mobile ? "w-60px" : 'w-120px'} flex justify-center flex-col`}>
                <input
                    id={el.id}
                    name={"id"}
                    onChange={(e) => {
                        {
                            setValueIn(e.target.value)
                        }
                    }}
                    onBlur={(e) => changeValue(parseInt(e.target.value))}
                    type="number"
                    className='input text-center mx-auto w-30px card-input outline-none border-0 ' value={valueIn} />
            </div>
            <button className={`relative ${mobile ? 'right-4' : 'right-6'}`} onClick={() => {
                setValueIn(parseInt(valueIn) + 1)
                changeValue('+')
            }}>+</button>
        </div>
    );
};

export default MyInputNumber;