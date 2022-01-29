import React, { useState, useEffect } from 'react';
import DropList from '../DropList/DropList';
import ProductCard from '../ProductCard/ProductCard';
import SideBar from '../SideBar/SideBar';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const categoriesArr = [
    { title: 'Чай', path: 'tea' },
    { title: 'Эликсир', path: 'elexir' },
    { title: 'Витамины', path: 'vitamins' },
    { title: 'Капсулы', path: 'capsule' },
    { title: 'Набор', path: 'kit' },
    { title: 'Коробка', path: 'box' }]

const Store = ({ mobile }) => {

    const [sideBar, setSideBar] = useState(false)

    const [json, setJson] = useState();

    const [loader1, setLoader1] = useState(true);

    const [loader2, setLoader2] = useState(true);

    const [page, setPage] = useState(1);

    const currentPageFilter = () => {
        let path = window.location.pathname.split('/store/');
        if (path[0] === '/store') return false
        else return categoriesArr.filter(x => x.path === path[1])[0].title
    }

    const filterJson = (e) => {
        e.preventDefault()
        let tar = e.target;
        let arr = [...json];
        if (tar[tar.length - 2].value && tar[tar.length - 3].value)
            arr = (arr
                .filter(x => x.price < tar[tar.length - 2].value)
                .filter(x => x.price > tar[tar.length - 3].value))
        else if (tar[tar.length - 2].value && !tar[tar.length - 3].value)
            arr = (arr.filter(x => x.price < tar[tar.length - 2].value))
        else if (!tar[tar.length - 2].value && tar[tar.length - 3].value)
            arr = (arr.filter(x => x.price > tar[tar.length - 3].value))
        else if (!tar[tar.length - 2].value && !tar[tar.length - 3].value)
            arr = (json)
        let flag = true;
        let newArr = arr;
        for (let i = 0; i < filters.brands.length; i++)
            if (!tar[i].checked) newArr = (newArr.filter(x => x.brand_name !== tar[i].id))
            else flag = false;
        if (!flag) arr = newArr;
        flag = true;
        newArr = arr;
        for (let i = filters.brands.length; i < filters.brands.length + filters.categories.length; i++)
            if (!tar[i].checked) newArr = (newArr.filter(x => x.category_name !== tar[i].id))
            else flag = false;
        if (!flag) arr = newArr;
        flag = true;
        newArr = arr;
        for (let i = filters.brands.length + filters.categories.length; i < filters.brands.length + filters.series.length + filters.categories.length; i++)
            if (!tar[i].checked) newArr = (newArr.filter(x => x.product_series_name !== tar[i].id))
            else flag = false;
        if (!flag) arr = newArr;
        setFilterArr(arr)
    }

    const [filterArr, setFilterArr] = useState()

    const [filters, setFilters] = useState('')

    useEffect(() => {
        fetch(`https://d1zero.ru/api/products/`)
            .then(res => res.json())
            .then(result => {
                setJson(result);
                setFilterArr(result);
            })
            .then(() => setLoader1(false))
        fetch(`http://d1zero.ru/api/filters/`)
            .then(res => res.json())
            .then(result => setFilters(result))
            .then(() => setLoader2(false))

    }, [mobile]);

    const Loaded = () => {
        if (!loader1 && !loader2) {
            return (
                <div>
                    {!mobile ?
                        <div className='flex'>
                            <div className='flex justify-between max-w-250px'>
                                <form onSubmit={(e) => filterJson(e)}>
                                    <div>
                                        <DropList setFilterArr={setFilterArr} filterArr={json} filters={filters.brands} title={"Бренд"} />
                                        <DropList setFilterArr={setFilterArr} filterArr={json} filters={filters.categories} title={"Категория"} />
                                        <DropList setFilterArr={setFilterArr} filterArr={json} filters={filters.series} title={"Серия"} />
                                    </div>
                                    <div className='w-250px flex justify-center'>
                                        <div className='mr-20px flex flex-col justify-center'>
                                            <input id="from" className='w-87px h-41px number my-auto border-purple border-2 pl-4' />
                                            <div className='text-center'>Цена от</div>
                                        </div>
                                        <div className='mr-20px flex flex-col justify-center'>
                                            <input id="to" className='w-87px h-41px number my-auto border-purple border-2 pl-4' />
                                            <div className='text-center'>до, руб</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type='submit' className='mr-2 mt-4 w-full rounded-5px bg-purple h-50px'>
                                            Применить
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex flex-col ml-10'>
                                <div className='grid grid-cols-2 1024px:grid-cols-3 desktop:grid-cols-4 gap-y-40px gap-x-20px'>
                                    {filterArr.slice(20 * (page - 1), 20 * page).map(x => <ProductCard key={x.id} el={x} />)}
                                </div>
                                <div>
                                    <Pagination filterArr={filterArr} json={json} setPage={setPage} page={page} />
                                </div>
                            </div>
                        </div >
                        :
                        <div className='w-full'>
                            <SideBar setFilterArr={setFilterArr} filterArr={json} filters={filters} sidebarActive={sideBar} setSideBarActive={setSideBar} />
                            <div className='flex justify-center text-white w-325px mx-auto'>
                                <button onClick={() => setSideBar("Фильтры")} className='w-full h-41px rounded-10px bg-purple'>Фильтры</button>
                                <button onClick={() => setSideBar("Сортировка")} className='mx-20px w-150px h-41px rounded-10px bg-purple'>Сортировка</button>
                            </div>
                            <div className='grid grid-cols-2 mx-auto w-325px gap-x-20px'>
                                {json.slice(20 * (page - 1), 20 * page).map(x => <ProductCard key={x.id} el={x} />)}
                            </div>
                        </div>}
                </div >)
        }
        return (<></>)
    }
    return (
        <section className='max-w-main mx-auto mt-33px mb-20px'>
            <Loader loader={loader1} />
            <Loaded />
            {/* {() => {if (!loader1 && !loader2) changePageFilter()}} */}
        </section>
    );
};

export default Store;