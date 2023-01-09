import React from "react";
import { Locations } from "../components";

const Blog = () => {
  return (
    <div>
      <div
        className="bg-black h-[427px] bg-circles bg-no-repeat bg-origin-content
       bg-center flex items-end justify-center pb-10"
      >
        <h1 className="font-abril text-white text-center lg:text-[48px] lg:leading-[56px]">
          Threaded Tribes
          <br />
          Press Mentions
        </h1>
      </div>
      <div className="bg-white h-[1723px]"></div>
      <div className="bg-black">
        <Locations />
      </div>
    </div>
  );
};

export default Blog;
