import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER + CTA */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold text-green-900">
                Selamat Datang, Hafizh
              </h1>
              <p className="text-sm text-green-700">
                Yuk pilah sampah dan kumpulkan poin hari ini!
              </p>
            </div>

            <button className="mt-4 md:mt-0 bg-green-500 px-6 py-3 rounded-xl text-white">
              📷 Scan Sampah Sekarang
            </button>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">Poin anda saat ini</p>
              <h1 className="text-3xl font-bold text-green-900">2000</h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">Sampah yang terkumpul</p>
              <h1 className="text-3xl font-bold text-green-900">9</h1>
            </div>
          </div>

          {/* LOWER SECTION */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* PROGRESS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold text-green-900">
                Progress Reward
              </p>
              <p className="mt-2">2000 / 3000 Poin</p>

              <div className="w-full bg-gray-200 h-2 rounded mt-3">
                <div className="bg-green-600 h-2 w-2/3 rounded"></div>
              </div>

              <p className="text-sm mt-2 text-green-700">
                1000 poin lagi menuju reward
              </p>
            </div>

            {/* HISTORY */}
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold text-green-900">
                Riwayat Sampah
              </p>

              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span>Botol plastik</span>
                  <span className="text-green-600">+15</span>
                </div>
                <div className="flex justify-between">
                  <span>Kardus</span>
                  <span className="text-green-600">+10</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}