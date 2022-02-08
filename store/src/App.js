import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Pages/Main';
import Store from './components/Pages/Store';
import Cart from './components/Pages/Cart';
import Card from './components/Pages/Card';
import Path from './components/Path/Path';
import Delivery from './components/Pages/Delivery';
import Authorization from './components/Authorization/Authorization';
import DeliveryInfo from './components/Pages/DeliveryInfo';
import Contacts from './components/Pages/Contacts';
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [mobile, setMobile] = useState(window.screen.width < 768 ? true : false)

  const [tablet, setTablet] = useState(window.screen.width < 1024 ? true : false)

  window.addEventListener("resize", () => {
    if (window.screen.width < 768) setMobile(true)
    else setMobile(false)
    if (window.screen.width < 1024) setTablet(true)
    else setTablet(false)
  })

  const [authorization, setAuthorization] = useState(false);

  useEffect(() => {
    if (authorization) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [authorization])

  return (
    <div className={`fonts-Lato h-screen flex flex-col justify-between overflow-x-hidden`}>
        <div className='mx-0'>
          <Header setAuthorization={setAuthorization} mobile={mobile}/>
          {authorization ? <Authorization setAuthorization={setAuthorization} authorization={authorization} /> : <></>}
          <div className='h-2px bg-light_gray'></div>
          {/* <Path/> */}
          <main>
            <Routes>
              <Route exact path='/' element={<Main mobile={mobile} />} />
              <Route path='/cart' element={<Cart mobile={mobile} />} />
              <Route path='/deliveryinfo' element={<DeliveryInfo mobile={mobile} />} />
              <Route path='/contacts' element={<Contacts mobile={mobile} />} />
              <Route path='/card/:id' element={<Card mobile={mobile} />} />
              <Route path='/store/:cat' element={<Store mobile={mobile} />} />
              <Route exact path='/store' element={<Store mobile={mobile} />} />
              <Route path='/delivery' element={<Delivery mobile={mobile} tablet={tablet} />} />
            </Routes>
          </main>
        </div>
        <Footer mobile={mobile} />
    </div>
  );
};

export default App;