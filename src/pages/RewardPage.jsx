import DashboardLayout from "../layouts/DashboardLayout";

export default function RewardPage() {
  const rewards = [
    {
      id: 1,
      name: "Es Teh",
      points: 40,
      image: "/src/assets/img/product.png",
    },
    {
      id: 2,
      name: "Voucher Makanan",
      points: 100,
      image: "/src/assets/img/product.png",
    },
    {
      id: 3,
      name: "Tumbler",
      points: 150,
      image: "/src/assets/img/product.png",
    },
    {
      id: 4,
      name: "Diskon Belanja",
      points: 200,
      image: "/src/assets/img/product.png",
    },
    {
      id: 5,
      name: "Coffee Voucher",
      points: 80,
      image: "/src/assets/img/product.png",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-900">
              Tukar Poin
            </h1>

            <p className="text-green-700 mt-2">
              Tukarkan poinmu dengan berbagai hadiah menarik!
            </p>

            <div className="mt-4 bg-green-100 inline-block px-4 py-2 rounded-lg">
              <span className="font-semibold text-green-900">
                Poin Kamu: 2000
              </span>
            </div>
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
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-green-900">
                    {item.name}
                  </h2>

                  <p className="text-green-700 mt-1">
                    {item.points} Poin
                  </p>

                  <button
                    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition"
                    onClick={() => alert(`Tukar ${item.name}`)}
                  >
                    Tukar Poin
                  </button>

                  {/* command:
                    nanti tombol ini connect ke endpoint backend:
                    POST /api/redeem
                  */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}