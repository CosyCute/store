import React, { useState, useEffect } from 'react';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import MArrow from '../../icons/MArrow';
import MCloseX from '../../icons/MCloseX';
import Loader from '../Loader/Loader';
import { API_KEY } from '../../config/appConfig';
import base64 from 'base-64'
const Delivery = ({ mobile, tablet }) => {

    const arr = [
        { name: 'CDEK', price: 300, image: 'https://sw-strazy.ru/local/templates/codencode/images/delivery-cdek.png', id: 0 },
        { name: 'Почта России', price: 300, image: 'https://zapravda.ru/media/1/3/0/0/c41ba4ba6118a627249c29bfde32a6e3/4OnAVZATIaFuW2LXQb4kS5aLA8fEPqvWqp21zydL-thumb_1680.jpg', id: 1 },
        { name: `Курьером (По Москве)`, image: false, price: 400, id: 2 },
        { name: 'Самовывоз', image: false, price: 0, id: 3 }]

    const [modal, setModal] = useState(false);

    const [currentDelivery, setCurrentDelivery] = useState({name: '', price: 0});

    const [json, setJson] = useState()

    const [loader, setLoader] = useState()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-type": "application/json",
                Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
            },
            credentials: 'include'
        };
        fetch(`${API_KEY}/api/cart`, requestOptions)
            .then(res => res.json())
            .then(result => {
                setJson(result)
                let sum = 0;
                for (let i = 0; i < result.length; i++)
                    sum += result[i].product.price * result[i].quantity
                setAmount(sum)
            })
            .then(() => setLoader(false))

    }, []);

    const deliveryy = (e) => {
        e.preventDefault()
        const tar = e.target
        let mobi = document.getElementById('mobileDel');
        let desk = document.getElementById('desktopDel');
        if (!(e.target[0].value && e.target[1].value && e.target[4].value && currentDelivery.name !== '')) {
            !mobile ? desk.style.display = 'block' : mobi.style.display = 'block'
        }
        else {
            const raw = {
                "items": json,
                "shipment": {
                  "address": {
                    "city": tar.city.value,
                    "index": tar.index.value,
                    "street": tar.street.value + " " + tar.entrance.value + "" + tar.flat.value,
                  },
                  "method": currentDelivery.name,
                  "phoneNumber": tar.phone,
                  "price": currentDelivery.price,
                  "status": "Создан",
                  "statusChanged": new Date()
                },
                "totalPrice": amount + currentDelivery.price
              }
              fetch(`${API_KEY}/api/order/`, {
                  method: 'POST',
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Content-type": "application/json",
                    Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
                },
                credentials: 'include'
              })
        }

    }

    const [amount, setAmount] = useState(0)

    return (
        <section className='mt-41px max-w-main mx-auto text-24px flex justify-center px-12px'>
            <Loader loader={loader} />
            {!loader ? <div>
                {modal ?
                    <div className="absolute left-0 top-0 w-screen h-screen bg-white">
                        <div className="m-20px">
                            <button onClick={() => setModal(false)}><MCloseX /></button>
                            <div className="mt-10">Необходимо выбрать тип доставки</div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-4 mt-41px">
                                {arr.map(x =>
                                    <div key={x.id} onClick={() => {
                                        setModal(false)
                                        setCurrentDelivery({ name: x.name, price: x.price })
                                    }} className="mt-8 mx-auto w-full max-w-150px h-80px bg-input_bg text-center rounded-10px flex flex-col justify-center">
                                        {x.image ? <img className='mx-auto h-41px' src={x.image} /> : x.name}
                                    </div>)}
                            </div>
                        </div>
                    </div> : ""}
                {!mobile ?
                    <div className='flex flex-col 1024px:flex-row justify-center'>
                        {!tablet ?
                            <div className="max-w-563px">
                                {arr.map(x => <DeliveryItem key={x.id} item={x} setCurrentDelivery={setCurrentDelivery} />)}
                            </div>
                            :
                            <button type='button' onClick={() => setModal(true)} className='max-w-563px mx-20px rounded-10px bg-purple w-full h-70px flex'>
                                <span className='my-auto mx-41px text-white'>{currentDelivery === '' ? "Необходимо выбрать тип доставки" : `Выбран тип доставки:${currentDelivery.name}`}</span>
                                <div className='my-auto'><MArrow h={22} w={12} /></div>
                            </button>}
                        <div>
                            <form onSubmit={(e) => deliveryy(e)} className='flex flex-col desktop:flex-row mt-20px 1024px:mt-0'>
                                <div className='flex justify-center w-563px shadow-md h-450px mx-20px rounded-10px'>
                                    <div className='flex flex-col justify-between mx-20px'>
                                        <div className='mt-41px'>Заполните информацию о доставке</div>
                                        <div>
                                            <input id="city"
                                             className='w-500px h-60px rounded-10px bg-input_bg pl-15px'
                                                placeholder='Город' />
                                        </div>
                                        <div>
                                            <input id="street"
                                             className='w-500px h-60px rounded-10px bg-input_bg pl-15px'
                                                placeholder='Улица, Дом' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <input id="entrance"
                                                 className='w-225px h-60px rounded-10px bg-input_bg pl-15px'
                                                    placeholder='Подъезд' />
                                            </div>
                                            <div>
                                                <input id="flat"
                                                 className='w-225px h-60px rounded-10px bg-input_bg pl-15px'
                                                    placeholder='Квартира' />
                                            </div>
                                        </div>
                                        <div>
                                            <input id="index"
                                             className='w-500px h-60px rounded-10px bg-input_bg pl-15px'
                                                placeholder='Индекс' />
                                        </div>
                                        <div className='mb-20px'>
                                            <input id="phone"
                                             className='w-500px h-60px rounded-10px bg-input_bg pl-15px'
                                                type='tel'
                                                placeholder='Номер телефона' />
                                        </div>
                                        <div id='desktopDel' className='hidden flex justify-center mb-20px text-red text-14px'>Заполните все поля доставки</div>
                                    </div>
                                </div>
                                <div className='m-20px desktop:m-0 max-w-563px w-full h-340px shadow-md rounded-10px font-24px font-semibold'>
                                    <div className='mx-20px flex flex-col max-w-500px justify-between h-340px'>
                                        <div className='text-text_gray flex justify-between mt-8 mx-8'>
                                            <span>Итого</span>
                                            <span>{amount}</span>
                                        </div>
                                        <div className='mx-8 flex justify-between'>
                                            <span>Доставка</span>
                                            <span>{currentDelivery.price ? currentDelivery.price : 0}</span>
                                        </div>
                                        <div className='text-black flex justify-between mx-8'>
                                            <span>Итого к оплате</span>
                                            <span>{amount + currentDelivery.price}</span>
                                        </div>
                                        <div className="mx-auto">
                                            <button type='submit' className='rounded-10px h-60px w-325px bg-purple mb-8'>Перейти к оплате</button></div>
                                    </div>
                                </div>
                            </form>
                            <div></div>
                        </div>
                    </div>
                    :
                    <div className="w-full max-w-320px text-12px">
                        <button onClick={() => { setModal(true) }} className="rounded-10px bg-purple text-white flex w-full h-56px">
                            <div className="mx-20px my-auto">{currentDelivery === '' ? "Необходимо выбрать тип доставки" : `Выбран тип доставки: ${currentDelivery.name}`}</div>
                            <div className="my-auto"><MArrow /></div>
                        </button>
                        <form onSubmit={(e) => deliveryy(e)}>
                            <div className="w-full bg-input_bg mt-20px rounded-10px">
                                <div className="mx-20px">
                                    <div className="py-12px">Заполните информацию о доставке</div>
                                    <div>
                                        <input className="my-8px rounded-10px h-36px w-full pl-4" placeholder='Город' />
                                    </div>
                                    <div>
                                        <input className="rounded-10px h-36px w-full pl-4" placeholder='Улица, Дом' />
                                    </div>
                                    <div className="flex justify-between my-8px">
                                        <input className="rounded-10px h-36px w-130px mr-2 pl-4" placeholder='Подъезд' />
                                        <input className="rounded-10px h-36px w-130px ml-2 pl-4" placeholder='Квартира' />
                                    </div>
                                    <div className="pb-4">
                                        <input className="rounded-10px h-36px w-full pl-4 " placeholder='Номер телефона' />
                                    </div>
                                    <div id="mobileDel" className='hidden w-full text-center text-red text-14px pb-4'>Заполните все поля доставки</div>
                                </div>
                            </div>
                            <div className='rounded-10px bg-input_bg mt-20px'>
                                <div className='p-15px flex flex-col justify-between h-130px font-normal'>
                                    <div className='text-text_gray flex justify-between'>
                                        <div>Итог</div>
                                        <div>{amount}</div>
                                    </div>
                                    <div className=' flex justify-between'>
                                        <div>Доставка</div>
                                        <div>{currentDelivery.price ? currentDelivery.price : 0}</div>
                                    </div>
                                    <div className=' flex justify-between'>
                                        <div>Итого к оплате</div>
                                        <div>{amount + currentDelivery.price}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-20px'>
                                <button type='submit' className='w-full h-41px rounded-10px bg-purple flex justify-center text-white'>
                                    <div className='my-auto'>Перейти к оплате</div>
                                </button>
                            </div>
                        </form>
                    </div>}
            </div> : ""}
        </section>
    );
};

export default Delivery;