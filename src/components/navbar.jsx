import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="md:w-[80%] xs:w-[90%] mx-auto">
        <div className="fixed md:w-[80%] xs:w-[90%] z-20">
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
              <img
                src={logo}
                alt="Logo"
                className="xs:w-[23px] xs:h-[37px] sm:w-full sm:h-full"
              />
            </Link>

            <div className="sm:hidden">
              <img
                src={toggle ? close : menu}
                alt="menu"
                onClick={() => setToggle((prev) => !prev)}
              />
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } flex-col bg-black w-full absolute top-16 h-[50vh] right-0`}
              >
                <ul className="list-none w-[90%] mx-auto mt-10">
                  <li
                    className={`font-lato font-normal text-base cursor-pointer text-white mb-10`}
                  >
                    <Link to="/ourstory">Our Story</Link>
                  </li>
                  <li
                    className={`font-lato font-normal text-base cursor-pointer text-white mb-10`}
                  >
                    <Link to="/visualjournals">Visual Journals</Link>
                  </li>
                  <li
                    className={`font-lato font-normal text-base cursor-pointer text-white mb-10`}
                  >
                    <Link to="/press">Press</Link>
                  </li>
                  <li
                    className={`font-lato font-normal text-base cursor-pointer text-white mb-10`}
                  >
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

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
