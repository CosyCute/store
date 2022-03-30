import React, { useState } from "react";
import Search from "../../icons/Search";
import Profile from "../../icons/Profile";
import Cart from "../../icons/Cart";
import { Link } from "react-router-dom";
import MCart from "../../icons/MCart";
import MAuth from "../../icons/MAuth";
import MBurger from "../../icons/MBurger";
import MSearch from "../../icons/MSearch";
import SideBar from "../SideBar/SideBar";
import MCloseX from "../../icons/MCloseX";
import { API_KEY } from "../../config/appConfig";
import base64 from "base-64";

const arr = [
  { name: "elexir", title: "Эликсир" },
  { name: "tea", title: "Чай" },
  { name: "vitamins", title: "Витамины" },
  { name: "capsule", title: "Капсулы" },
  { name: "kit", title: "Набор" },
  { name: "box", title: "Коробка" },
];

const Header = ({ setAuthorization, mobile, setNotification }) => {
  const user = () => {
    if (localStorage.user !== undefined)
      return localStorage.user;
    else return "Войти";
  };

  const [sidebarActive, setSideBarActive] = useState(false);

  const [hoverAuth, setHoverAuth] = useState(false);

  const AuthComponent = () => {
    if (user() === "Войти")
      return (
        <span className="authorization text-16px text-center w-44px">
          {user()}
        </span>
      );
    else
      return (
        <span className="authorization text-16px text-center w-44px">
          {hoverAuth ? "Выйти" : user()}
        </span>
      );
  };

  const ProfilePic = () => {
    if (localStorage.getItem('user'))
      return <>{hoverAuth ? <MCloseX w={30} /> : <Profile />}</>;
    else
      return (
        <>
          <Profile />
        </>
      );
  };

  const logout = () => {
    fetch(`${API_KEY}/api/logout/`, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-type": "application/json",
        Authorization: "Basic " + base64.encode(localStorage.user + ':' + localStorage.password),
      },
      credentials: 'include'
    })
      .then(() => {
        localStorage.removeItem('user')
      })
      .then(() => window.location.reload());
  };

  const [search, setSearch] = useState("");

  return (
    <header className="text-36px font-light flex justify-center max-w-main mx-auto">
      <SideBar
        sidebarActive={sidebarActive}
        setSideBarActive={setSideBarActive}
        setAuthorization={setAuthorization}
      />
      {!mobile ? (
        <div className="w-full h-137px">
          <div className="flex justify-between min-h-80px">
            <Link to="/">
              <div className="h-full flex flex-col justify-center">
                <h1 className="ml-2 text text-32px 910px:text-48px font-bold">
                  Ток Жизни
                </h1>
              </div>
            </Link>
            <div className="my-auto h-47px min-w-225px w-2/5 whitespace-nowrap flex">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none rounded-l-30px h-47px border-2 border-r-0 border-purple pl-4 text-18px bg-gray"
                placeholder="Найти"
              />
              <button className="rounded-r-30px h-47px w-56px border-2 border-purple bg-purple">
                <Link to={`/store/${search}`}>
                  <div className="ml-3">
                    <Search />
                  </div>
                </Link>
              </button>
            </div>
            <div className="flex my-auto justify-between">
              <div>
                {localStorage.user ?
                  <Link to="/cart">
                    <div className="flex flex-col mr-2">
                      <button className="rounded-cirlce w-30px h-30px mx-auto">
                        <Cart />
                      </button>
                      <span className="text-16px">Корзина</span>
                    </div>
                  </Link>
                  :
                  <div onClick={() => setNotification("Вам необходимо войти")} className="flex flex-col mr-2">
                    <button className="rounded-cirlce w-30px h-30px mx-auto">
                      <Cart />
                    </button>
                    <span className="text-16px">Корзина</span>
                  </div>
                }
              </div>
              <div
                onMouseOver={() => setHoverAuth(true)}
                onMouseLeave={() => setHoverAuth(false)}
              >
                <div
                  onClick={() => {
                    if (user() !== "Войти") logout();
                    else setAuthorization(true);
                  }}
                  className="flex flex-col ml-41px"
                >
                  <button className="rounded-cirlce w-30px h-30px mx-auto">
                    <ProfilePic />
                  </button>
                  <AuthComponent />
                </div>
              </div>
            </div>
          </div>
          <div className="h-44px">
            <ul className="flex justify-between text-24px font-normal">
              {arr.map((x) => (
                <Link key={x.title} to={`/store/${x.name}`}>
                  <div>{x.title}</div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="py-12px px-20px w-screen h-75px flex flex-col justify-between">
          <div className="flex justify-between">
            <div onClick={() => setSideBarActive(true)} className="my-auto">
              <MBurger />
            </div>
            <Link className="flex flex-col" to="/">
              <h1 className="my-auto font-bold text-24px">Ток Жизни</h1>
            </Link>
            <div className="flex">
              {localStorage.user ?
                <Link to="/cart">
                  <div className="flex flex-col">
                    <button className=" mx-auto">
                      <MCart />
                    </button>
                    <div className="text-16px text-center">Корзина</div>
                  </div>
                </Link>
                :
                <div onClick={() => setNotification("Вам необходимо войти")}>
                  <div className="flex flex-col">
                    <button className=" mx-auto">
                      <MCart />
                    </button>
                    <div className="text-16px text-center">Корзина</div>
                  </div>
                </div>
              }
              {/* <div className="my-auto" onClick={() => setAuthorization(true)}> */}
              <div
                onClick={() => {
                  if (user() !== "Войти") logout();
                  else setAuthorization(true);
                }}
                className="flex flex-col ml-41px"
              >
                <button className="rounded-cirlce w-30px h-30px mx-auto">
                  <MAuth />
                </button>
                <AuthComponent />
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="h-33px flex whitespace-nowrap max-w-screen">
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Искать на сайте"
              className="pl-4 rounded-l-30px bg-gray h-33px text-14px w-full"
            />

            <Link to={`/${search}`}><button className="rounded-r-30px h-33px w-41px bg-purple flex justify-center">
              <div className="my-auto">
                <MSearch />
              </div>
            </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
