import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { registerUser } from "../services/authService";
import loginImage from "../assets/img/login.png";

export default function Register() {
  const navigate = useNavigate();

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // LOADING
  const [loading, setLoading] = useState(false);

  // ERROR
  const [errorMessage, setErrorMessage] = useState("");

  // SUCCESS
  const [successMessage, setSuccessMessage] = useState("");

  // HANDLE REGISTER
  const handleRegister = async () => {
    try {
      setLoading(true);

      // RESET MESSAGE
      setErrorMessage("");
      setSuccessMessage("");

      // VALIDASI PASSWORD
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password tidak sama");
        return;
      }

      // REQUEST REGISTER
      const response = await registerUser({
        full_name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);

      // SUCCESS MESSAGE
      setSuccessMessage("Akun berhasil dibuat");

      // REDIRECT LOGIN
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error(error);

      setErrorMessage(error.response?.data?.message || "Register gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2 bg-green-100">
        <img
          src={loginImage}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-green-900">Buat Akun</h1>

            <p className="text-green-700 mt-2">
              Daftar untuk mulai mengumpulkan poin
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl">
                <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />

                <div>
                  <p className="font-semibold">Register Gagal</p>

                  <p className="text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl">
                <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />

                <div>
                  <p className="font-semibold">Berhasil</p>

                  <p className="text-sm">{successMessage}</p>
                </div>
              </div>
            )}

            {/* NAME */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

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

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-sm text-green-900 mb-2">
                Konfirmasi Password
              </label>

              <input
                type="password"
                placeholder="Konfirmasi password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {loading ? "Loading..." : "Buat Akun"}
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
