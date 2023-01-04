import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-0">
      <div className="bg-smiling bg-no-repeat bg-cover flex-col items-end h-[1024px]">
        <div className="bg-overlay flex items-end h-[100%]">
          <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
            Cloaks and more
          </h3>
        </div>
      </div>
      <div className="bg-sleeping bg-no-repeat bg-cover flex-col items-end h-[1024px]">
        <div className="bg-overlay flex items-end h-[100%]">
          <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
            Expansion
          </h3>
        </div>
      </div>
      <div className="bg-posed bg-no-repeat bg-cover flex-col items-end h-[1024px]">
        <div className="bg-overlay flex items-end h-[100%]">
          <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
            Sets
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
