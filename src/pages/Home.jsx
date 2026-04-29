import Reveal from "../components/Reveal";

function Home() {
  return (
    <main>
      <section
        id="beranda"
        className="min-h-screen bg-gray-50 flex items-center justify-center px-6 text-center"
      >
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-5">
            Scan Sampah, Dapatkan Reward
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Identifikasi jenis sampah dengan AI dan tukarkan dengan poin reward
            untuk mendukung lingkungan yang lebih bersih.
          </p>

          <a
            href="#tentang"
            className="inline-block bg-green-400 text-green-950 px-8 py-3 rounded-xl font-semibold hover:bg-green-500 transition duration-300"
          >
            Mulai Scan / Login
          </a>
        </Reveal>
      </section>

      <section
        id="tentang"
        className="min-h-screen bg-white flex items-center justify-center px-6 text-center"
      >
        <Reveal className="max-w-4xl">
          <p className="text-green-600 font-semibold mb-2">Tentang Kami</p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-5">
            Mengenal Sortir.in
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-10">
            Sortir.in adalah platform digital yang membantu masyarakat memilah
            sampah dengan mudah melalui teknologi AI, sistem poin, dan informasi
            bank sampah.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Reveal>
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  AI Scan
                </h3>
                <p className="text-gray-600">
                  Membantu mengenali jenis sampah secara otomatis dari gambar.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Reward Point
                </h3>
                <p className="text-gray-600">
                  Pengguna bisa mendapatkan poin dari aktivitas memilah sampah.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-3">♻️</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Lingkungan
                </h3>
                <p className="text-gray-600">
                  Mendukung kebiasaan hidup bersih dan pengelolaan sampah.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      <section
        id="bank-sampah"
        className="min-h-screen bg-gray-50 flex items-center justify-center px-6 text-center"
      >
        <Reveal className="max-w-5xl">
          <p className="text-green-600 font-semibold mb-2">Bank Sampah</p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-5">
            Tukarkan Sampah Jadi Reward
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-10">
            Setor sampah yang sudah dipilah, kumpulkan poin, lalu tukarkan
            dengan reward yang tersedia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Reveal>
              <div className="bg-white p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-3xl mb-3">1️⃣</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Pilah Sampah
                </h3>
                <p className="text-gray-600">
                  Pisahkan sampah plastik, kertas, dan logam sebelum disetor.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-3xl mb-3">2️⃣</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Setor ke Bank
                </h3>
                <p className="text-gray-600">
                  Bawa sampah ke bank sampah terdekat untuk ditimbang.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white p-6 rounded-2xl shadow-sm border hover:-translate-y-2 transition duration-300">
                <div className="text-3xl mb-3">3️⃣</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Dapatkan Poin
                </h3>
                <p className="text-gray-600">
                  Poin akan masuk dan bisa ditukarkan dengan reward.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default Home;