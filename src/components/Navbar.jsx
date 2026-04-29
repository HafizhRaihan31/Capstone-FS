import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-green-500 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-white text-green-600 px-2 py-1 rounded-md">♻</span>
          Sortir.in
        </div>

        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#beranda" className="hover:text-green-100">Beranda</a>
          <a href="#tentang" className="hover:text-green-100">Tentang</a>
          <a href="#bank-sampah" className="hover:text-green-100">Bank Sampah</a>

          <button className="bg-white text-green-600 px-5 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <a href="#beranda" onClick={closeMenu}>Beranda</a>
          <a href="#tentang" onClick={closeMenu}>Tentang</a>
          <a href="#bank-sampah" onClick={closeMenu}>Bank Sampah</a>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;