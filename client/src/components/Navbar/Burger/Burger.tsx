import React from "react";

interface IBurger {
  onClick: (value: React.SetStateAction<boolean>) => void;
}

export default function Burger({ onClick }: IBurger) {
  return (
    <div
      className="HAMBURGER-ICON space-y-2"
      onClick={() => onClick((prev) => !prev)}
    >
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    </div>
  );
}
