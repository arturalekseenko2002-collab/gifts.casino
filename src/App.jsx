import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cases from "./pages/Cases";
import CasePage from "./pages/CasePage";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    const bb = tg?.BackButton;
    if (!bb) return;

    const isHome = location.pathname === "/";

    const handleBack = () => {
      // если есть куда назад — идём назад
      if (window.history.length > 1) navigate(-1);
      else navigate("/"); // fallback
    };

    if (!isHome) {
      bb.show();
      bb.onClick(handleBack);
    } else {
      bb.hide();
      bb.offClick(handleBack);
    }

    return () => {
      bb.offClick(handleBack);
    };
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Cases />} />
      <Route path="/case/:id" element={<CasePage />} />
    </Routes>
  );
};

export default App;