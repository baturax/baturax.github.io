import HomePage from "./components/HomePage.jsx";
import Otobusler from "./components/Otobusler.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/otobusler" element={<Otobusler />} />
      </Routes>
  );
}

export default App;
