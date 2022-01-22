import React from 'react';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';
import SwiperMain from '../SwiperMain/SwiperMain';
const Main = ({mobile}) => {

    const arr = [
        { title: "card", id: 0 },
        { title: "card", id: 1 },
        { title: "card", id: 2 },
        { title: "card", id: 3 },
        { title: "card", id: 4 },
        { title: "card", id: 5 },
        { title: "card", id: 6 },
        { title: "card", id: 7 },
        { title: "card", id: 8 },
        { title: "card", id: 9 },];

    return (
        <section className='flex flex-col'>
            <div className='mx-auto mt-10 rounded-20px bg-purple text-white'><SwiperMain mobile={mobile}/></div>
            <span className='mx-auto mt-8 font-normal text-24px'>Хит продаж</span>
            <div className=' flex justify-center mx-auto'>   
                <div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 max-w-main gap-x-20px'>
                    {arr.map(x => <ProductCard key={x.id} />)}
                </div>
            </div>
            {/* <Banner /> */}
            <div className='max-w-main mx-auto mt-8'><span className='font-normal text-24px'>Мы рекомендуем</span></div>
            <div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 grid-rows-2 max-w-main mx-auto gap-x-20px'>
                {arr.map(x => <ProductCard key={x.id} />)}
            </div>
        </section >
    );
};

export default Main;