import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SwiperMain = () => {
    SwiperCore.use([Navigation, Pagination]);

    const swiperSlides = ['block', 'block', 'block', 'block', 'block']

    return (
        <div className='h-520px w-main'>
            <Swiper
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
            >
                {swiperSlides.map(x => <SwiperSlide className='h-520px'>{x}</SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default SwiperMain;