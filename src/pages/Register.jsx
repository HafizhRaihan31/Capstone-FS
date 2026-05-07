import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");

    // command:
    // nanti ganti dengan:
    // registerUser()
    // POST /api/register
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2 bg-green-100">
        <img
          src="/src/assets/img/register.png"
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">

          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-green-900">
              Buat Akun
            </h1>

            <p className="text-green-700 mt-2">
              Daftar untuk mulai mengumpulkan poin ♻️
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Konfirmasi Password
              </label>

              <input
                type="password"
                placeholder="Konfirmasi password"
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleRegister}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold"
            >
              Buat Akun
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-green-700">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-900 hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}