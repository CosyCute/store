import React from 'react';

const DeliveryItem = ({ item , setCurrentDelivery}) => {

    const setDelivery = () => {
        setCurrentDelivery({name: item.name, price: item.price})
    }

    return (
        <label htmlFor={`${item.name}`} onClick={() => setDelivery()} className='block rounded-10px w-325px h-158px shadow-md mb-20px flex justify-between '>
            <input name='delivery' className='my-auto ml-10 h-20px w-20px' type='radio' id={`${item.name}`} />
            <span className='w-150px my-auto mr-4'>{item.image ? <img src={item.image}/> : item.name}</span>
        </label>
    );
};

export default DeliveryItem;