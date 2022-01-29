import React from 'react';
import MCloseX from '../../icons/MCloseX';
import MAuth from '../../icons/MAuth';
import DropList from '../DropList/DropList';
import { Link } from 'react-router-dom'
const SideBar = ({ sidebarActive, setSideBarActive, setAuthorization }) => {

    // const arr = ['Категория', 'Категория', 'Категория', 'Категория', 'Категория', 'Категория']

    return (
        <div>
            <div className={`sidebar absolute top-0 h-screen w-250px z-20 bg-white shadow-md ease-in duration-200
            ${sidebarActive ? "left-0" : "-left-250px"}`}>
                {sidebarActive === true ? <div>
                    <div className='flex justify-between mx-20px mt-10px h-56px '>
                        <div onClick={() => setSideBarActive(false)} className='my-auto'>
                            <MCloseX />
                        </div>
                        <div onClick={() => {setSideBarActive(false); setAuthorization(true)}} className='flex my-auto text-14px'>
                            <span className='mt-1 mr-1'>Войти</span>
                            <div className='my-auto'><MAuth /></div>
                        </div>
                    </div>
                    {/* <div className='text-12px font-medium bg-input_bg'>
                        <div className='ml-20px'>Скидка зарегистрированным<br /> пользователям 5%</div>
                    </div> */}
                    {/* <div className='ml-20px text-16px font-normal mt-2 text-blue'>
                        {arr.map(x => <div className='h-33px'>{x}</div>)}
                    </div> */}
                    <div className='h-105px text-12px bg-input_bg font-medium'>
                        <Link to="/deliveryinfo"><div className='py-15px ml-20px'>Способы доставки</div></Link>
                        <Link to="/store"><div className='ml-20px'>Каталог</div></Link>
                        <Link to="/contacts"><div className='py-15px ml-20px'>Контакты</div></Link>
                    </div>
                    <div className='px-20px mt-15px'>
                        <a href="tel:+79262611975">
                            <div className='text-12px font-medium'>8-926-261-197-59 </div>
                            <div className='text-12px font-normal'>Бесплатный звонок</div>
                        </a>
                    </div>
                </div>
                    :
                    <div className='m-20px'>
                        {sidebarActive === 'Фильтры' ?
                            <div>
                                <div className='flex justify-between'>
                                    <div onClick={() => setSideBarActive(false)} className='my-auto'>
                                        <MCloseX />
                                    </div>
                                    <div>Фильтры</div>
                                </div>
                                <div><DropList title="Бренд" /></div>
                                <div><DropList title="Способы применения" /></div>
                                <div><DropList title="Форма" /></div>
                                <div><DropList title="Категория" /></div>
                            </div>
                            :
                            <div>
                            </div>
                        }
                    </div>}
            </div>
            {sidebarActive ?
                <div onClick={() => setSideBarActive(false)} className='absolute inset-0 w-screen h-screen z-10 backdrop-blur-sm'></div> : <></>}
        </div>
    );
};

export default SideBar;