import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  // AMBIL TOKEN
  const token = localStorage.getItem("token");

  // JIKA TIDAK ADA TOKEN
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // JIKA ADA TOKEN
  return children;
}