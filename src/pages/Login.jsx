import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");

    // command:
    // nanti ganti dengan:
    // loginUser()
    // POST /api/login
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2 bg-green-100">
        <img
          src="/src/assets/img/login.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">

          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-green-900">
              Login
            </h1>

            <p className="text-green-700 mt-2">
              Selamat datang kembali 👋
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-4">

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

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold"
            >
              Login
            </button>

            {/* SIGN UP LINK */}
            <p className="text-center text-sm text-green-700">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-900 hover:underline"
              >
                Buat akun
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}