import React from 'react';

const DeliveryItem = ({ item , setCurrentDelivery}) => {
    return (
        <label htmlFor={`${item.name}`} onClick={() => setCurrentDelivery({name: item.name, price: item.price})} className='block rounded-10px w-325px h-158px shadow-md mb-20px flex justify-between '>
            <input name='delivery' className='my-auto ml-4 h-20px w-20px' type='radio' id={`${item.name}`} />
            <div className='w-200px my-auto mr-4'>{item.image ? <img src={item.image}/> : item.name}</div>
        </label>
    );
};

export default DeliveryItem;