import React, { useState, useEffect } from 'react';

const MyInputNumber = () => {

    const [valueIn, setValueIn] = useState(1);

    useEffect(() => {
        if (valueIn === '') setValueIn(0)
        if (valueIn[0] === '0') setValueIn(valueIn.toString().substring(1, valueIn.length))
    }, [valueIn])

    return (
        <div className='flex text-purple h-47px'>
            <button className='relative left-6' onClick={() => {
                if (valueIn !== 0)
                    setValueIn(valueIn - 1)
            }}>-</button>
            <div className='rounded-5px border-purple border-2 w-120px pt-2'>
                <input
                    name={"id"}
                    onChange={(e) => { setValueIn(e.target.value) }}
                    type="number"
                    className='input text-center ml-1 w-110px card-input outline-none border-0' value={valueIn} />
            </div>
            <button className='relative right-6' onClick={() => setValueIn(parseInt(valueIn) + 1)}>+</button>
        </div>
    );
};

export default MyInputNumber;