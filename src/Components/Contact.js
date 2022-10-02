import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import ContactsOne from "./Contacts/ContactsOne";
import ContactsThree from "./Contacts/ContactsThree";
import ContactsTwo from "./Contacts/ContactsTwo";
import Cookies from "universal-cookie";

const Contact = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();
  cookies.set("myCat", { Name: "don" });
  console.log(cookies.get("myCat"));

  return (
    <>
      <div>this is Contacts page</div>
      <button onClick={() => navigate("ContactsOne")}>ContactsOne</button>
      <button onClick={() => navigate("ContactsTwo")}>ContactsTwo</button>
      <button onClick={() => navigate("ContactsThree")}>ContactsThree</button>

      <Routes>
        <Route path="/" element={<ContactsOne />} />
        <Route path="/ContactsOne" element={<ContactsOne />} />
        <Route path="/ContactsTwo" element={<ContactsTwo />} />
        <Route path="/ContactsThree" element={<ContactsThree />} />
      </Routes>
    </>
  );
};

export default Contact;
