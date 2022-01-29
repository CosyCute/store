import React, { useState , useEffect } from 'react';
import CheckMark from '../../icons/CheckMark';
import PasswordVisible from '../../icons/PasswordVisible';
import PasswordNotVisible from '../../icons/PasswordNotVisible';
const Authorization = ({ setAuthorization }) => {

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

    const [passwordVisibility, setPasswordVisibility] = useState(
        {
            login: false,
            registration: false,
        }
    )

    const passwordVisibilityFunc = (type) => {

        if (type === "password1") {
            setPasswordVisibility({ login: !passwordVisibility.login, registration: passwordVisibility.registration })
            document.getElementById('password1').type = document.getElementById('password1').type === 'password' ? 'text' : 'password';
        }
        else if (type === "registration") {
            setPasswordVisibility({ login: passwordVisibility.login, registration: !passwordVisibility.registration })
            document.getElementById('registration1').type = document.getElementById('registration1').type === 'password' ? 'text' : 'password';
            document.getElementById('registration2').type = document.getElementById('registration2').type === 'password' ? 'text' : 'password';
        }
    }

    const [fields, setFields] = useState({
        login: [
            { id: 0, text: 'Поле "Почта" должно быть заполнено', condition: false },
            { id: 1, text: 'Поле "Пароль" должно быть заполнено', condition: false },
        ],
        registration: [
            { id: 0, text: 'Поле "Почта" должно быть заполнено', condition: false },
            { id: 1, text: 'Поле "Пароль" должно быть заполнено', condition: false },
            { id: 2, text: 'Поле "Подтверждение пароля" должно быть заполнено', condition: false },
            { id: 3, text: 'Поле "Имя" должно быть заполнено', condition: false },
        ]
    })

    const upadteFields = (id, cond , e) => {
        let arr = { ...fields };
        e === 'login' ? arr.login[id].condition = cond : arr.registration[id].condition = cond;
        setFields(arr)
    }

    const loginForm = (e) => {
        e.preventDefault()
        if (e.target[0].value === '') {upadteFields(0, true, 'login')} else upadteFields(0, false, 'login')
        if (e.target[1].value === '') {upadteFields(1, true, 'login')} else upadteFields(1, false, 'login')
        if (!(fields.login[0].condition || fields.login[1].condition)){
            var formdata = new FormData();
            formdata.append("email", e.target[0].value);
            formdata.append("password", e.target[1].value);

            var requestOptions = {
                method: 'POST',
                credentials: 'include',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://d1zero.ru/api/user/login/", requestOptions)
                .then((e) => e.json())
                .then((data) => {localStorage.removeItem("jwt")})
        }
    }

    const registrationForm = (e) => {
        e.preventDefault()
        if (e.target[0].value === '') {upadteFields(0, true)} else upadteFields(0, false)
        if (e.target[1].value === '') {upadteFields(1, true)} else upadteFields(1, false)
        if (e.target[2].value === '') {upadteFields(2, true)} else upadteFields(2, false)
        if (e.target[3].value === '') {upadteFields(3, true)} else upadteFields(3, false)
        let temp = fields.registration;
        if (!(temp[0].condition || temp[1].condition || temp[2].condition || temp[3].condition)) {
            if (e.target[2].value === e.target[1].value) {
                document.getElementById('passwordNotField').innerHTML = '';
                var formdata = new FormData();
                formdata.append("email", e.target[0].value);
                formdata.append("name", e.target[3].value);
                formdata.append("password", e.target[1].value);
                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };

                fetch("https://d1zero.ru/api/user/register/", requestOptions)
                    .then((e) => e.json())
            }
            else document.getElementById('passwordNotField').innerHTML = 'Пароли должны совпадать'
            setFields({
                login: [
                    { id: 0, text: 'Поле "Почта" должно быть заполнено', condition: false },
                    { id: 1, text: 'Поле "Пароль" должно быть заполнено', condition: false },
                ],
                registration: [
                    { id: 0, text: 'Поле "Почта" должно быть заполнено', condition: false },
                    { id: 1, text: 'Поле "Пароль" должно быть заполнено', condition: false },
                    { id: 2, text: 'Поле "Подтверждение пароля" должно быть заполнено', condition: false },
                    { id: 3, text: 'Поле "Имя" должно быть заполнено', condition: false },
                ]
            })
        }
    }

    useEffect(() => {
      
    }, []);
    

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
                            <form onSubmit={(e) => loginForm(e)}>
                                <div>
                                    <input placeholder='Почта' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' />
                                    <div className='text-14px text-red'>{fields.login[0].condition ? fields.login[0].text : ''}</div>
                                </div>
                                <div className='flex relative'>
                                    <input placeholder='Пароль' type='password' id="password1" className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' />
                                    <div onClick={() => passwordVisibilityFunc('password1')} className='absolute right-10 top-8'>
                                        {passwordVisibility.login ? <PasswordVisible /> : <PasswordNotVisible />}
                                    </div>
                                </div>
                                <div className='text-14px text-red'>{fields.login[1].condition ? fields.login[1].text : ''}</div>
                                <div className='mt-4 flex justify-center'>
                                    {/* <button className='w-260px h-87px text-azure rounded-10px'>Забыли пароль?</button> */}
                                    <button type='submit' className='text-white w-260px h-87px bg-purple rounded-10px'>Войти</button>
                                </div>
                            </form>
                            :
                            <form onSubmit={(e) => registrationForm(e)}>
                                <div>
                                    <input placeholder='Почта' type='email' className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5' />
                                </div>
                                <div className='text-14px text-red'>{fields.registration[0].condition ? fields.registration[0].text : ''}</div>
                                <div className='flex relative'>
                                    <input className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5'
                                        placeholder='Пароль'
                                        id="registration1"
                                        type='password' />
                                    <div onClick={() => passwordVisibilityFunc('registration')} className='absolute right-10 top-8'>
                                        {passwordVisibility.registration ? <PasswordVisible /> : <PasswordNotVisible />}
                                    </div>
                                </div>
                                <div className='text-14px text-red'>{fields.registration[1].condition ? fields.registration[1].text : ''}</div>
                                <div id="passwordNotField" className='text-14px text-red'></div>
                                <div className='flex relative'>
                                    <input className='h-80px bg-input_bg w-full my-2 rounded-10px pl-5'
                                        placeholder='Подтверждение пароля'
                                        id="registration2"
                                        type='password' />
                                    <div onClick={() => passwordVisibilityFunc('registration')} className='absolute right-10 top-8'>
                                        {passwordVisibility.registration ? <PasswordVisible /> : <PasswordNotVisible />}
                                    </div>
                                </div>
                                <div className='text-14px text-red'>{fields.registration[2].condition ? fields.registration[2].text : ''}</div>
                                <div>
                                    <input placeholder='Имя' type='text' className='h-80px bg-input_bg w-full rounded-10px pl-5 my-2' />
                                </div>
                                <div className='text-14px text-red'>{fields.registration[3].condition ? fields.registration[3].text : ''}</div>
                                <div className='mt-4 flex justify-center'>
                                    <button className='w-260px h-87px bg-purple text-white rounded-10px'>Зарегистрироваться</button>
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