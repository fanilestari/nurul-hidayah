import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h2 className="text-xl font-bold text-green-700">Nurul Hidayah</h2>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#beranda" className="hover:text-green-600">
              Beranda
            </a>
          </li>

          <li>
            <a href="#profil" className="hover:text-green-600">
              Profil
            </a>
          </li>

          <li>
            <a href="#program" className="hover:text-green-600">
              Program
            </a>
          </li>

          <li>
            <a href="#galeri" className="hover:text-green-600">
              Galeri
            </a>
          </li>

          <li>
            <a href="#ppdb" className="hover:text-green-600">
              PPDB
            </a>
          </li>

          <li>
            <a href="#kontak" className="hover:text-green-600">
              Kontak
            </a>
          </li>
        </ul>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-4 text-gray-700 font-medium">
            <li>
              <a
                href="#beranda"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </a>
            </li>

            <li>
              <a
                href="#profil"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Profil
              </a>
            </li>

            <li>
              <a
                href="#program"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Program
              </a>
            </li>

            <li>
              <a
                href="#galeri"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Galeri
              </a>
            </li>

            <li>
              <a
                href="#ppdb"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                PPDB
              </a>
            </li>

            <li>
              <a
                href="#kontak"
                className="block px-8 py-3 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
