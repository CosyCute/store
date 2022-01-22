import React from 'react';
import MCloseX from '../../icons/MCloseX';
import MAuth from '../../icons/MAuth';
const SideBar = ({sidebarActive, setSideBarActive}) => {

    const arr = ['Категория','Категория','Категория','Категория','Категория','Категория']

    return (
        <div className={`sidebar absolute top-0 h-screen w-250px z-20 bg-white shadow-md ease-in duration-200
        ${sidebarActive ? "left-0" : "-left-250px"}`}>
            <div className='flex justify-between mx-20px mt-10px h-56px '>
                <div onClick={() => setSideBarActive(false)} className='my-auto'>
                    <MCloseX />
                </div>
                <div className='flex my-auto text-14px'>
                    <span className='mt-1 mr-1'>Войти</span>
                    <div className='my-auto'><MAuth /></div>
                </div>
            </div>
            <div className='text-12px font-medium bg-input_bg'>
                <div className='ml-20px'>Скидка зарегистрированным<br /> пользователям 5%</div>
            </div>
            <div className='ml-20px text-16px font-normal mt-2 text-blue'>
                {arr.map(x => <div className='h-33px'>{x}</div>)}
            </div>
            <div className='h-105px text-12px bg-input_bg font-medium'>
                <div className='py-15px ml-20px'>О компании</div>
                <div className='ml-20px'>Каталог</div>
                <div className='py-15px ml-20px'>Контакты</div>
            </div>
            <div className='px-20px mt-15px'>
                <div className='text-12px font-medium'>8-999-999-99-99 </div>
                <div className='text-12px font-normal'>Бесплатный звонок</div>
            </div>
        </div>
    );
};

export default SideBar;