import React, {useState} from 'react';
import Search from '../../icons/Search';
import Profile from '../../icons/Profile';
import Cart from '../../icons/Cart';
import { Link } from 'react-router-dom';
import MCall from '../../icons/MCall';
import MCart from '../../icons/MCart';
import MAuth from '../../icons/MAuth';
import MBurger from '../../icons/MBurger';
import MSearch from '../../icons/MSearch';
import SideBar from '../SideBar/SideBar';
const Header = ({setAuthorization, mobile}) => {

    const [sidebarActive, setSideBarActive] = useState(false)

    return (
        <header className='text-36px font-light flex justify-center max-w-main mx-auto display-none mobile:display-block'>
            <SideBar sidebarActive={sidebarActive} setSideBarActive={setSideBarActive}/>
            {!mobile ? <div className='w-full h-137px'>
                <div className='flex justify-between h-80px'>
                    <Link to="/"><h1 className='text-48px my-auto font-bold'>Ток Жизни</h1></Link>
                    <div className='flex flex-col my-auto whitespace-nowrap text-18px'>
                        <span className='font-medium'>8-999-999-99-99</span>
                        <span>Бесплатный звонок</span>
                    </div>
                    <div className='my-auto h-47px min-w-225px w-2/5 whitespace-nowrap flex'>
                        <input className='w-full outline-none rounded-l-30px h-47px border-2 border-r-0 border-purple pl-4 text-18px bg-gray' placeholder='Найти' />
                        <button className='rounded-r-30px h-47px w-56px border-2 border-purple bg-purple'><div className="ml-3"><Search /></div></button>
                    </div>
                    <div className='flex my-auto justify-between w-137px'>
                        <div onClick={() => setAuthorization(true)} className='flex flex-col'>
                            <button className="rounded-cirlce w-30px h-30px mx-auto"><Profile /></button>
                            <span className='text-16px'>Войти</span>
                        </div>
                        <Link to="/cart"><div className='flex flex-col'>
                            <button className="rounded-cirlce w-30px h-30px mx-auto"><Cart /></button>
                            <span className='text-16px'>Корзина</span>
                        </div></Link>
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
            </div> : 
            <div className='py-12px px-20px w-screen h-75px flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <div onClick={() => setSideBarActive(true)} className='my-auto'><MBurger/></div>
                    <Link className='flex flex-col' to="/"><h1 className='my-auto font-bold text-24px'>Ток Жизни</h1></Link>
                    <button><MCall/></button>
                    <div className='my-auto' onClick={() => setAuthorization(true)}><MAuth/></div>
                    <Link to="/cart"><button><MCart/></button></Link>
                </div>
                <div className='h-33px flex whitespace-nowrap max-w-screen'>
                    <input placeholder='Искать на сайте' 
                    className='pl-4 rounded-l-30px bg-gray h-33px text-14px w-full'/>
                    <button className='rounded-r-30px h-33px w-33px bg-purple flex justify-center'><div className='my-auto'><MSearch/></div></button>
                </div>
            </div>}
            {sidebarActive ? 
            <div onClick={() => setSideBarActive(false)} className='absolute inset-0 w-screen h-screen z-10 backdrop-blur-sm'></div> : <></>}
        </header>
    );
};

export default Header;