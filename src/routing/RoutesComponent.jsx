import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

function RoutesComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          {/* <Route element={<TakeExam />} path="/students/exams/:id" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesComponent;
