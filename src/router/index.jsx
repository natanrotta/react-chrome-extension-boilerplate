import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Phones from "../pages/Phones";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/phones" element={<Phones />} />
  </Routes>
);
