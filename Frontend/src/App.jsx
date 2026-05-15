import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/start/StartPage";
import ReviewPage from "./pages/review/ReviewPage";
import GuidePage from "./pages/guide/GuidePage";
import AboutPage from "./pages/about/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route 
        path="/review" 
        element={
          <ProtectedRoute>
            <ReviewPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
