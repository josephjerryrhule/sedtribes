import React from "react";
import { Locations } from "../components";
import { pressReleases } from "../constants";

const Press = () => {
  return (
    <div>
      <div
        className="bg-black xs:h-[216px] md:h-[427px] bg-circles bg-no-repeat xs:bg-cover md:bg-origin-content
       bg-center flex items-end justify-center pb-10"
      >
        <h1 className="font-abril text-white text-center xs:text-[24px] xs:leading-[32.38px] lg:text-[48px] lg:leading-[56px]">
          Threaded Tribes
          <br />
          Press Mentions
        </h1>
      </div>
      <div className="bg-white">
        <div className="xs:w-[90%] md:w-[70%] m-auto pt-[88px] pb-[88px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {pressReleases.map((release, index) => (
              <div key={release.title} className="max-w-[471px]">
                <h2 className="font-abril text-black xs:text-[24px] xs:leading-[32.38px] lg:text-[34px] lg:leading-[46px]">
                  {release.title}
                </h2>
                <p className="font-lato text-[#505050] text-[16px] leading-6 font-normal">
                  {release.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Locations />
      </div>
    </div>
  );
};

export default Press;
