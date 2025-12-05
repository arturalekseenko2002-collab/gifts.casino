import { Routes, Route } from "react-router-dom";
import Home from "./pages/Main";
import Withdraw from "./pages/Withdraw";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Cases />} />
    </Routes>
  );
};

export default App;