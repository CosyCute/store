import React from 'react';
import Search from '../../icons/Search';
import Profile from '../../icons/Profile';
import Cart from '../../icons/Cart';
const Header = () => {

    return (
        <header className='h-137px text-36px font-light flex justify-center'>
            <div className='w-main'>
                <div className='flex justify-between h-80px'>
                    <h1 className='text-48px my-auto font-bold'>Название</h1>
                    <div className='flex flex-col my-auto whitespace-nowrap text-18px'>
                        <span className='font-medium'>8-999-999-99-99</span>
                        <span>Бесплатный звонок</span>
                    </div>
                    <div className='my-auto h-47px min-w-225px w-2/5 whitespace-nowrap flex'>
                        <input className='w-full outline-none rounded-l-30px h-47px border-2 border-r-0 border-purple pl-4 text-18px bg-gray' placeholder='Найти' />
                        <button className='rounded-r-30px h-47px w-56px border-2 border-purple bg-purple'><div className="ml-3"><Search /></div></button>
                    </div>
                    <div className='flex my-auto justify-between w-137px'>
                        <div className='flex flex-col'>
                            <button className="rounded-cirlce w-30px h-30px mx-auto"><Profile/></button>
                            <span className='text-16px'>Войти</span>
                        </div>
                        <div className='flex flex-col'>
                            <button className="rounded-cirlce w-30px h-30px mx-auto"><Cart/></button>
                            <span className='text-16px'>Корзина</span>
                        </div>
                    </div>
                </div>
                <div className="h-44px">
                    <ul className="flex justify-between text-24px font-normal">
                        <li className="text-blue">Категория</li>
                        <li className="text-blue">Категория</li>
                        <li className="text-blue">Категория</li>
                        <li className="text-blue">Категория</li>
                        <li className="text-blue">Категория</li>
                        <li className="text-blue">Категория</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;