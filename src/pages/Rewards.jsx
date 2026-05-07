import Navbar from "../components/Navbar";

export default function Rewards() {
  const items = [1, 2, 3];

  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-green-900 mb-8">
          Tukar Poin
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <img src="/src/assets/img/product.png" className="rounded" />
              <p className="mt-2 font-semibold">Produk {i}</p>
              <p>40 Poin</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}