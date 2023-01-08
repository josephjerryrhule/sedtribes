import React from "react";
import { mobiStory, StoryHero } from "../assets";

const OurStory = () => {
  return (
    <div>
      <div className="w-full lg:h-[725px] md:h-[405px]">
        <img
          src={StoryHero}
          alt="Our Story Hero Image"
          className="w-full h-full object-cover lg:block hidden"
        />
        <img
          src={mobiStory}
          alt="Our Story Hero Image"
          className="w-full h-full object-cover lg:hidden"
        />
      </div>

      <div className="bg-white flex lg:h-[667px] md:h-[928px] justify-center items-center">
        <div className="lg:max-w-[823px] max-w-[90%] flex flex-col lg:mt-0 mt-14">
          <h1 className="font-abril text-dark font-normal leading-[56px] lg:text-[48px] text-[24px] lg:mb-6">
            Our Story
          </h1>
          <p className="font-lato text-[16px] text-black font-normal leading-[26px]  mb-5">
            Threaded Tribes is a Ghanaian owned sustainable luxury fashion
            company that emboldens the carefree & unique nature of distinct
            members of society. We are all about reinforcing and encouraging the
            freedom to be oneself through comfort and style, while connecting
            people into a tribe - a community that shares similar traits and
            tastes in threads and ideas.
          </p>
          <p className="font-lato text-[16px] text-black font-normal leading-[26px]  mb-5">
            Our parents, grandparents and ancestors were & are no strangers to
            luxury; investing in and wearing locally produced rich fabrics,
            often handwoven into casual everyday wear while saving the even
            richer and pricier ones for special occasions. We are grateful and
            proud to be able to continue this tradition by producing a wide
            variety of sustainable clothing & collectibles with our own special
            twists!
          </p>
          <p className="font-lato text-[16px] text-black font-normal leading-[26px]  mb-5">
            All our garments are produced in Accra, Ghana using (currently):
            Bògòlanfini from Mali & Burkina Faso. Indigo, Baulé & Korhogo from
            Côte d’Ivoire. Fugu & Kente from Ghana. Leather & Wooden Buttons
            from Ghana. Our aim is to source and use even more materials from
            across Africa in our creations, promoting the wealth and beauty the
            continent has to offer.
          </p>
          <p className="font-lato text-[16px] text-black font-normal leading-[26px]  lg:mb-0 mb-14">
            In a bid to reduce waste and propel our agenda of sustainability & a
            conscious lifestyle, fabric scraps from a lot of the pieces we’ve
            made over the years have been saved to create these precious all new
            repurposed pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
