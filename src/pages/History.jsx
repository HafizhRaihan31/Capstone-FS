import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  getHistory,
} from "../services/historyService";

export default function History() {

  // STATE
  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH HISTORY
  useEffect(() => {

    const fetchHistory = async () => {
      try {

        const response =
          await getHistory();

        console.log(response.data);

        setHistory(response.data.data);

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    };

    fetchHistory();

  }, []);

  return (
    <DashboardLayout>

      <div className="p-6">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-6">

            <h1 className="text-2xl font-bold text-green-900">
              Riwayat Poin
            </h1>

            <p className="text-green-700 mt-2">
              Semua aktivitas scan sampah anda
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">

            {/* TABLE */}
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-green-50">

                  <tr>

                    <th className="text-left p-4 text-green-900">
                      Kategori
                    </th>

                    <th className="text-left p-4 text-green-900">
                      Berat
                    </th>

                    <th className="text-left p-4 text-green-900">
                      Poin
                    </th>

                    <th className="text-left p-4 text-green-900">
                      Status
                    </th>

                    <th className="text-left p-4 text-green-900">
                      Tanggal
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {loading ? (

                    <tr>
                      <td
                        colSpan="5"
                        className="p-6 text-center"
                      >
                        Loading...
                      </td>
                    </tr>

                  ) : history.length > 0 ? (

                    history.map((item) => (

                      <tr
                        key={item.id}
                        className="border-t"
                      >

                        {/* KATEGORI */}
                        <td className="p-4">
                          Kategori #{item.kategori_id}
                        </td>

                        {/* BERAT */}
                        <td className="p-4">
                          {item.berat} Kg
                        </td>

                        {/* POIN */}
                        <td className="p-4 text-green-600 font-semibold">
                          +{item.poin_didapat}
                        </td>

                        {/* STATUS */}
                        <td className="p-4">

                          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                            {item.status}
                          </span>

                        </td>

                        {/* TANGGAL */}
                        <td className="p-4 text-gray-500">
                          {
                            new Date(
                              item.created_at
                            ).toLocaleDateString(
                              "id-ID"
                            )
                          }
                        </td>
                      </tr>
                    ))

                  ) : (

                    <tr>
                      <td
                        colSpan="5"
                        className="p-6 text-center text-gray-500"
                      >
                        Belum ada riwayat transaksi
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}