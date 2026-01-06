import { Routes, Route } from "react-router-dom";
import Cases from "./pages/Cases";
import CasePage from "./pages/CasePage";


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Cases />} />
        <Route path="/case/:id" element={<CasePage />} />
    </Routes>
  );
};

export default App;