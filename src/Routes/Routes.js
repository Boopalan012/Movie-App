import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Popular } from "../Pages/Popular";
import React from "react";
import { TopRated } from "../Pages/TopRated";

export const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<TopRated />} />
          <Route path="/about" />
        </Routes>
      </Router>
    </>
  );
};
