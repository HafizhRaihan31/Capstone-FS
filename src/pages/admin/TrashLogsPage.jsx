import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
  from "../../layouts/DashboardLayout";

import {
  getAllTrashLogs,
} from "../../services/transaksiService";


export default function TrashLogsPage() {

  // ==========================================
  // STATE
  // ==========================================
  const [logs, setLogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // ==========================================
  // FETCH LOGS
  // ==========================================
  useEffect(() => {

    const fetchLogs =
      async () => {

        try {

          const data =
            await getAllTrashLogs();

          setLogs(data);

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    fetchLogs();

  }, []);


  return (

    <DashboardLayout>

      <div className="p-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-8">

            <h1 className="
              text-2xl
              font-bold
              text-green-900
            ">
              Log Transaksi Sampah
            </h1>

            <p className="
              text-gray-600
              mt-2
            ">
              Riwayat semua transaksi sampah user
            </p>
          </div>


          {/* TABLE */}
          <div className="
            bg-white
            rounded-2xl
            shadow
            overflow-x-auto
          ">

            <table className="
              w-full
              text-sm
            ">

              {/* TABLE HEAD */}
              <thead className="
                bg-green-100
                text-green-900
              ">

                <tr>

                  <th className="px-6 py-4 text-left">
                    User
                  </th>

                  <th className="px-6 py-4 text-left">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left">
                    Kategori
                  </th>

                  <th className="px-6 py-4 text-left">
                    Berat
                  </th>

                  <th className="px-6 py-4 text-left">
                    Poin
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left">
                    Tanggal
                  </th>

                </tr>
              </thead>


              {/* TABLE BODY */}
              <tbody>

                {loading ? (

                  <tr>

                    <td
                      colSpan="7"
                      className="
                        text-center
                        py-10
                      "
                    >
                      Loading...
                    </td>

                  </tr>

                ) : logs.length === 0 ? (

                  <tr>

                    <td
                      colSpan="7"
                      className="
                        text-center
                        py-10
                      "
                    >
                      Belum ada data
                    </td>

                  </tr>

                ) : (

                  logs.map((item) => (

                    <tr
                      key={item.id}
                      className="
                        border-b
                        hover:bg-gray-50
                      "
                    >

                      {/* USER */}
                      <td className="px-6 py-4">
                        {item.user_name}
                      </td>


                      {/* EMAIL */}
                      <td className="px-6 py-4">
                        {item.email}
                      </td>


                      {/* CATEGORY */}
                      <td className="px-6 py-4">
                        {item.waste_category}
                      </td>


                      {/* BERAT */}
                      <td className="px-6 py-4">
                        {item.berat} Kg
                      </td>


                      {/* POINT */}
                      <td className="px-6 py-4">
                        {item.poin_didapat}
                      </td>


                      {/* STATUS */}
                      <td className="px-6 py-4">

                        <span className="
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                        ">

                          {item.status}

                        </span>

                      </td>


                      {/* DATE */}
                      <td className="px-6 py-4">

                        {new Date(
                          item.created_at
                        ).toLocaleString()}

                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}