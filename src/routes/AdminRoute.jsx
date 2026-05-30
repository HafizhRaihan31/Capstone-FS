import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Tidak ada token → redirect ke login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Ada token tapi bukan admin → redirect ke dashboard
  if (user?.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}