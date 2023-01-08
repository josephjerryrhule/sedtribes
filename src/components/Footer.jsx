import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div className="w-[80%] mx-auto pb-5">
      <div className="flex lg:flex-row flex-col items-center justify-between pt-24">
        <div className="max-w-[400px]">
          <h3 className="font-abril font-normal text-white text-[48px] leading-[56px]">
            Get the exclusives Save big
          </h3>
        </div>
        <div className="lg:max-w-[500px] flex flex-col flex-wrap w-full">
          <p className="font-lato text-white font-normal text-[16px] leading-[26px]">
            Get amazing deals to shop our collections via email
          </p>
          <form className="flex lg:flex-row flex-col lg:items-center lg:justify-between mt-5">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address"
              className="rounded-full border bg-transparent w-[300px] h-[60px] pl-6 mr-3 font-lato font-normal text-[#888] text-[16px] leading-[26px]"
            />
            <button
              type="submit"
              className="text-black bg-white rounded-full w-[200px] h-[60px] font-lato font-semibold text-[16px] leading-[19px]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between mt-24">
        <div>
          <img src="/src/assets/footerlogo.svg" alt="" />
        </div>

        <div className="flex items-center justify-between list-none">
          {footerLinks.map((links, index) => (
            <li
              key={links.id}
              className={`font-lato font-normal text-base cursor-pointer text-white ${
                index === footerLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`${links.id}`}>{links.title}</a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
