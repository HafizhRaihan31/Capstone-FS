import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getHistory, getRewardHistory } from "../services/historyService";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function History() {
  const [activeTab, setActiveTab] = useState("scan");
  const [history, setHistory] = useState([]);
  const [loadingScan, setLoadingScan] = useState(true);
  const [rewardHistory, setRewardHistory] = useState([]);
  const [loadingReward, setLoadingReward] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistory();
        setHistory(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingScan(false);
      }
    };
    fetchHistory();
  }, []);

  useEffect(() => {
    const fetchRewardHistory = async () => {
      try {
        const response = await getRewardHistory();
        setRewardHistory(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingReward(false);
      }
    };
    fetchRewardHistory();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-green-900">Riwayat</h1>
            <p className="text-green-700 mt-2">Semua aktivitas poin dan penukaran reward kamu</p>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("scan")}
              className={`px-5 py-2 rounded-xl font-medium transition ${activeTab === "scan" ? "bg-green-500 text-white" : "bg-white border border-green-200 text-green-700 hover:bg-green-50"}`}
            >
              🗑️ Riwayat Scan
            </button>
            <button
              onClick={() => setActiveTab("reward")}
              className={`px-5 py-2 rounded-xl font-medium transition ${activeTab === "reward" ? "bg-green-500 text-white" : "bg-white border border-green-200 text-green-700 hover:bg-green-50"}`}
            >
              🎁 Riwayat Tukar Reward
            </button>
          </div>

          {/* TAB SCAN */}
          {activeTab === "scan" && (
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="text-left p-4 text-green-900">Kategori</th>
                      <th className="text-left p-4 text-green-900">Berat</th>
                      <th className="text-left p-4 text-green-900">Poin</th>
                      <th className="text-left p-4 text-green-900">Status</th>
                      <th className="text-left p-4 text-green-900">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingScan ? (
                      <tr><td colSpan="5" className="p-6 text-center text-gray-400">Loading...</td></tr>
                    ) : history.length > 0 ? (
                      history.map((item) => (
                        <tr key={item.id} className="border-t hover:bg-green-50 transition">
                          <td className="p-4 font-medium text-green-900">{item.kategori}</td>
                          <td className="p-4 text-gray-600">{item.berat} Kg</td>
                          <td className="p-4 text-green-600 font-semibold">+{item.poin_didapat}</td>
                          <td className="p-4">
                            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">{item.status}</span>
                          </td>
                          <td className="p-4 text-gray-500">{new Date(item.created_at).toLocaleDateString("id-ID")}</td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="5" className="p-6 text-center text-gray-400">Belum ada riwayat scan sampah</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB REWARD */}
          {activeTab === "reward" && (
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="text-left p-4 text-green-900">Reward</th>
                      <th className="text-left p-4 text-green-900">Poin Digunakan</th>
                      <th className="text-left p-4 text-green-900">Status</th>
                      <th className="text-left p-4 text-green-900">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingReward ? (
                      <tr><td colSpan="4" className="p-6 text-center text-gray-400">Loading...</td></tr>
                    ) : rewardHistory.length > 0 ? (
                      rewardHistory.map((item) => (
                        <tr key={item.id} className="border-t hover:bg-green-50 transition">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              {item.image_url && (
                                <img
                                  src={`${API_URL}${item.image_url}`} // ← FIX
                                  alt={item.reward_name}
                                  className="w-10 h-10 rounded-lg object-cover"
                                />
                              )}
                              <span className="font-medium text-green-900">{item.reward_name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-red-500 font-semibold">-{item.points_used}</td>
                          <td className="p-4">
                            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">{item.status}</span>
                          </td>
                          <td className="p-4 text-gray-500">{new Date(item.redeemed_at).toLocaleDateString("id-ID")}</td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="4" className="p-6 text-center text-gray-400">Belum ada riwayat penukaran reward</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
}