import React from 'react';

const DeliveryInfo = ({ mobile }) => {
    return (
        <div>
            {!mobile ?
                <div className='mx-auto max-w-main w-full text-24px'>
                    <div className='font-bold text-32px'>Способы доставки</div>
                    <div className='flex justify-between'>
                        <div className='w-207px flex flex-col justify-between'>
                            <img className='my-auto w-207px' src={'https://sw-strazy.ru/local/templates/codencode/images/delivery-cdek.png'} />
                        </div>
                        <div>
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента</div>
                            <div>подтвержения</div>
                            <div>заказа</div>
                        </div>
                        <div className='max-w-563px w-full font-semibold'>Какая-то информация о сдэке</div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='w-207px flex flex-col justify-between'>
                            <img className='w-207px' src={'https://zapravda.ru/media/1/3/0/0/c41ba4ba6118a627249c29bfde32a6e3/4OnAVZATIaFuW2LXQb4kS5aLA8fEPqvWqp21zydL-thumb_1680.jpg'} />
                        </div>
                        <div>
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента</div>
                            <div>подтвержения</div>
                            <div>заказа</div>
                        </div>
                        <div className='max-w-563px w-full font-semibold'>Какая-то информация о Почте России</div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='w-207px font-bold text-32px'>Курьером</div>
                        <div>
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента</div>
                            <div>подтвержения</div>
                            <div>заказа</div>
                        </div>
                        <div className='max-w-563px w-full font-semibold'>Доставка курьером осуществляется только в предлах МКАД</div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='w-207px font-bold text-32px'>Самовывоз</div>
                        <div>
                            <div className='font-semibold'>Бесплатно</div>
                            <div>1-3 дней с момента</div>
                            <div>подтвержения</div>
                            <div>заказа</div>
                        </div>
                        <div className='max-w-563px w-full font-semibold'>Мы находимся по адресу Анапа Пушкина д20</div>
                    </div>
                </div>
                :
                <div className='mx-auto max-w-main w-full text-14px mx-20px'>
                    <div className='font-bold text-18px mt-20px'>Способы доставки</div>
                    <div className='flex justify-between'>
                        <div className='w-207px flex flex-col justify-between'>
                            <img className='my-4 w-207px' src={'https://sw-strazy.ru/local/templates/codencode/images/delivery-cdek.png'} />
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента подтвержения заказа</div>
                            <div className='max-w-563px w-full font-semibold'>Какая-то информация о сдэке</div>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='w-207px flex flex-col justify-between'>
                            <img className='my-4 w-207px' src={'https://zapravda.ru/media/1/3/0/0/c41ba4ba6118a627249c29bfde32a6e3/4OnAVZATIaFuW2LXQb4kS5aLA8fEPqvWqp21zydL-thumb_1680.jpg'} />
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента подтвержения заказа</div>
                            <div className='max-w-563px w-full font-semibold'>Какая-то информация о Почте России</div>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='flex flex-col justify-between'>
                            <div className='font-bold text-32px'>Курьером</div>
                            <div className='font-semibold'>400 Рублей</div>
                            <div>1-3 дней с момента подтвержения заказа</div>
                            <div className='w-250px font-semibold'>Доставка курьером осуществляется только в предлах МКАД</div>
                        </div>
                    </div>
                    <div className='mt-8 flex justify-between'>
                        <div className='flex flex-col justify-between'>
                            <div className='font-bold text-32px'>Самовывоз</div>
                            <div className='font-semibold'>Бесплатно</div>
                            <div>1-3 дней с момента подтвержения заказа</div>
                            <div className='w-250px font-semibold'>Мы находимся по адресу Анапа Пушкина д20</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DeliveryInfo;