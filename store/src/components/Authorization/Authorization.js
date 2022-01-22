import React, { useState } from 'react';
import CheckMark from '../../icons/CheckMark';
const Authorization = ({ setAuthorization, authorization }) => {

    const [authCondition, setAuthCondition] = useState(
        {
            login: "border-2 border-input_bg",
            signup: "bg-input_bg",
        }
    );

    const [authComplete, setAuthComplete] = useState(false);

    const changeCondition = (e) => {
        if ((e === "login" && authCondition.login === "bg-input_bg")
            || (e === 'signup' && authCondition.signup === "bg-input_bg")
        ) {
            let newObj = { ...authCondition };
            newObj.login = newObj.signup;
            newObj.signup = authCondition.login;
            setAuthCondition(newObj)
        }
    }

    const closeWindow = () => {
        setAuthComplete(false)
        setAuthorization(false)
    }

    return (
        <div className='absolute left-0 top-0 flex justify-center w-screen h-screen'>
            {!authComplete ?
                <div className='auth relative mobile:my-auto bottom-100px px-70px z-30 bg-white w-850px h-678px blur-none rounded-20px shadow-md flex flex-col justify-center'>
                    <div className='w-600px mx-auto text-24px'>
                        <div className='mb-4'>
                            <button onClick={() => changeCondition("login")}
                                className={`w-300px h-80px rounded-l-10px ${authCondition.login}`}>Войти</button>
                            <button onClick={() => changeCondition("signup")}
                                className={`w-300px h-80px rounded-r-10px ${authCondition.signup}`}>Регистрация</button>
                        </div>
                        {authCondition.login !== "bg-input_bg" ?
                            <form>
                                <div><input placeholder='Логин' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div><input placeholder='Пароль' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div className='mt-4'>
                                    <button className='w-260px h-87px text-azure rounded-10px'>Забыли пароль?</button>
                                    <button className='w-260px h-87px bg-purple rounded-10px'>Войти</button>
                                </div>
                            </form>
                            :
                            <form>
                                <div><input placeholder='Логин' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div><input placeholder='Почта' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div><input placeholder='Пароль' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div><input placeholder='Подтверждение пароля' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' /></div>
                                <div className='mt-4 flex justify-center'>
                                    <button className='w-260px h-87px bg-purple rounded-10px'>Зарегистрироваться</button>
                                </div>
                            </form>}
                    </div>
                </div> :
                <div className='z-30 mx-auto -mt-32 w-850px h-400px shadow-md rounded-10px bg-white flex flex-col justify-center'>
                    <div className='mx-auto mb-32'><CheckMark /></div>
                    <span className='text-center'>Для подтверждения регистрации пройдите по ссылке присланной в письме</span>
                </div>}
            <div onClick={(e) => closeWindow(e)} className='absolute inset-0 w-screen h-screen z-10 backdrop-blur-sm'></div> : <></>
        </div>
    );
};

export default Authorization;