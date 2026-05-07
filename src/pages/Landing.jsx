import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-green-900">
              Scan Sampah, Dapatkan Reward
            </h1>
            <p className="mt-4 text-green-800">
              Yuk mulai pilah sampah sekarang
            </p>

            <button className="mt-4 bg-green-500 px-6 py-2 text-white rounded-lg">
              Mulai Scan / Login
            </button>
          </div>

          <img
            src="/src/assets/img/hero.png"
            className="w-80 mt-6 md:mt-0"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-900">
            Tentang Kami
          </h1>
          <p className="mt-6 text-green-800">
            Platform untuk memilah sampah dan mendapatkan reward.
          </p>
        </div>
      </section>

      {/* REWARD */}
      <section id="reward" className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-900 mb-8">
            Tukar Poin
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4">
                <img src="/src/assets/img/product.png" className="rounded" />
                <p className="mt-2 font-semibold">Produk {i}</p>
                <p>40 Poin</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}