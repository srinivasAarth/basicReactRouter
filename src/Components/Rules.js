import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router";
import RulesOne from "./Rules/RulesOne";
import RulesThree from "./Rules/RulesThree";
import RulesTwo from "./Rules/RulesTwo";
const Rules = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>this is rules page</div>
      <button onClick={() => navigate("RuleOne")}>RuleOne</button>
      <button onClick={() => navigate("RuleTwo")}>RuleOne</button>
      <button onClick={() => navigate("RuleThree")}>RuleOne</button>

      <Routes>
        <Route path="/" element={<RulesOne />} />
        <Route path="/RuleOne" element={<RulesOne />} />
        <Route path="/RuleTwo" element={<RulesTwo />} />
        <Route path="/RuleThree" element={<RulesThree />} />
      </Routes>
    </>
  );
};
const Layout = () => {
  return <Outlet />;
};

export default Rules;
