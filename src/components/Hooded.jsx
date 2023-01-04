import React from "react";

const Hooded = () => {
  return (
    <div className="bg-hooded bg-cover bg-no-repeat flex-col h-full">
      <div className="bg-overlay h-full flex items-end">
        <div className="w-[80%] mx-auto mb-36">
          <h3 className="font-abril text-white text-[2rem] leading-[43.17px] max-w-[478px]">
            Existing between the black & white spectrums of convention
          </h3>
          <p className="font-lato font-normal text-white leading-6 text-[20px] mt-2.5">
            Information about our story
          </p>
          <button
            type="button"
            className="text-white rounded-full border w-[200px] h-[60px] mt-9 font-lato font-semibold text-[16px] leading-[19px]"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hooded;
