import React, {useEffect} from 'react';
import afabazol from '../../assets/afabazolBig.png'
import MyInputNumber from '../MyInputNumber/MyInputNumber';
const Card = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    return (
        <div>
            <div className='w-main_swiper_slide flex mx-auto mt-47px'>
                <div className='shadow-md rounded-20px w-1/2'><img className='w-full' src={afabazol} alt="Product"/></div>
                <div className='w-1/2 ml-80px'>
                    <div className='flex flex-col font-bold'>
                        <span className='text-36px'>800₽</span>
                        <span className='text-24px'>Афобазол таблетки 60шт 10мг</span>
                    </div>
                    <div className='flex flex-col text-18px text-text_gray mt-4'>
                        <span>Россия</span>
                        <span>Таблетки</span>
                    </div>
                    <div className='flex text-purple h-47px mt-8'>
                        <MyInputNumber />
                        <button className='rounded-5px bg-purple text-white w-158px ml-4'>В корзину</button>
                    </div>
                    <div className='flex flex-col justify-between h-100px mt-10 text-black font-18px font-medium'>
                        <span>Производитель: </span>
                        <span>Срок годности: </span>
                        <span>Условия хранения: </span>
                    </div>
                </div>
            </div >
            <div className='w-full flex justify-center'>
                <div className='mt-10'>
                    <ul className='grid grid-rows-2 grid-cols-2 list-disc list-inside gap-20px'>
                        <li className='max-w-500px '>Не имеет противопоказаний, рекомендуется для профилактики, профилактика и лечение рака</li>
                        <li className='max-w-500px '>Очень быстро регулирует иммунитет, сдерживает рост раковых клеток, оберегает печень</li>
                        <li className='max-w-500px '>Повышает иммунитет, сдерживает рост раковых клеток, восстанавливает все системы организма</li>
                        <li className='max-w-500px '>Укрепляет организм, укрепляет сердце, останавливает астму</li>
                    </ul>
                </div>
            </div>
            <div className='max-w-main mx-auto font-normal'>
                <h2 className='text-24px my-10'>О продукте</h2>
                <span className='max-w-main'>
                    Эликсир Fohow на основе линчжи и кордицепса обладает оздоровительными, лечебными свойствами, может применяться при различных заболеваниях и
                    патологиях, для профилактики онкологических болезней. Средство разработано по современной технологии на основе натуральных растительных экстрактов с
                    учетом потребностей человеческого организма, поэтому является не токсичным и безопасным. Эликсир является уникальным, так как действует на молекулярном
                    уровне, всесторонне оздоравливает организм, улучшает жизненно важные процессы.

                    Усиливает лечебный эффект: прием препарата во время радио- и химиотерапии позволяет ингибиторный противоопухолевый эффект, при этом увеличивает
                    эффективность действия химиотерапии на 68.3-76.5%, лечение химиотерапией сокращается на 26%, эффективность радиотерапии повышается на 26.5-33.9%;
                    Останавливает быстрое распространение опухоли: делает возможным в некоторой степени решить вопрос с асцитом, накоплением жидкости в грудной полости
                    Создает возможность для излечения организма от опухоли: возвращает отчаявшихся и пациентов на грани смерти, а также консерваторов, в русло лечебного
                    процесса; дает возможность на данной стадии заболевания (!) продолжать принимать химиотерапию и лечение пациентам, составляющим 12.8-26.6 % от общего
                    числа.
                    Увеличивается продолжительность жизни: у всех пациентов, принимающих препарат в период лечения, увеличивается прогнозируемая ранее длительность жизни.
                </span>
            </div>
        </div >
    );
};

export default Card;