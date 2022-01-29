import React, { useState, useEffect } from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import Loader from '../Loader/Loader';
import ReactMarkdown from 'react-markdown'
const Card = ({ mobile }) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [json, setJson] = useState()

    useEffect(() => {
        fetch(`https://d1zero.ru/api/products/${window.location.pathname.split('/card/')[1]}`)
            .then(res => res.json())
            // .then(e => console.log(e))
            .then(data => setJson(data))
            .then(() => setLoader(false))
    }, []);

    const addToCart = () => {
        var formdata = new FormData();
        formdata.append("product_id", json.id);
        formdata.append("amount", document.getElementById('input-number').value);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://d1zero.ru/api/cart/", requestOptions)
    }

    return (
        <div>
            <Loader loader={loader} />
            {!loader ?
                <div>
                    {!mobile ? <div>
                        <div className='w-full max-w-1280px flex flex-col tablet:flex-row mx-auto mt-47px'>
                            <div className='shadow-md rounded-20px mx-auto tablet:mx-0'>
                                <img className='' src={`https://d1zero.ru${json.image}`} alt="Product" />
                            </div>
                            <div className='w-1/2 ml-80px'>
                                <div className='flex flex-col font-bold'>
                                    <span className='text-36px'>{json.name}</span>
                                    <span className='text-24px'>{json.price + "₽"}</span>
                                </div>
                                <div className='flex flex-col text-18px text-text_gray mt-4'>
                                    {/* <span>Россия</span> */}
                                    <span>{json.category_name}</span>
                                </div>
                                <div className='flex text-purple h-47px mt-8'>
                                    <MyInputNumber id={'input-number'} />
                                    <button onClick={(e) => addToCart(e)} className='rounded-5px bg-purple text-white w-158px ml-4'>В корзину</button>
                                </div>

                            </div>
                        </div >
                        {/* <div className='w-full flex justify-center'>
                            <div className='mt-10'>
                                <ul className='grid grid-rows-2 mx-auto grid-cols-2 list-disc list-inside gap-20px'>
                                    <li className='max-w-500px '>Не имеет противопоказаний, рекомендуется для профилактики, профилактика и лечение рака</li>
                                    <li className='max-w-500px '>Очень быстро регулирует иммунитет, сдерживает рост раковых клеток, оберегает печень</li>
                                    <li className='max-w-500px '>Повышает иммунитет, сдерживает рост раковых клеток, восстанавливает все системы организма</li>
                                    <li className='max-w-500px '>Укрепляет организм, укрепляет сердце, останавливает астму</li>
                                </ul>
                            </div>
                        </div> */}
                        <div className='max-w-main mx-auto font-normal'>
                            <h2 className='text-24px my-10'>О продукте</h2>
                            <div className='max-w-main'>
                                <ReactMarkdown children={json.all_info} />
                            </div>
                            <div className='flex flex-col justify-between mt-10 text-black font-18px wrap'>
                                <ReactMarkdown children={json.main_info} />
                            </div>
                        </div>
                    </div>
                        :
                        <div>
                            <div className='mx-auto w-325px h-250px flex justify-center'>
                                <img alt={json.name} src={`https://d1zero.ru${json.image}`} />
                            </div>
                            <div className='text-16px mx-auto w-325px mt-50px'>
                                <div className='text-18px font-bold'>{json.price + "₽"}</div>
                                <div className='font-semibold'>{json.name}</div>
                                <div>{json.category_name}</div>
                            </div>
                            <div className='flex justify-between w-325px mx-auto'>
                                <div className='-ml-2'><MyInputNumber id={"input-number"}/></div>
                                <div><button className='rounded-5px bg-purple h-47px w-158px'>В корзину</button></div>
                            </div>
                            {/* <div className='w-325px mx-auto'>
                                <div>Производитель:</div>
                                <div>Срок годности:</div>
                                <div>Условия хранения:</div>
                            </div> */}
                            <div className='w-325px mx-auto mb-2'>
                                <h2 className='text-16 font-semibold my-2'>Основная информация:</h2>
                                <div><ReactMarkdown children={json.main_info} /></div>
                                <h2 className='text-16 font-semibold my-2'>О продукте:</h2>
                                <div>
                                    <ReactMarkdown children={json.all_info} />
                                </div>
                            </div>
                        </div>
                    } </div> : <></>}
        </div >
    );
};

export default Card;