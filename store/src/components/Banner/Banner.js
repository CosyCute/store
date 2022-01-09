import React from 'react';
import pills from '../../assets/pills4.png';
const Banner = () => {
    return (
        <div className='w-main h-137px mx-auto text-white mt-20px'>
            <div className='flex justify-between bg-purple rounded-30px'>
                <span className='font-bold text-24px my-auto ml-14'>Акция</span>
                <span className='font-black text-64px ml-28 leading-77px'>СКИДКА 3000 РУБЛЕЙ ПРИ ПОКУПКЕ ОТ 50000</span>
                <img src={pills} className='h-137px'/>
            </div>
        </div>
    );
};

export default Banner;