import React from "react";

const Journals = () => {
  return (
    <div className="grid grid-cols-2 gap-0">
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
  );
};

export default Journals;
