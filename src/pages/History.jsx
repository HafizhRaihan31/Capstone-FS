import DashboardLayout from "../layouts/DashboardLayout";

export default function History() {
  const historyData = [
    {
      id: 1,
      date: "13 Maret 2026",
      waste: "Botol Plastik",
      points: 15,
      status: "Berhasil",
    },
    {
      id: 2,
      date: "15 Februari 2026",
      waste: "Kardus",
      points: 10,
      status: "Berhasil",
    },
    {
      id: 3,
      date: "17 Januari 2026",
      waste: "Kaleng",
      points: 12,
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-green-900">
              Riwayat Scan
            </h1>

            <p className="text-green-700 mt-2">
              Semua aktivitas scan sampah kamu
            </p>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">

            {/* responsive */}
            <div className="overflow-x-auto">

              <table className="w-full text-left">
                <thead className="bg-green-100 text-green-900">
                  <tr>
                    <th className="p-4">Tanggal</th>
                    <th className="p-4">Jenis Sampah</th>
                    <th className="p-4">Poin</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {historyData.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-green-50 transition"
                    >
                      <td className="p-4">{item.date}</td>

                      <td className="p-4">
                        {item.waste}
                      </td>

                      <td className="p-4 text-green-600 font-semibold">
                        +{item.points}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.status === "Berhasil"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}