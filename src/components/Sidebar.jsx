import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  ScanLine,
  Gift,
  History,
  User,
  LogOut,
  ClipboardList,
  Recycle,
  Users,
  Trophy,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // USER STATE
  const [user, setUser] = useState(null);

  // LOGOUT MODAL
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // FETCH PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();

    window.addEventListener("updateProfile", fetchProfile);
    return () => window.removeEventListener("updateProfile", fetchProfile);
  }, []);

  // HANDLE LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowLogoutModal(false);
    navigate("/");
  };

  // SIDEBAR ITEM
  const Item = ({ to, icon, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
        pathname === to
          ? "bg-green-600 text-white"
          : "hover:bg-green-700 text-white/90"
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );

  return (
    <>
      {/* OVERLAY MOBILE */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-green-900 text-white p-5 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* TOP SECTION - Logo (selalu terlihat, tidak ikut scroll) */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold mb-8">Sortir.in</h1>
        </div>

        {/* MIDDLE SECTION - Menu (bisa scroll jika konten melebihi layar) */}
        <div className="flex-1 overflow-y-auto min-h-0 pr-1 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent">
          <div className="space-y-2">

            {/* MAIN */}
            <div>
              <p className="text-sm opacity-70 mb-2">Main</p>

              <Item to="/dashboard" icon={<LayoutDashboard size={18} />}>
                Dashboard
              </Item>

              <Item to="/scan" icon={<ScanLine size={18} />}>
                Scan Sampah
              </Item>

              <Item to="/reward" icon={<Gift size={18} />}>
                Tukar Poin
              </Item>

              <Item to="/history" icon={<History size={18} />}>
                Riwayat
              </Item>

              <Item to="/leaderboard" icon={<Trophy size={18} />}>
                Leaderboard
              </Item>
            </div>

            {/* ADMIN MENU */}
            {user?.role === "admin" && (
              <div className="pt-6">
                <p className="text-sm opacity-70 mb-2">Admin</p>

                <Item to="/admin/reward-logs" icon={<ClipboardList size={18} />}>
                  Log Reward
                </Item>

                <Item to="/admin/trash-logs" icon={<Recycle size={18} />}>
                  Log Sampah
                </Item>

                <Item to="/admin/users" icon={<Users size={18} />}>
                  Kelola User
                </Item>
              </div>
            )}

            {/* ACCOUNT */}
            <div className="pt-6 pb-2">
              <p className="text-sm opacity-70 mb-2">Account</p>

              <Item to="/profile" icon={<User size={18} />}>
                Ubah Profil
              </Item>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - User info & Logout (selalu terlihat di bawah) */}
        <div className="flex-shrink-0 pt-4 border-t border-white/20">

          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <p className="font-semibold text-sm">
                {user?.full_name || "Loading..."}
              </p>
              <p className="text-xs text-white/70">
                {user?.role
                  ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                  : "User"}
              </p>
            </div>
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition py-3 rounded-xl font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl">

            <h2 className="text-xl font-bold text-gray-800 mb-2">Logout</h2>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin logout?</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}