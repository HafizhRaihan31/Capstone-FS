import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
  from "../../layouts/DashboardLayout";

import {
  getAllRewardLogs,
} from "../../services/rewardService";


export default function RewardLogsPage() {

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
            await getAllRewardLogs();

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
              Log Penukaran Reward
            </h1>

            <p className="
              text-gray-600
              mt-2
            ">
              Riwayat semua penukaran reward user
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
                    Reward
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
                      colSpan="6"
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
                      colSpan="6"
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


                      {/* REWARD */}
                      <td className="px-6 py-4">
                        {item.reward_name}
                      </td>


                      {/* POINT */}
                      <td className="px-6 py-4">
                        {item.points_used}
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
                          item.redeemed_at
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