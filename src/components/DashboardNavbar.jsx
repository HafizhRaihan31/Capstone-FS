import { Link, useLocation } from "react-router-dom";
import { getProfile } from "../services/userService";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function DashboardNavbar({ setOpen }) {
  const [profile, setProfile] = useState(null);
  const location = useLocation();

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setProfile(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();

    // Dengarkan event updateProfile dari Profile.jsx
    window.addEventListener("updateProfile", fetchProfile);
    return () => window.removeEventListener("updateProfile", fetchProfile);
  }, []);

  const getInitial = (name) => {
    if (!name) return "?";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3.5 shadow-md flex justify-between items-center sticky top-0 z-50 modern-navbar animate-fade-in">
      {/* Hamburger Button untuk Mobile */}
      <button
        className="md:hidden p-2 -ml-2 rounded-lg hover:bg-green-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-2">
        <Link
          to="/scan"
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive("/scan")
              ? "bg-white text-green-700 shadow-sm"
              : "hover:bg-white/10 hover:text-white text-green-50"
          }`}
        >
          Scan Sampah
        </Link>
        <Link
          to="/reward"
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive("/reward")
              ? "bg-white text-green-700 shadow-sm"
              : "hover:bg-white/10 hover:text-white text-green-50"
          }`}
        >
          Tukar Poin
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3 bg-white/10 pl-4 pr-2 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
        <span className="text-sm font-medium tracking-wide hidden sm:inline-block">
          {profile?.full_name || "Loading..."}
        </span>

        {/* Tampilkan foto jika ada, inisial jika tidak */}
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white text-green-700 font-bold text-xs flex items-center justify-center shadow-sm select-none border border-green-100">
          {profile?.profile_image ? (
            <img
              src={`${API_URL}${profile.profile_image}`}
              alt={profile.full_name}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ) : (
            getInitial(profile?.full_name)
          )}
        </div>
      </div>
    </nav>
  );
}