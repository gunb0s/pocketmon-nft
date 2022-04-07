import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PFTList from "./pages/PFTList";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [contract, setContract] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/contract").then((data) => {
      setContract((prev) => {
        return {
          ...data.data,
          totalSupply: parseInt(data.data.totalSupply),
        };
      });
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home supply={contract.totalSupply} />}
        />
        <Route path="/list" element={<PFTList />} />
      </Routes>
    </>
  );
};

export default App;
