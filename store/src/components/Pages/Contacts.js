import React from 'react';
import MInstagram from '../../icons/MInstagram'
import MMail from '../../icons/MMail'
import MPhone from '../../icons/MPhone'
const Contacts = () => {
    return (
        <div>
            <div className='max-w-main w-full mx-auto'>
                <div className="font-bold text-32px">Контакты</div>
                <div className='flex justify-between'>
                    <div className='text-18px'>
                        <div className='mt-8 text-24px'>Вы можете связаться с нами <br />следующими способами:</div>
                        <div className='w-185px'>
                            <div className='mt-8'>Наш инстаграм</div>
                            <a href="https://www.instagram.com/tok_zhizni/" className="flex">
                                <div className='my-auto mr-4'><MInstagram /></div>
                                <div>/tok_zhizni</div>
                            </a>
                        </div>
                        <div className='w-185px'>
                            <div className='mt-4'>Наша почта</div>
                            <a href="mailto:tokzhiz@gmail.com" className="flex">
                                <div className='my-auto mr-4'><MMail /></div>
                                <div>tokzhiz@gmail.com</div>
                            </a>
                        </div>
                        <div className='w-185px'>
                            <div className='mt-4'>Наш телефон</div>
                            <a href="tel:+79262611975" className="flex">
                                <div className='my-auto mr-4'><MPhone /></div>
                                <div>+7 926 261-19-75</div>
                            </a>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.7624800062!2d36.82515153908799!3d55.58074817847817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow!5e0!3m2!1sen!2sru!4v1643292410297!5m2!1sen!2sru" width="600" height="450" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts;