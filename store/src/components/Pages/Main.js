import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SwiperMain from '../SwiperMain/SwiperMain';
import Loader from '../Loader/Loader';
const Main = ({ mobile }) => {

    const [json, setJson] = useState();

    const [loader, setLoader] = useState(true);

    const rand = Math.floor(Math.random() * 60)

    useEffect(() => {
        fetch(`https://d1zero.ru/api/products/`)
            .then(res => res.json())
            .then(data => setJson(data))
            .then(() => setLoader(false))
    }, []);

    const Loaded = () => {
        if (!loader)
            return (
                <section className='flex flex-col'>
                    {/* <div className='mt-10 w-full text-white'><SwiperMain mobile={mobile} /></div> */}
                    <div className='max-w-main w-full mx-auto mt-8'><span className='font-normal text-24px ml-4'>Хит продаж</span></div>
                    <div className='flex justify-center mx-auto'>
                        <div className='mt-8 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 max-w-main gap-x-20px gap-y-40px'>
                            {json.slice(rand + 20, rand + 40).map(x => <ProductCard key={x.id} el={x} />)}
                        </div>
                    </div>
                    <div className='max-w-main w-full mx-auto mt-8'><span className='ml-4 font-normal text-24px'>Мы рекомендуем</span></div>
                    <div className='mt-8 flex justify-center mx-auto'>
                        <div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 grid-rows-2 max-w-main mx-auto gap-x-20px gap-y-40px'>
                            {json.slice(rand, rand + 20).map(x => <ProductCard key={x.id} el={x} />)}
                        </div>
                    </div>
                </section >)
        return (<div></div>)
    }

    return (
        <div>
            <Loader loader={loader} />
            <Loaded />
        </div>
    );
};

export default Main;