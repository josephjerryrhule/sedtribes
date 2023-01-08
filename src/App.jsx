import React from "react";
import { Routes, Route } from "react-router";

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
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="blog" element={<Blog />} />
          <Route path="singleblog" element={<BlogItem />} />
          <Route path="visualjournals" element={<VisualJournals />} />
          <Route path="journal" element={<JournalItem />} />
        </Route>
      </Routes>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
