import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="fixed w-[80%] z-20">
          <div className="flex items-center justify-between w-full pt-6">
            <ul className="list-none sm:flex hidden items-center flex-1">
              <li
                className={`font-lato font-normal text-base cursor-pointer text-white mr-10`}
              >
                <Link to="/ourstory">Our Story</Link>
              </li>
              <li
                className={`font-lato font-normal text-base cursor-pointer text-white mr-10`}
              >
                <Link to="/visualjournals">Visual Journals</Link>
              </li>
            </ul>

            <Link to="/">
              <img src="/src/assets/logo.svg" alt="Logo" />
            </Link>

            <ul className="list-none sm:flex hidden items-center justify-end flex-1">
              <li
                className={`font-lato font-normal text-base cursor-pointer text-white mr-10`}
              >
                <Link to="/press">Press</Link>
              </li>
              <li
                className={`font-lato font-normal text-base cursor-pointer text-white mr-10`}
              >
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
