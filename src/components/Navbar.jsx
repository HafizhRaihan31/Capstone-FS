import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-green-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Sortir.in</h1>

      <div className="hidden md:flex gap-6">
        <button onClick={() => scrollTo("home")}>Beranda</button>
        <button onClick={() => scrollTo("about")}>Tentang</button>
        <button onClick={() => scrollTo("reward")}>Tukar Poin</button>
      </div>

      <Link
        to="/login"
        className="bg-white text-green-700 px-4 py-1 rounded-lg"
      >
        Login
      </Link>
    </div>
  );
}