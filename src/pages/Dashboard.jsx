import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import { Link } from 'react-router-dom'; 
export default function Dashboard() {
  // STATE (Tidak diubah)
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH DASHBOARD (Tidak diubah)
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboard();
        console.log(response.data);
        setDashboard(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        loading && setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  // LOADING (Dipercantik dengan gaya minimalis modern)
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center p-6">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600"></div>
            <p className="mt-4 font-medium text-green-900">Memuat dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // DATA MAPPER
  const user = dashboard?.user;
  const totalPoints = user?.total_points || 0;
  const totalScan = dashboard?.total_scan || 0;
  const history = dashboard?.history || [];

  // REWARD TARGET
  const targetPoints = 3000;
  const remainingPoints = targetPoints - totalPoints;
  const progressPercentage = Math.min((totalPoints / targetPoints) * 100, 100);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50/50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          
          {/* HEADER + CTA */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold text-green-900 sm:text-2xl">
                Selamat Datang, {user?.full_name} 
              </h1>
              <p className="mt-1 text-sm text-green-700">
                Yuk pilah sampah dan kumpulkan poin hari ini!
              </p>
            </div>
            <Link to="/scan" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors">
              <span>📷</span> Scan Sampah Sekarang
            </Link>
          </div>

          {/* STATS CARDS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* POINTS CARD */}
            <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 select-none">🪙</div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Poin Anda Saat Ini
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-green-900 tracking-tight">
                  {totalPoints}
                </span>
                <span className="text-sm font-semibold text-green-600">Poin</span>
              </div>
            </div>

            {/* TOTAL SCAN CARD */}
            <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 select-none">♻️</div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Sampah Terkumpul
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-green-900 tracking-tight">
                  {totalScan}
                </span>
                <span className="text-sm font-semibold text-green-600">Aktivitas Scan</span>
              </div>
            </div>
          </div>

          {/* LOWER SECTION */}
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            
            {/* PROGRESS CARD */}
            <div className="flex flex-col justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div>
                <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
                  <span className="text-lg"></span>
                  <p className="font-bold text-green-900">Progress Point</p>
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-sm text-gray-500 font-medium">Akumulasi Poin</span>
                  <span className="text-lg font-bold text-gray-900">
                    {totalPoints} <span className="text-xs text-gray-400 font-normal">/ {targetPoints} Poin</span>
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full bg-gray-100 h-3 rounded-full mt-3 overflow-hidden border border-gray-50">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 shadow-inner"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-green-50/50 p-3 text-center border border-green-100/30">
                <p className="text-sm font-semibold text-green-800">
                  {remainingPoints > 0
                    ? `💡 ${remainingPoints} poin lagi menuju reward`
                    : "🎉 Reward siap ditukarkan!"}
                </p>
              </div>
            </div>

            {/* HISTORY CARD */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
                <span className="text-lg">📜</span>
                <p className="font-bold text-green-900">Riwayat Sampah</p>
              </div>

              <div className="mt-4 space-y-3 flex-1 overflow-y-auto max-h-[220px] pr-1">
                {history.length > 0 ? (
                  history.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50/40 hover:bg-gray-50 p-3 rounded-xl border border-gray-100/50 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {item.nama_kategori}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {new Date(item.created_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          })}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                        +{item.poin_didapat} Poin
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <span className="text-3xl opacity-40 mb-2">🍃</span>
                    <p className="text-sm text-gray-400 font-medium">Belum ada riwayat scan</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}