import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  // STATE FORM
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // HANDLE LOGIN
  const handleLogin = async () => {
    try {
      setLoading(true);

      // RESET ERROR
      setErrorMessage("");

      // REQUEST KE BACKEND
      const response = await loginUser(formData);

      console.log(response.data);

      // SIMPAN TOKEN JWT
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      // REDIRECT
      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      // TAMPILKAN ERROR KE UI
      setErrorMessage(error.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false);
    }
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
            <h1 className="text-3xl font-bold text-green-900">Login</h1>

            <p className="text-green-700 mt-2">Selamat datang kembali</p>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            {/* EMAIL */}
            <div>
              <label className="block text-sm text-green-900 mb-2">Email</label>

              <input
                type="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl">
                <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />

                <div>
                  <p className="font-semibold">Login Gagal</p>

                  <p className="text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {loading ? "Loading..." : "Login"}
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
