import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch leaderboard
        const res = await api.get("/leaderboard");
        setLeaderboard(res.data.data);

        // Fetch posisi user sendiri
        const rankRes = await api.get("/leaderboard/me");
        setMyRank(rankRes.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Medal untuk top 3
  const getMedal = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  // Warna row untuk top 3
  const getRowClass = (rank) => {
    if (rank === 1) return "bg-yellow-50 border-yellow-200";
    if (rank === 2) return "bg-gray-50 border-gray-200";
    if (rank === 3) return "bg-orange-50 border-orange-200";
    return "bg-white border-gray-100";
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-3xl mx-auto">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-900">🏆 Leaderboard</h1>
            <p className="text-green-700 mt-2">
              Top 10 penggiat daur ulang sampah terbaik
            </p>
          </div>

          {/* MY RANK CARD */}
          {myRank?.rank && (
            <div className="bg-green-500 text-white rounded-2xl p-5 mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Posisi Kamu</p>
                <p className="text-3xl font-bold mt-1">#{myRank.rank}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Total Poin</p>
                <p className="text-3xl font-bold mt-1">{myRank.total_points}</p>
              </div>
            </div>
          )}

          {/* LEADERBOARD TABLE */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {loading ? (
              <div className="p-10 text-center text-gray-400">Loading...</div>
            ) : leaderboard.length > 0 ? (
              <div className="divide-y">
                {leaderboard.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-4 border-l-4 ${getRowClass(Number(item.rank))}`}
                  >
                    {/* RANK */}
                    <div className="w-12 text-center text-2xl font-bold">
                      {getMedal(Number(item.rank))}
                    </div>

                    {/* AVATAR */}
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg flex-shrink-0">
                      {item.full_name.charAt(0).toUpperCase()}
                    </div>

                    {/* NAME */}
                    <div className="flex-1">
                      <p className="font-semibold text-green-900">
                        {item.full_name}
                      </p>
                    </div>

                    {/* POINTS */}
                    <div className="text-right">
                      <p className="font-bold text-green-600 text-lg">
                        {item.total_points}
                      </p>
                      <p className="text-xs text-gray-400">poin</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-10 text-center text-gray-400">
                Belum ada data leaderboard
              </div>
            )}
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}