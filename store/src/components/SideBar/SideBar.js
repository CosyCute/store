import React from 'react';
import MCloseX from '../../icons/MCloseX';
import MAuth from '../../icons/MAuth';
import DropList from '../DropList/DropList';
import { Link } from 'react-router-dom'
const SideBar = ({ sidebarActive, setSideBarActive, setAuthorization, setFilterArr, json, filters, filterJson }) => {

    const arr = [
        { name: 'elexir', title: 'Эликсир' },
        { name: 'tea', title: 'Чай' },
        { name: 'vitamins', title: 'Витамины' },
        { name: 'capsule', title: 'Капсулы' },
        { name: 'kit', title: 'Набор' },
        { name: 'box', title: 'Коробка' },]

    return (
        <div>
            <div className={`sidebar absolute top-0 h-screen w-250px z-20 bg-white shadow-md ease-in duration-200
            ${sidebarActive ? "left-0" : "-left-250px"}`}>
                {sidebarActive === true ? <div>
                    <div className='flex justify-between mx-20px mt-10px h-56px '>
                        <div onClick={() => setSideBarActive(false)} className='my-auto'>
                            <MCloseX />
                        </div>
                        <div onClick={() => { setSideBarActive(false); setAuthorization(true) }} className='flex my-auto text-14px'>
                            <span className='mt-1 mr-1'>Войти</span>
                            <div className='my-auto'><MAuth /></div>
                        </div>
                    </div>
                    {/* <div className='text-12px font-medium bg-input_bg'>
                        <div className='ml-20px'>Скидка зарегистрированным<br /> пользователям 5%</div>
                    </div> */}
                    <div className='ml-20px text-16px font-normal mt-2 text-blue'>
                        {arr.map(x => <Link to={`/store/${x.name}`}><div className='h-33px'>{x.title}</div></Link>)}
                    </div>
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
                                <form onSubmit={(e) => filterJson(e)}>
                                    <div><DropList setFilterArr={setFilterArr} json={json} filters={filters.brands} title="Бренд" /></div>
                                    <div><DropList setFilterArr={setFilterArr} json={json} filters={filters.series} title="Серия" /></div>
                                    <div><DropList setFilterArr={setFilterArr} json={json} filters={filters.categories} title="Категория" /></div>
                                    <div className='w-full flex justify-between'>
                                        <div className='flex flex-col justify-center'>
                                            <input id="from" className='w-87px h-41px number my-auto border-purple border-2 pl-4' />
                                            <div className='text-center'>Цена от</div>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <input id="to" className='w-87px h-41px number my-auto border-purple border-2 pl-4' />
                                            <div className='text-center'>до, руб</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type='submit' className='mr-2 mt-4 w-full rounded-5px bg-purple h-50px'>
                                            Применить
                                        </button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div>
                            </div>
                        }
                    </div>}
            </div >
            {
                sidebarActive ?
                    <div onClick={() => setSideBarActive(false)} className='absolute inset-0 w-screen h-screen z-10 backdrop-blur-sm'></div> : <></>}
        </div >
    );
};

export default SideBar;