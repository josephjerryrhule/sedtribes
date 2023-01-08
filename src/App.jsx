import React from "react";
import { Navbar, Footer } from "./components";
import {
  Home,
  Blog,
  BlogItem,
  JournalItem,
  VisualJournals,
  OurStory,
} from "./screens";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-[80%] mx-auto">
        <div className="fixed w-[80%] z-20">
          <Navbar />
        </div>
      </div>
      <div>
        <Home />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
