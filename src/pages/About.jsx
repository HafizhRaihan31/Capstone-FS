import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-green-900">
          Tentang Kami
        </h1>
        <p className="mt-6 text-green-800 max-w-2xl mx-auto">
          Platform untuk membantu memilah sampah dan mendapatkan reward.
        </p>
      </div>
    </>
  );
}