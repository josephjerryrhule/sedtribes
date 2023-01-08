import React from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
};

const Journals = () => {
  return (
    <div>
      <div className="grid-cols-2 gap-0 hidden lg:grid">
        <div className="bg-skin bg-no-repeat bg-cover h-[722px]">
          <div className="bg-overlay flex items-end h-full">
            <div className="w-[90%] mx-auto mb-11">
              <h3 className="font-abril font-normal text-white text-[34px] leading-[46px]">
                Expansion
              </h3>
              <p className="font-lato font-normal leading-7 text-white text-[24px]">
                2022
              </p>
            </div>
          </div>
        </div>
        <div className="bg-garden bg-no-repeat bg-cover h-[722px]">
          <div className="bg-overlay flex items-end h-full">
            <div className="w-[90%] mx-auto mb-11">
              <h3 className="font-abril font-normal text-white text-[34px] leading-[46px]">
                The Garden
              </h3>
              <p className="font-lato font-normal leading-7 text-white text-[24px]">
                2022
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
          <div className="bg-skin bg-no-repeat bg-cover h-[400px] w-full">
            <div className="bg-overlay flex items-end h-full">
              <div className="w-[90%] mx-auto mb-11">
                <h3 className="font-abril font-normal text-white text-[34px] leading-[46px]">
                  Expansion
                </h3>
                <p className="font-lato font-normal leading-7 text-white text-[24px]">
                  2022
                </p>
              </div>
            </div>
          </div>
          <div className="bg-garden bg-no-repeat bg-cover h-[400px] w-full">
            <div className="bg-overlay flex items-end h-full">
              <div className="w-[90%] mx-auto mb-11">
                <h3 className="font-abril font-normal text-white text-[34px] leading-[46px]">
                  The Garden
                </h3>
                <p className="font-lato font-normal leading-7 text-white text-[24px]">
                  2022
                </p>
              </div>
            </div>
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default Journals;
