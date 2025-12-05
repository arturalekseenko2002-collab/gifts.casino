import { Routes, Route } from "react-router-dom";
import Cases from "./pages/Cases";
import Withdraw from "./pages/Withdraw";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Cases />} />
    </Routes>
  );
};

export default App;