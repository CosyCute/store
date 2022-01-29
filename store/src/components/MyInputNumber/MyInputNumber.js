import React, { useState, useEffect } from 'react';

const MyInputNumber = ({ mobile = false, id }) => {

    const [valueIn, setValueIn] = useState(1);

    useEffect(() => {
        if (valueIn === '') setValueIn(0)
        if (valueIn[0] === '0') setValueIn(valueIn.toString().substring(1, valueIn.length))
    }, [valueIn])

    return (
        <div className={`flex text-purple ${mobile ? 'h-23px text-10px' : 'h-47px text-18px'}`}>
            <button className='relative left-4 mobile:left-6' onClick={() => {
                if (valueIn !== 0)
                    setValueIn(valueIn - 1)
            }}>-</button>
            <div className={`rounded-5px border-purple border-2 ${mobile ? "w-60px" : 'w-120px'} flex justify-center flex-col`}>
                <input
                    id={id}
                    name={"id"}
                    onChange={(e) => { setValueIn(e.target.value) }}
                    type="number"
                    className='input text-center mx-auto w-30px card-input outline-none border-0 ' value={valueIn} />
            </div>
            <button className={`relative ${mobile ? 'right-4' : 'right-6'}`} onClick={() => setValueIn(parseInt(valueIn) + 1)}>+</button>
        </div>
    );
};

export default MyInputNumber;