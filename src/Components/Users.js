import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import UsersOne from "./Users/UsersOne";
import UsersThree from "./Users/UsersThree";
import UsersTwo from "./Users/UsersTwo";
const Users = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>this is the users page</div>
      <button onClick={() => navigate("UsersOne")}>UsersOne</button>
      <button onClick={() => navigate("UsersTwo")}>UsersTwo</button>
      <button onClick={() => navigate("UsersThree")}>UsersThree</button>
      <Routes>
        <Route path="/" element={<UsersOne />} />
        <Route path="/UsersOne" element={<UsersOne />} />
        <Route path="/UsersTwo" element={<UsersTwo />} />
        <Route path="/UsersThree" element={<UsersThree />} />
      </Routes>
    </>
  );
};

export default Users;
