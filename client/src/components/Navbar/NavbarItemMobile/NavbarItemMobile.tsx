import React from "react";
import { Link } from "react-router-dom";

interface IItemMobile {
  title: string;
  link: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavbarItemMobile({ title, link, onClick }: IItemMobile) {
  return (
    <li className="border-b border-gray-400 my-8 uppercase">
      <Link to={`${link}`} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
}
