import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-600/90 backdrop-blur-md text-white px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <button 
          onClick={() => scrollTo("home")} 
          className="font-extrabold text-xl tracking-tight hover:opacity-90 transition-opacity"
        >
          Sortir<span className="text-green-200">.in</span>
        </button>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <button 
            onClick={() => scrollTo("home")} 
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all hover:after:w-full"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollTo("about")} 
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all hover:after:w-full"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollTo("reward")} 
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all hover:after:w-full"
          >
            Tukar Poin
          </button>
        </div>

        {/* CTA BUTTON */}
        <Link
          to="/login"
          className="bg-white text-green-700 px-5 py-2 rounded-xl font-semibold shadow-sm hover:bg-green-50 hover:shadow transition-all duration-200 active:scale-95"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}