import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SwiperMain = ({mobile}) => {
    SwiperCore.use([Navigation, Pagination]);

    const swiperSlides = ['block', 'black', 'bleck', 'blick', 'blxck']

    return (
        <section className='h-120px mobile:h-325px laptop:h-520px w-body desktop:w-main'>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {swiperSlides.map(x => <SwiperSlide className='h-120px mobile:h-325px laptop:h-520px' key={x}>{x}</SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default SwiperMain;