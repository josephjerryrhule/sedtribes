import React from "react";
import { BlogCard } from "../components";
import { blogReleases } from "../constants";

const Blog = () => {
  return (
    <div>
      <div
        className="bg-black h-[427px] bg-blogheader bg-no-repeat bg-cover
       bg-center flex items-end pb-10"
      >
        <div className="w-[70%] mx-auto">
          <h1 className="font-abril text-white lg:text-[48px] lg:leading-[56px]">
            Threaded Tribes
            <br />
            Blog
          </h1>
        </div>
      </div>
      <div className="w-[70%] mx-auto pt-24 pb-24">
        {blogReleases.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
