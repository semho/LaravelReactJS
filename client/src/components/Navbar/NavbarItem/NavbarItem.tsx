import React from "react";
import { NavLink } from "react-router-dom";
import { StyleItem } from "./NavbarItem.styles";

interface IItem {
  title: string;
  link: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavbarItem({ title, link, onClick }: IItem) {
  return (
    <StyleItem className="text-gray-500 text-sm font-medium cursor-pointer">
      <NavLink to={`${link}`} onClick={onClick}>
        <button>{title}</button>
      </NavLink>
    </StyleItem>
  );
}
