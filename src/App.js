import "./App.css";
import { Routes, Route } from "react-router";
import Contact from "./Components/Contact";
import Rules from "./Components/Rules";
import { useNavigate } from "react-router";
import Users from "./Components/Users";
import Details from "./Components/Details";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>hello don</div>
      <button onClick={() => navigate("Rules")}>Rules</button>
      <button onClick={() => navigate("Users")}>Users</button>
      <button onClick={() => navigate("Details")}>Details</button>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="Rules/*" element={<Rules />} />
        <Route path="Users/*" element={<Users />} />
        <Route path="Details/*" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
