import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ date, minread, title, excerpt, img }) => {
  return (
    <Link to="/singleblog">
      <div className="grid grid-cols-2 place-content-between items-center pb-12">
        <div className="flex flex-col max-w-[471px] gap-2">
          <div className="flex items-center gap-3">
            <span className="font-lato font-bold text-[13px] leading-[26px] text-[#505050]">
              {date}
            </span>
            <span className="font-lato font-semibold text-[13px] leading-[26px] text-[#505050]">
              .
            </span>
            <span className="font-lato font-bold text-[13px] leading-[26px] text-[#505050]">
              {minread}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-abril font-normal text-[24px] text-black leading-8">
              {title}
            </h3>
            <p className="font-lato font-normal text-[#505050] text-[16px] leading-[26px]">
              {excerpt}
            </p>
          </div>
        </div>
        <img src={img} alt={title} className="place-self-end" />
      </div>
    </Link>
  );
};

export default BlogCard;
