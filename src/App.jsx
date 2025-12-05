import { Routes, Route } from "react-router-dom";
import Cases from "./pages/Cases";


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Cases />} />
    </Routes>
  );
};

export default App;