import React from 'react';
import dermaroller from '../../assets/dermaroller.png'
const CategoriesItem = ({el}) => {
    return (
        <div className='w-1/4 mx-8px h-260px shadow-md rounded-20px flex justify-center cursor-pointer font-bold text-24px'>
            <span className='my-auto'>{el}</span><img src={dermaroller}/> 
        </div>
    );
};

export default CategoriesItem;