import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Undangan from "./pages/Undangan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/undangan-digital" element={<Undangan />} />
      </Routes>
    </>
  );
}

export default App;
