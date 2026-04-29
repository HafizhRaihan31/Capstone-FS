import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          ♻ Sortir.in
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#">Beranda</a>
          <a href="#">Tentang</a>
          <a href="#">Bank Sampah</a>
          <button className="bg-white text-green-600 px-4 py-1 rounded-lg">
            Login
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <a href="#">Beranda</a>
          <a href="#">Tentang</a>
          <a href="#">Bank Sampah</a>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;