import React from 'react';
import pills from '../../assets/pills4.png';
const Banner = () => {
    return (
        <section className='max-w-full h-137px mx-auto text-white mt-20px'>
            <div className='flex justify-between bg-purple rounded-30px'>
                <span className='font-bold text-24px my-auto ml-14'>Акция</span>
                <span className='font-black text-32px ml-8 my-auto text-center'>СКИДКА 5% ЗАРЕГЕСТРИРОВАННЫМ ПОЛЬЗОВАТЕЛЯМ</span>
                <img src={pills} className='h-137px' alt="pills"/>
            </div>
        </section>
    );
};

export default Banner;