import React from 'react';
import MInstagram from '../../icons/MInstagram'
import MPhone from '../../icons/MPhone'
import MMail from '../../icons/MMail'
import { Link } from 'react-router-dom';
const Footer = ({ mobile }) => {
    return (
        <footer className='mt-4 bg-light_gray flex justify-between text-18px max-w-screen'>
            {!mobile ? <div className='flex justify-between w-full'>
                <div className='my-auto pl-12'>
                    <h1 className='text-36px font-bold whitespace-nowrap'>Ток жизни</h1>
                    <div>
                        <div className='flex flex-col 1024px:flex-row'>
                            <div>© {new Date().getFullYear()}</div> 
                            <div className="desktop:mx-1">Ток Жизни. </div>
                            <div>Все права защищены.</div></div>
                    </div>
                </div>
                <div className='my-auto font-bold'>
                    <ul className='flex justify-between'>
                        <li><Link to="/deliveryinfo">Способы доставки</Link></li>
                        <li><Link to="/" className='mx-10'>Каталог</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <div className='my-auto flex flex-col pr-12 max-w-300px w-full'>
                    <a className='flex' href="https://www.instagram.com/tok_zhizni/">
                        <div className='my-auto w-33px'><MInstagram/></div>/tok_zhizni</a>
                    <a className='flex' href="mailto:tokzhiz@gmail.com">
                        <div className='my-auto w-33px'><MMail/></div>tokzhiz@gmail.com</a>
                    <a className='flex' href="tel:+79262611975">
                        <div className='my-auto w-33px'><MPhone/></div>+7 926 261-19-75</a>
                </div></div>
                :
                <div className='h-125px w-full flex justify-between m-20px'>
                    <div className='flex flex-col jusity-between'>
                        <div>
                            <div className='flex flex-col text-12px font-medium'>
                                <Link to="/deliveryinfo"><span className='whitespace-nowrap'>ДОСТАВКА</span></Link>
                                <Link to="/"><span>КАТАЛОГ</span></Link>
                                <Link to="/contacts"><span>КОНТАКТЫ</span></Link>
                            </div>
                            <div className='flex justify-between w-70px'>
                                <a href="https://www.instagram.com/tok_zhizni/"><MInstagram /></a>
                                {/* <a herf="tel:+79262611975"><MPhone /></a> */}
                                <a href="mailto:tokzhiz@gmail.com"><MMail /></a>
                            </div>
                        </div>
                    </div>
                    <div className='text-10px text-right'>
                        <Link to="/"><h1 className='text-24px'>Ток Жизни</h1></Link>
                        <span>© 2022 Ток Жизни.</span><br/>
                        <span>Все права защищены.</span>
                    </div>
                </div>
            }
        </footer >
    );
};

export default Footer;