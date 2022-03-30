import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DropList from "../DropList/DropList";
import ProductCard from "../ProductCard/ProductCard";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { API_KEY } from "../../config/appConfig";
const categoriesArr = [
  { title: "Чай", path: "tea" },
  { title: "Эликсир", path: "elexir" },
  { title: "Витамины", path: "vitamins" },
  { title: "Капсулы", path: "capsule" },
  { title: "Набор", path: "kit" },
  { title: "Коробка", path: "box" },
];

const Store = ({ mobile, setNotification }) => {
  const categoryFilter = useParams();

  const [sideBar, setSideBar] = useState(false);

  const [json, setJson] = useState();

  const [loader, setLoader] = useState(true);

  const [page, setPage] = useState(1);

  const currentPageFilter = (result) => {
    if (Object.keys(categoryFilter).length === 0) return result;
    if (categoriesArr.some((x) => x.path === categoryFilter.search))
      return result.filter(
        (x) =>
          x.pharmaceuticalForm.name ===
          (categoriesArr.filter((x) => x.path === categoryFilter.search)[0].title)
      );
    else return result.filter((x) => x.name.toLowerCase().includes(categoryFilter.search.toLowerCase()));
  };

  const filterJson = (e) => {
    setSideBar(false);
    e.preventDefault();
    let tar = e.target;
    let arr = [...json];
    if (tar[tar.length - 2].value && tar[tar.length - 3].value)
      arr = arr
        .filter((x) => x.price < tar[tar.length - 2].value)
        .filter((x) => x.price > tar[tar.length - 3].value);
    else if (tar[tar.length - 2].value && !tar[tar.length - 3].value)
      arr = arr.filter((x) => x.price < tar[tar.length - 2].value);
    else if (!tar[tar.length - 2].value && tar[tar.length - 3].value)
      arr = arr.filter((x) => x.price > tar[tar.length - 3].value);
    else if (!tar[tar.length - 2].value && !tar[tar.length - 3].value)
      arr = json;
    let flag = true;
    let newArr = arr;
    for (let i = 0; i < manufacturers.length; i++)
      if (!tar[i].checked)
        newArr = newArr.filter((x) => x.manufacturer.name !== tar[i].id);
      else flag = false;
    if (!flag) arr = newArr;
    flag = true;
    newArr = arr;
    for (
      let i = manufacturers.length;
      i < manufacturers.length + pharmaceutical_forms.length;
      i++
    )
      if (!tar[i].checked)
        newArr = newArr.filter((x) => x.pharmaceuticalForm.name !== tar[i].id);
      else flag = false;
    if (!flag) arr = newArr;
    // flag = true;
    // newArr = arr;
    // for (
    //   let i = filters.brands.length + filters.categories.length;
    //   i <
    //   filters.brands.length + filters.series.length + filters.categories.length;
    //   i++
    // )
    //   if (!tar[i].checked)
    //     newArr = newArr.filter((x) => x.product_series_name !== tar[i].id);
    //   else flag = false;
    if (!flag) arr = newArr;
    setFilterArr(arr);
  };

  const [filterArr, setFilterArr] = useState([]);

  const [manufacturers, setManufacturers] = useState([]);

  const [pharmaceutical_forms, setPharmaceutical_forms] = useState([]);

  useEffect(() => {
    fetch(`${API_KEY}/api/products/`)
      .then((res) => res.json())
      .then((result) => {
        setFilterArr(currentPageFilter(result));
        setPage(1)
        setJson(result);
      })
      .then(() => setTimeout(() => setLoader(false), 200));
    fetch(`${API_KEY}/api/manufacturers`)
      .then((res) => res.json())
      .then((result) => setManufacturers(result));

    fetch(`${API_KEY}/api/pharmaceutical_forms`)
      .then((res) => res.json())
      .then((result) => setPharmaceutical_forms(result));
  }, [categoryFilter]);

  return (
    <section className="max-w-main mx-auto mt-33px mb-20px">
      <Loader loader={loader[0]} />
      {!loader
        ?
        <div>
          {!mobile ? (
            <div className="flex">
              <div className="flex justify-between max-w-250px">
                <form onSubmit={(e) => filterJson(e)}>
                  <div>
                    <DropList
                      setFilterArr={setFilterArr}
                      filterArr={json}
                      filters={manufacturers}
                      title={"Бренд"}
                    />
                    <DropList
                      setFilterArr={setFilterArr}
                      filterArr={json}
                      filters={pharmaceutical_forms}
                      title={"Категория"}
                    />
                    {/* <DropList
                      setFilterArr={setFilterArr}
                      filterArr={json}
                      filters={filters.series}
                      title={"Серия"}
                    /> */}
                  </div>
                  <div className="w-250px flex justify-center">
                    <div className="mr-20px flex flex-col justify-center">
                      <input
                        id="from"
                        className="w-87px h-41px number my-auto border-purple border-2 pl-4"
                      />
                      <div className="text-center">Цена от</div>
                    </div>
                    <div className="mr-20px flex flex-col justify-center">
                      <input
                        id="to"
                        className="w-87px h-41px number my-auto border-purple border-2 pl-4"
                      />
                      <div className="text-center">до, руб</div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="mr-2 mt-4 w-full rounded-5px bg-purple h-50px"
                    >
                      Применить
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col ml-10">
                <div className="grid grid-cols-2 1024px:grid-cols-3 desktop:grid-cols-4 gap-y-40px gap-x-20px">
                  {filterArr.slice(20 * (page - 1), 20 * page).map((x) => (
                    <ProductCard setNotification={setNotification} key={x.id} el={x} />
                  ))}
                </div>
                <div>
                  <Pagination
                    filterArr={filterArr}
                    json={json}
                    setPage={setPage}
                    page={page}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <SideBar
                filterJson={filterJson}
                setFilterArr={setFilterArr}
                json={json}
                manufacturers={manufacturers}
                pharmaceutical_forms={pharmaceutical_forms}
                sidebarActive={sideBar}
                setSideBarActive={setSideBar}
              />
              <div className="flex justify-center text-white w-325px mx-auto">
                <button
                  onClick={() => setSideBar("Фильтры")}
                  className="w-full h-41px rounded-10px bg-purple"
                >
                  Фильтры
                </button>
              </div>
              <div className="grid grid-cols-2 mx-auto w-325px gap-x-20px gap-y-40px mt-41px">
                {filterArr.slice(20 * (page - 1), 20 * page).map((x) => (
                  <ProductCard setNotification={setNotification} key={x.id} el={x} />
                ))}
              </div>
            </div>
          )}
        </div>
        :
        <></>
      }
    </section>
  );
};

export default Store;
