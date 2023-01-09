import React from "react";
import { journalinfoItems } from "../constants";

const JournalItem = () => {
  return (
    <div className="bg-black">
      <div className="pt-40 flex justify-center items-center pb-10">
        <div className="max-w-[359px]">
          <h1 className="font-abril text-white text-center font-normal leading-[64.75px] text-[48px]">
            Piper’s Day Out
          </h1>
          <p className="font-lato text-white text-center font-normal text-[20px] leading-6 mt-4">
            January 2021, Accra, Ghana
            <br />
            Photographs by Carlos Idun-Tawiah
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="columns-1 lg:columns-4 gap-4">
          {journalinfoItems.map((item, index) => (
            <img
              key={item.img}
              src={item.img}
              alt={item.title}
              className="w-full mb-4 lg:h-fit aspect-auto xs:h-[300px] xs:object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalItem;
