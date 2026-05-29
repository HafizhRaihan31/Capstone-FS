import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex min-h-screen items-center bg-green-50/30"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 md:flex-row gap-8">
          {/* Teks & CTA */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-green-900 sm:text-4xl lg:text-5xl tracking-tight">
              Scan Sampah, <br className="hidden sm:inline" />
              Dapatkan Reward
            </h1>
            <p className="mt-4 text-base text-green-800 sm:text-lg">
              Yuk mulai pilah sampah sekarang dan tukarkan dengan hadiah
              menarik.
            </p>
            <Link
              to="/login"
              className="mt-6 inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-95"
            >
              Login Sekarang
            </Link>
          </div>

          {/* Gambar Hero */}
          <div className="mt-6 flex flex-1 justify-center md:mt-0">
            <img
              src="/src/assets/img/hero.png"
              alt="Ilustrasi Scan Sampah untuk Mendapat Reward"
              className="w-72 sm:w-80 lg:w-[400px] object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-900 sm:text-3xl">
            Tentang Kami
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-6 text-green-800 text-base sm:text-lg leading-relaxed">
            Kami adalah platform digital yang berkomitmen membantu Anda
            mengelola dan memilah sampah rumah tangga dengan lebih mudah. Ubah
            kepedulian lingkungan Anda menjadi poin berharga yang bisa
            ditukarkan dengan berbagai reward menarik.
          </p>
        </div>
      </section>

      {/* REWARD SECTION */}
      <section id="reward" className="py-24 bg-green-50/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-green-900 sm:text-3xl">
              Tukar Poin
            </h2>

            <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>

            <p className="mt-4 text-green-800 text-base sm:text-lg max-w-2xl mx-auto">
              Berikut adalah beberapa reward yang bisa kamu dapatkan 
              <br />Nb: Reward yang tersedia dapat berubah sewaktu-waktu.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl bg-gray-50 aspect-video flex items-center justify-center">
                <img
                  src="/src/assets/img/sampo.jpg"
                  alt="Sampo Keramas"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Sampo keramas
                </h3>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tersedia</span>

                  <span className="font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg text-sm">
                    250 Poin
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl bg-gray-50 aspect-video flex items-center justify-center">
                <img
                  src="/src/assets/img/mie.jpg"
                  alt="Mie Instan"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Mie Instan
                </h3>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tersedia</span>

                  <span className="font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg text-sm">
                    75 Poin
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl bg-gray-50 aspect-video flex items-center justify-center">
                <img
                  src="/src/assets/img/botol.jpg"
                  alt="Botol Minum"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Botol Minum
                </h3>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tersedia</span>

                  <span className="font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg text-sm">
                    100 Poin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
