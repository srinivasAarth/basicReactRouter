import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import ContactsOne from "./Contacts/ContactsOne";
import ContactsThree from "./Contacts/ContactsThree";
import ContactsTwo from "./Contacts/ContactsTwo";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>this is Contacts page</div>
      <button onClick={() => navigate("ContactsOne")}>ContactsOne</button>
      <button onClick={() => navigate("ContactsTwo")}>ContactsTwo</button>
      <button onClick={() => navigate("ContactsThree")}>ContactsThree</button>
      <button onClick={() => navigate("ContactsLast")}>ContactsThree</button>

      <Routes>
        <Route path="/" element={<ContactsOne />} />
        <Route path="/ContactsOne" element={<ContactsOne />} />
        <Route path="/ContactsTwo" element={<ContactsTwo />} />
        <Route path="/ContactsThree" element={<ContactsThree />} />
        <Route path="/ContactsLast" element={<ContactsTwo />} />
      </Routes>
    </>
  );
};

export default Contact;
