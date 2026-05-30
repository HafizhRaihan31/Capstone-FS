import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getProfile, updateProfile } from "../services/profileService";
import { Camera } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Profile() {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // FETCH PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        const data = response.data.data;
        setFormData((prev) => ({
          ...prev,
          full_name: data.full_name,
          email: data.email,
        }));
        if (data.profile_image) {
          setCurrentImage(`${API_URL}${data.profile_image}`); // ← FIX
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccess("");
      setError("");

      const data = new FormData();
      data.append("full_name", formData.full_name);
      data.append("email", formData.email);

      if (formData.current_password) {
        data.append("current_password", formData.current_password);
        data.append("new_password", formData.new_password);
        data.append("confirm_password", formData.confirm_password);
      }

      if (profileImage) {
        data.append("profile_image", profileImage);
      }

      const response = await updateProfile(data);
      const updatedUser = response.data.data;

      const existingUser = JSON.parse(localStorage.getItem("user") || "{}");
      const mergedUser = { ...existingUser, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(mergedUser));

      if (updatedUser.profile_image) {
        setCurrentImage(`${API_URL}${updatedUser.profile_image}`); // ← FIX
        setPreviewImage(null);
        setProfileImage(null);
      }

      window.dispatchEvent(new Event("updateProfile"));
      setSuccess(response.data.message);

      setFormData((prev) => ({
        ...prev,
        current_password: "",
        new_password: "",
        confirm_password: "",
      }));

    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Update profile gagal");
    } finally {
      setLoading(false);
    }
  };

  const displayImage = previewImage || currentImage;

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-900">Profile Saya</h1>
            <p className="text-green-700 mt-2">Kelola informasi akun anda</p>
          </div>

          {success && (
            <div className="mb-4 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* FOTO PROFIL */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-200 bg-green-100">
                {displayImage ? (
                  <img src={displayImage} alt="Foto Profil" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-green-600 text-3xl font-bold">
                    {formData.full_name?.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 cursor-pointer transition">
                <Camera size={14} />
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
            <p className="text-sm text-gray-400 mt-3">Klik ikon kamera untuk ganti foto</p>
            {previewImage && (
              <p className="text-sm text-green-600 mt-1">
                ✓ Foto baru dipilih — klik Update Profile untuk menyimpan
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-green-900 mb-2">Nama Lengkap</label>
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm text-green-900 mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>

            <div className="pt-4 border-t">
              <h2 className="text-lg font-semibold text-green-900 mb-4">Ubah Password</h2>
              <div className="mb-4">
                <label className="block text-sm text-green-900 mb-2">Password Lama</label>
                <input type="password" name="current_password" value={formData.current_password} onChange={handleChange} placeholder="Kosongkan jika tidak ingin mengganti password" className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-green-900 mb-2">Password Baru</label>
                <input type="password" name="new_password" value={formData.new_password} onChange={handleChange} className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
              <div>
                <label className="block text-sm text-green-900 mb-2">Konfirmasi Password</label>
                <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 transition text-white py-3 rounded-xl font-semibold">
              {loading ? "Menyimpan..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}