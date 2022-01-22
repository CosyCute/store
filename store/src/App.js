import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Pages/Main';
import Store from './components/Pages/Store';
import Cart from './components/Pages/Cart';
import Card from './components/Pages/Card';
import Path from './components/Path/Path';
import Authorization from './components/Authorization/Authorization';
import { Route, Routes } from "react-router-dom";
const App = () => {

  const [mobile, setMobile] = useState(window.screen.width < 768 ? true : false)

  window.addEventListener("resize", () => {
    if (window.screen.width < 768) setMobile(true)
    else setMobile(false)
  })

  const [authorization, setAuthorization] = useState(false);

  useEffect(() => {
    if (authorization) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [authorization])

  return (
    <div className={`fonts-Lato h-screen flex flex-col justify-between overflow-x-hidden`}>
      <div className='mx-0'>
        <Header setAuthorization={setAuthorization} mobile={mobile} />
        {!mobile ? <Path /> : <></>}
        {authorization ? <Authorization setAuthorization={setAuthorization} authorization={authorization} /> : <></>}
        <main>
          <Routes>
            <Route path='/' element={<Main mobile={mobile} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/card' element={<Card />} />
            <Route path='/store' element={<Store />} />
          </Routes>
        </main>
      </div>
      <Footer mobile={mobile} />
    </div>
  );
};

export default App;