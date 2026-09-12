import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CoursePage } from "./pages/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses/:id" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
