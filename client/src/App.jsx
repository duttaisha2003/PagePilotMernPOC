import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DynamicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
