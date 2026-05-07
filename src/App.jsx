import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Rewards from "./pages/Rewards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Scan from "./pages/Scan";
import RewardPage from "./pages/RewardPage";
import History from "./pages/History";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}