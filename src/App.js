import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Pages/Main';
import Store from './components/Pages/Store';
import Cart from './components/Pages/Cart';
import Card from './components/Pages/Card';
import Delivery from './components/Pages/Delivery';
import Authorization from './components/Authorization/Authorization';
import DeliveryInfo from './components/Pages/DeliveryInfo';
import Contacts from './components/Pages/Contacts';
import { Route, Routes } from "react-router-dom";
import InfoTable from './components/InfoTable/InfoTable';
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

  const [notification, setNotification] = useState('')

  useEffect(() => {
    if (authorization) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [authorization])

  const [info, setInfo] = useState('-right-40')

  const changeNotification = (not) => {
    setNotification(not)
    setTimeout(() => {
      setInfo('right-10')
      setTimeout(() => {
        setInfo('-right-40')
      }, 3000)
    }, 100)
  }
  return (
    <div className={`fonts-Lato h-screen flex flex-col justify-between overflow-x-hidden`}>
      <div className='mx-0'>
        <Header setAuthorization={setAuthorization} mobile={mobile} setNotification={changeNotification} />
        {authorization ? <Authorization setAuthorization={setAuthorization} authorization={authorization} /> : <></>}
        <InfoTable notification={notification} right={info} />
        <div className="h-2px bg-light_gray"></div>
        <main>
          <Routes>
            <Route exact path='/' element={<Main setNotification={changeNotification} mobile={mobile} />} />
            <Route path='/cart' element={<Cart setNotification={changeNotification} mobile={mobile} />} />
            <Route path='/deliveryinfo' element={<DeliveryInfo mobile={mobile} />} />
            <Route path='/contacts' element={<Contacts mobile={mobile} />} />
            <Route exact path='/card/:id' element={<Card setNotification={changeNotification} mobile={mobile} />} />
            <Route path='/store/:search' element={<Store setNotification={changeNotification} mobile={mobile} />} />
            <Route exact path='/store' element={<Store setNotification={changeNotification} mobile={mobile} />} />
            <Route path='/delivery' element={<Delivery setNotification={changeNotification} mobile={mobile} tablet={tablet} />} />
          </Routes>
        </main>
      </div>
      <Footer mobile={mobile} />
    </div>
  );
};

export default App;