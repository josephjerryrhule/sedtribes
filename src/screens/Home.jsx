import React from "react";
import { Hero, Hooded, Journals, Locations } from "../components";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="h-[766px]">
        <Hooded />
      </div>
      <div>
        <Journals />
      </div>
      <div className="bg-black">
        <Locations />
      </div>
    </div>
  );
};

export default Home;
