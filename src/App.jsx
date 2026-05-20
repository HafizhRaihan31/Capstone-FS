import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

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
import RewardLogsPage from "./pages/admin/RewardLogsPage";
import TrashLogsPage from "./pages/admin/TrashLogsPage";
import ManageUsersPage from "./pages/admin/ManageUsersPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/reward-logs" element={<RewardLogsPage />} />
        <Route path="/admin/trash-logs" element={<TrashLogsPage />} />
        <Route path="/admin/users" element={<ManageUsersPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/scan"
          element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reward"
          element={
            <ProtectedRoute>
              <RewardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
