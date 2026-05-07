import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  const [preview, setPreview] = useState("/src/assets/img/profile.png");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }

    // command:
    // nanti image ini dikirim ke backend:
    // POST /api/upload-profile
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // command:
    // endpoint update profile:
    // PUT /api/profile

    alert("Profile berhasil diperbarui!");
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-900">Ubah Profile</h1>

            <p className="text-green-700 mt-2">Kelola informasi akun kamu</p>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow p-6">
            {/* PROFILE IMAGE */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={preview}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-green-200"
              />

              <label className="mt-4">
                <span className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition">
                  Upload Foto
                </span>

                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImage}
                />
              </label>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAMA */}
              <div>
                <label className="block text-sm text-green-900 mb-2">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  defaultValue="Hafizh Raihan"
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
                  defaultValue="hafizh@example.com"
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* NOMOR HP */}
              <div>
                <label className="block text-sm text-green-900 mb-2">
                  Nomor HP
                </label>

                <input
                  type="text"
                  defaultValue="08123456789"
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* PASSWORD BARU */}
              <div>
                <label className="block text-sm text-green-900 mb-2">
                  Password Baru
                </label>

                <input
                  type="password"
                  placeholder="Masukkan password baru"
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {/* command:
    endpoint backend:
    PUT /api/change-password
  */}
              </div>

              {/* KONFIRMASI PASSWORD */}
              <div>
                <label className="block text-sm text-green-900 mb-2">
                  Konfirmasi Password
                </label>

                <input
                  type="password"
                  placeholder="Konfirmasi password baru"
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {/* command:
                validasi frontend:
                password === confirmPassword

                validasi backend juga WAJIB
                */}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
