import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import DetailsOne from "./Details/DetailsOne";
import DetailsThree from "./Details/DetailsThree";
import DetailsTwo from "./Details/DetailsTwo";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>this is Details page</div>
      <button onClick={() => navigate("DetailsOne")}>DetailsOne</button>
      <button onClick={() => navigate("DetailsTwo")}>DetailsTwo</button>
      <button onClick={() => navigate("DetailsThree")}>DetailsThree</button>

      <Routes>
        <Route path="/" element={<DetailsOne />} />
        <Route path="/DetailsOne" element={<DetailsOne />} />
        <Route path="/DetailsTwo" element={<DetailsTwo />} />
        <Route path="/DetailsThree" element={<DetailsThree />} />
      </Routes>
    </>
  );
};
const Layout = () => {
  return <Outlet />;
};

export default Details;
