import React from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
};

const Hero = () => {
  return (
    <div>
      <div className="lg:grid-cols-3 gap-0 md:grid hidden">
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
      <div className="lg:hidden text-white">
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
          <div className="bg-smiling bg-no-repeat bg-cover flex-col items-end h-[720px] w-full">
            <div className="bg-overlay flex items-end h-[100%]">
              <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
                Cloaks and more
              </h3>
            </div>
          </div>
          <div className="bg-sleeping bg-no-repeat bg-cover flex-col items-end h-[720px] w-full">
            <div className="bg-overlay flex items-end h-[100%]">
              <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
                Expansion
              </h3>
            </div>
          </div>
          <div className="bg-posed bg-no-repeat bg-cover flex-col items-end h-[720px] w-full">
            <div className="bg-overlay flex items-end h-[100%]">
              <h3 className="font-abril font-normal text-[34px] leading-[46px] text-white w-[80%] mx-[auto] pb-9">
                Sets
              </h3>
            </div>
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default Hero;
