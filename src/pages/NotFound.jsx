import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center p-6">
      <div className="text-8xl mb-6">♻️</div>

      <h1 className="text-6xl font-bold text-green-900 mb-2">404</h1>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Halaman Tidak Ditemukan
      </h2>

      <p className="text-green-600 mb-8 max-w-md">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-medium transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}