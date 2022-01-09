import React from 'react';
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import Banner from './components/Banner/Banner';
import ProductCard from './components/ProductCard/ProductCard';
import SwiperMain from './components/SwiperMain/SwiperMain';
const App = () => {

  const arr = ["card", "card", "card", "card", "card",
    "card", "card", "card", "card", "card",];

  return (
    <div className='font-rubik ml-30px mr-30px'>
      <Header />
      <main className='flex flex-col'>
        <Path />
        <Categories />
        <Banner />
        <div className='grid grid-cols-5 grid-rows-2 w-main mx-auto'>
          {arr.map(x => <ProductCard />)}
        </div>
        <div className='mx-auto mt-20 rounded-20px bg-purple text-white'><SwiperMain /></div>
        <div className='w-main mx-auto mt-8'><span className='font-normal text-24px'>Мы рекомендуем</span></div>
        <div className='grid grid-cols-5 grid-rows-2 w-main mx-auto'>
          {arr.map(x => <ProductCard />)}
          {arr.map(x => <ProductCard />)}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;