import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SwiperMain from '../SwiperMain/SwiperMain';
import Loader from '../Loader/Loader';
import { API_KEY } from '../../config/appConfig';
const Main = ({ setNotification }) => {

    const [json, setJson] = useState();

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`${API_KEY}/api/products/`)
            .then(res => res.json())
            .then(data => setJson(data))
            .then(() => setLoader(false))
    }, []);

    return (
        <div>
            <Loader loader={loader} />
            {!loader
                ?
                <section className='flex flex-col'>
                    <div>zxczxc</div>
                    <div className='mt-10 w-full text-white'><SwiperMain mobile={mobile} /></div>
                    <div className='max-w-main w-full mx-auto mt-8'><span className='font-normal text-24px ml-4'>Хит продаж</span></div>
                    <div className='flex justify-center mx-auto'>
                        <div className='mt-8 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 max-w-main gap-x-20px gap-y-40px'>
                            {json.slice(0, 20).map(x => <ProductCard setNotification={setNotification} key={x.id} el={x} />)}
                        </div>
                    </div>
                    <div className='max-w-main w-full mx-auto mt-8'><span className='ml-4 font-normal text-24px'>Мы рекомендуем</span></div>
                    <div className='mt-8 flex justify-center mx-auto'>
                        <div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 grid-rows-2 max-w-main mx-auto gap-x-20px gap-y-40px'>
                            {json.slice(20, 40).map(x => <ProductCard setNotification={setNotification} key={x.id} el={x} />)}
                        </div>
                    </div>
                </section >
                :
                <></>
            }
        </div>
    );
};

export default Main;