import React, { useState, useEffect } from 'react';
import MyInputNumber from '../MyInputNumber/MyInputNumber';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../config/appConfig';
import base64 from 'base-64'
const Card = ({ mobile, setNotification }) => {

    const params = useParams();

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [json, setJson] = useState()

    useEffect(() => {
        fetch(`${API_KEY}/api/products/${params.id}`)
            .then(res => res.json())
            .then(data => setJson(data))
            .then(() => setLoader(false))
    }, []);

    const [quantity, setQuantity] = useState(1)

    const [changeButton, setChangeButton] = useState('purple')

    const addToCart = () => {
        setChangeButton('green')
        if (localStorage.user) {
            let raw = [{
                productId: json.id,
                quantity: quantity,
            }]
            var requestOptions = {
                method: 'PUT',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Content-type": "application/json",
                    Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
                },
                credentials: 'include',
                body: JSON.stringify(raw)
            };
            fetch(`${API_KEY}/api/cart`, requestOptions)
        }
        else setNotification('Вам необходимо войти')
    }

    return (
        <div>
            <Loader loader={loader} />
            {!loader ?
                <div>
                    {!mobile ? <div>
                        <div className='w-full max-w-1280px flex flex-col tablet:flex-row mx-auto mt-47px'>
                            <div className='shadow-md rounded-20px mx-auto tablet:mx-0 w-300px flex flex-col justify-center'>
                                <img className='w-card-img h-card-img mx-auto' src={`${API_KEY}/api/images/${json.imagePath}`} alt="Product" />
                            </div>
                            <div className='max-w-563px ml-80px'>
                                <div className='flex flex-col font-bold'>
                                    <span className='text-36px'>{json.name}</span>
                                    <span className='text-24px'>{json.price + "₽"}</span>
                                </div>
                                <div className='flex text-purple h-47px mt-8'>
                                    <MyInputNumber
                                        setQuantity={setQuantity}
                                        setLoader={setLoader}
                                        quantity={quantity}
                                        el={{ id: 'input-number' }} />
                                    <button onClick={() => addToCart()} className='rounded-5px bg-purple text-white w-158px ml-4'>В корзину</button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end mb-10'>
                                <div>
                                    <div>
                                        Производитель: {json.manufacturer.name}
                                    </div>
                                    <div>
                                        Категория: {json.pharmaceuticalForm.name}
                                    </div>
                                    {/* <div>
                                    Серия: {json.series.name}
                                </div> */}
                                </div>
                            </div>
                        </div >
                    </div>
                        :
                        <div>
                            <div className='mx-auto w-325px h-250px flex justify-center'>
                                <img alt={json.name} src={`${API_KEY}/api/images/${json.imagePath}`} />
                            </div>
                            <div className='text-16px mx-auto w-325px mt-50px'>
                                <div className='text-18px font-bold'>{json.price + "₽"}</div>
                                <div className='font-semibold'>{json.name}</div>

                            </div>
                            <div className='flex justify-between w-325px mx-auto'>
                                <div className='-ml-2'>
                                    <MyInputNumber
                                        quantity={quantity}
                                        setQuantity={setQuantity}
                                        setLoader={setLoader}
                                        el={{ id: 'input-number' }} />
                                </div>
                                {changeButton === 'purple' ?
                                    <div>
                                        <button onClick={() => addToCart()} className='rounded-5px bg-purple h-47px w-158px'>В корзину</button>
                                    </div>
                                    :
                                    <div>
                                        <button className='rounded-5px bg-green h-47px w-158px'>В корзине</button>
                                    </div>
                                }
                            </div>
                            <div className='w-325px mx-auto'>
                                <div>Производитель: {json.manufacturer.name}</div>
                                <div>Категория :{json.pharmaceuticalForm.name}</div>
                            </div>
                        </div>
                    } </div> : <></>}
        </div >
    );
};

export default Card;