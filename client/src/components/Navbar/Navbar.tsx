import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarItem } from "./NavbarItem";
import "./navbar.css";
import { NavbarItemMobile } from "./NavbarItemMobile";
import Burger from "./Burger/Burger";
import { CloseIcon } from "../Icons/CloseIcon";
import { useAuth } from "../../hooks/useAuth";
import { useHttp } from "../../hooks/useHttp";
import NET from "../../newwork";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { token, logout } = useAuth();
  const { request } = useHttp();

  const history = useNavigate();
  const logoutHandler = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      const data = await request(
        NET.APP_URL + "api/logout",
        "post",
        {},
        { Authorization: `Bearer ${token}` }
      );

      if (data.status === "success") {
        logout();
        history("/auth");
        window.location.reload();
      }
    } catch (error) {}
  };
  const closeNavMobile = (event: React.MouseEvent<HTMLAnchorElement>) =>
    setIsNavOpen(false);

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-6 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-10">
        <Link to="/" className="text-2xl">
          Logo
        </Link>

        <ul className="DESKTOP-MENU hidden md:flex space-x-8">
          <NavbarItem title="Главная" link="/" />
          <NavbarItem title="Выйти" link="/logout" onClick={logoutHandler} />
        </ul>

        <section className="MOBILE-MENU flex md:hidden">
          <Burger onClick={() => setIsNavOpen((prev) => !prev)} />
          <div className={isNavOpen ? "showMenuNav" : "hiddenMenuNav"}>
            <CloseIcon onClick={() => setIsNavOpen(false)} />
            <ul className="MENU-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <NavbarItemMobile
                title="Главная"
                link="/"
                onClick={closeNavMobile}
              />
              <NavbarItemMobile
                title="Выйти"
                link="/logout"
                onClick={logoutHandler}
              />
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}
