import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

export default function Profile() {

  // ==========================================
  // STATE
  const [formData, setFormData] =
    useState({
      full_name: "",
      email: "",

      current_password: "",
      new_password: "",
      confirm_password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  // FETCH PROFILE
  useEffect(() => {

    const fetchProfile = async () => {
      try {

        const response =
          await getProfile();

        setFormData((prev) => ({
          ...prev,

          full_name:
            response.data.data.full_name,

          email:
            response.data.data.email,
        }));

      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();

  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setSuccess("");
      setError("");

      const response =
        await updateProfile(formData);

      setSuccess(
        response.data.message
      );

      // RESET PASSWORD FIELD
      setFormData((prev) => ({
        ...prev,

        current_password: "",
        new_password: "",
        confirm_password: "",
      }));

    } catch (error) {

      console.error(error);

      setError(
        error.response?.data?.message ||
        "Update profile gagal"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="p-6">

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">

          {/* TITLE */}
          <div className="mb-8">

            <h1 className="text-2xl font-bold text-green-900">
              Profile Saya
            </h1>

            <p className="text-green-700 mt-2">
              Kelola informasi akun anda
            </p>
          </div>

          {/* SUCCESS */}
          {success && (
            <div className="mb-4 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
              {success}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="mb-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* NAME */}
            <div>

              <label className="block text-sm text-green-900 mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* PASSWORD SECTION */}
            <div className="pt-4 border-t">

              <h2 className="text-lg font-semibold text-green-900 mb-4">
                Ubah Password
              </h2>

              {/* CURRENT PASSWORD */}
              <div className="mb-4">

                <label className="block text-sm text-green-900 mb-2">
                  Password Lama
                </label>

                <input
                  type="password"
                  name="current_password"
                  value={formData.current_password}
                  onChange={handleChange}
                  placeholder="Kosongkan jika tidak ingin mengganti password"
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* NEW PASSWORD */}
              <div className="mb-4">

                <label className="block text-sm text-green-900 mb-2">
                  Password Baru
                </label>

                <input
                  type="password"
                  name="new_password"
                  value={formData.new_password}
                  onChange={handleChange}
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
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold"
            >

              {loading
                ? "Loading..."
                : "Update Profile"}

            </button>

          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}