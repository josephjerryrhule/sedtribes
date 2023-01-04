import React from "react";
import {
  Navbar,
  Hero,
  Hooded,
  Journals,
  Locations,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="fixed w-[80%]">
          <Navbar />
        </div>
      </div>
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
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
