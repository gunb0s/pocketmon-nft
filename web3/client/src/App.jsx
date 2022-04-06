import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PFTList from "./pages/PFTList";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<PFTList />} />
      </Routes>
    </>
  );
};

export default App;
