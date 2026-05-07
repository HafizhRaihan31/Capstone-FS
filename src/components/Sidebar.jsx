import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // dummy user
  // command:
  // nanti data user ambil dari backend:
  // GET /api/profile
  const user = {
    name: "Hafizh Raihan",
    role: "User",
    image: "/src/assets/img/profile.png",
  };

  const handleLogout = () => {
    // command:
    // hapus token auth JWT dari localStorage/cookies

    localStorage.removeItem("token");

    // command:
    // endpoint backend logout:
    // POST /api/logout

    navigate("/");
  };

  const Item = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`block px-3 py-2 rounded-xl transition ${
        pathname === to
          ? "bg-green-600 text-white"
          : "hover:bg-green-700 text-white/90"
      }`}
    >
      {children}
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
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-green-900 text-white p-5 transform transition-transform duration-300 flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-bold mb-8">
            Sortir.in
          </h1>

          {/* MENU */}
          <div className="space-y-2">

            {/* MAIN */}
            <div>
              <p className="text-sm opacity-70 mb-2">
                Main
              </p>

              <Item to="/dashboard">
                Dashboard
              </Item>

              <Item to="/scan">
                Scan Sampah
              </Item>

              <Item to="/reward">
                Tukar Poin
              </Item>

              <Item to="/history">
                Riwayat Scan
              </Item>
            </div>

            {/* ACCOUNT */}
            <div className="pt-6">
              <p className="text-sm opacity-70 mb-2">
                Account
              </p>

              <Item to="/profile">
                Ubah Profil
              </Item>
            </div>
          </div>
        </div>

        {/* USER SECTION */}
        <div className="mt-auto pt-6 border-t border-white/20">

          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-4">

            {/* PROFILE IMAGE */}
            <img
              src={user.image}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-green-300"
            />

            {/* USER TEXT */}
            <div>
              <p className="font-semibold text-sm">
                {user.name}
              </p>

              <p className="text-xs text-white/70">
                {user.role}
              </p>
            </div>
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 transition py-2 rounded-xl font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}