import React from "react";
import { leftLinks, rightLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full pt-6">
      <ul className="list-none sm:flex hidden items-center flex-1">
        {leftLinks.map((leftNav, index) => (
          <li
            key={leftNav.id}
            className={`font-lato font-normal text-base cursor-pointer text-white ${
              index === leftLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`${leftNav.id}`}>{leftNav.title}</a>
          </li>
        ))}
      </ul>

      <a href="/">
        <img src="/src/assets/logo.svg" alt="Logo" />
      </a>

      <ul className="list-none sm:flex hidden items-center justify-end flex-1">
        {rightLinks.map((rightNav, index) => (
          <li
            key={rightNav.id}
            className={`font-lato font-normal text-base cursor-pointer text-white ${
              index === rightLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`${rightNav.id}`}>{rightNav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
