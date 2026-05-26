import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Pencil, Trash2, Plus } from "lucide-react";
import {
  getRewards,
  createReward,
  tukarReward,
  deleteReward,
  updateReward,
} from "../services/rewardService";

export default function RewardPage() {

  // USER STATE
  const [user, setUser] = useState(null);

  // REWARD STATE
  const [rewards, setRewards] = useState([]);

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // EDIT STATE
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // IMAGE STATE
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // FORM STATE
  const [formData, setFormData] = useState({
    reward_name: "",
    description: "",
    point_cost: "",
    stock: "",
  });

  // FETCH USER - listen perubahan dari halaman lain
  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    };

    loadUser();

    // Listen event dari Scan.jsx setelah dapat poin
    window.addEventListener("userUpdated", loadUser);
    return () => window.removeEventListener("userUpdated", loadUser);
  }, []);

  // FETCH REWARDS
  const fetchRewards = async () => {
    try {
      const data = await getRewards();
      setRewards(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // CREATE / UPDATE REWARD
  const handleCreateReward = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("reward_name", formData.reward_name);
      data.append("description", formData.description);
      data.append("point_cost", formData.point_cost);
      data.append("stock", formData.stock);
      if (image) {
        data.append("reward_image", image);
      }

      if (isEdit) {
        await updateReward(selectedId, data);
        alert("Reward berhasil diupdate");
      } else {
        await createReward(data);
        alert("Reward berhasil dibuat");
      }

      await fetchRewards();

      setFormData({ reward_name: "", description: "", point_cost: "", stock: "" });
      setImage(null);
      setPreview(null);
      setSelectedId(null);
      setIsEdit(false);
      setShowModal(false);

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Gagal proses reward");
    }
  };

  // TUKAR REWARD
  const handleTukarReward = async (rewardId) => {
    try {
      const response = await tukarReward(rewardId);
      alert(response.message);

      // Update poin user di state & localStorage
      const updatedUser = {
        ...user,
        total_points: user.total_points - response.data.points_used,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Refresh rewards
      await fetchRewards();

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Gagal tukar reward");
    }
  };

  // DELETE REWARD
  const handleDeleteReward = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus reward?");
    if (!confirmDelete) return;
    try {
      const response = await deleteReward(id);
      alert(response.message);
      setRewards(rewards.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Gagal menghapus reward");
    }
  };

  // EDIT REWARD
  const handleEditReward = (item) => {
    setIsEdit(true);
    setSelectedId(item.id);
    setFormData({
      reward_name: item.reward_name,
      description: item.description,
      point_cost: item.point_cost,
      stock: item.stock,
    });
    setPreview(`http://localhost:5000${item.image_url}`);
    setShowModal(true);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-green-900">Tukar Poin</h1>
              <p className="text-green-700 mt-2">
                Tukarkan poinmu dengan berbagai hadiah menarik!
              </p>

              {/* REALTIME POINT */}
              <div className="mt-4 bg-green-100 inline-block px-4 py-2 rounded-lg">
                <span className="font-semibold text-green-900">
                  Poin Kamu: {user?.total_points || 0}
                </span>
              </div>
            </div>

            {/* ADMIN BUTTON */}
            {user?.role === "admin" && (
              <button
                onClick={() => {
                  setShowModal(true);
                  setIsEdit(false);
                  setFormData({ reward_name: "", description: "", point_cost: "", stock: "" });
                  setImage(null);
                  setPreview(null);
                }}
                className="mt-4 md:mt-0 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl transition font-semibold"
              >
                <Plus size={18} />
                Tambah Reward
              </button>
            )}
          </div>

          {/* GRID CARD */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* IMAGE */}
                <img
                  src={
                    item.image_url
                      ? `http://localhost:5000${item.image_url}`
                      : "/src/assets/img/product.png"
                  }
                  alt={item.reward_name}
                  className="h-52 w-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-green-900">
                    {item.reward_name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <p className="text-green-700 mt-3 font-medium">{item.point_cost} Poin</p>
                  <p className="text-sm text-gray-500 mt-1">Stock: {item.stock}</p>

                  {/* USER BUTTON */}
                  {user?.role !== "admin" ? (
                    <button
                      className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition"
                      onClick={() => handleTukarReward(item.id)}
                    >
                      Tukar Poin
                    </button>
                  ) : (
                    // ADMIN BUTTON
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => handleEditReward(item)}
                        className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl transition"
                      >
                        <Pencil size={16} />
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteReward(item.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL CREATE / UPDATE */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-green-900">
                {isEdit ? "Update Reward" : "Tambah Reward"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleCreateReward} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="block text-sm mb-2">Nama Reward</label>
                <input
                  type="text"
                  name="reward_name"
                  value={formData.reward_name}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-sm mb-2">Deskripsi</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                  rows="3"
                />
              </div>

              {/* IMAGE */}
              <div>
                <label className="block text-sm mb-2">Upload Gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              {/* PREVIEW */}
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-52 object-cover rounded-xl"
                />
              )}

              {/* POINT */}
              <div>
                <label className="block text-sm mb-2">Point Cost</label>
                <input
                  type="number"
                  name="point_cost"
                  value={formData.point_cost}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
              </div>

              {/* STOCK */}
              <div>
                <label className="block text-sm mb-2">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
              >
                {isEdit ? "Update Reward" : "Simpan Reward"}
              </button>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}