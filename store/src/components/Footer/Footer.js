import React from 'react';
import MInstagram from '../../icons/MInstagram'
import MPhone from '../../icons/MPhone'
import MMail from '../../icons/MMail'
const Footer = ({ mobile }) => {
    return (
        <footer className='mt-80px h-137px bg-light_gray flex justify-between text-18px max-w-screen'>
            {!mobile ? <div className='flex justify-between w-full'>
                <div className='my-auto pl-12'>
                    <h1 className='text-36px font-bold'>Ток жизни</h1>
                    <div>
                        <span>© {new Date().getFullYear()} Ток Жизни. Все права защищены.</span>
                    </div>
                </div>
                <div className='my-auto w-317px font-bold'>
                    <ul className='flex justify-between'>
                        <li>О компании</li>
                        <li>Каталог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className='my-auto flex flex-col text-right pr-12'>
                    <span>Наш инстаграм</span>
                    <span>nashapochta@mail.ru</span>
                    <span>8 (999) 999 99 99</span>
                </div></div>
                :
                <div className='h-125px w-full flex justify-between m-20px'>
                    <div className='flex flex-col jusity-between'>
                        <div>
                            <div className='flex flex-col text-12px font-medium'>
                                <span className='whitespace-nowrap'>О КОМПАНИИ</span>
                                <span>КАТАЛОГ</span>
                                <span>КОНТАКТЫ</span>
                            </div>
                            <div className='flex justify-between w-70px'>
                                <MInstagram />
                                <MPhone />
                                <MMail />
                            </div>
                        </div>
                    </div>
                    <div className='text-10px text-right'>
                        <h1 className='text-24px'>Ток Жизни</h1>
                        <span>© 2022 Ток Жизни.</span><br/>
                        <span>Все права защищены.</span>
                    </div>
                </div>
            }
        </footer >
    );
};

export default Footer;