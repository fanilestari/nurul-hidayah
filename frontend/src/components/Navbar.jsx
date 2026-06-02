function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <h2 className="text-xl font-bold text-green-700">Nurul Hidayah</h2>

      <ul className="flex gap-6 text-gray-700 font-medium">
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
    </nav>
  );
}

export default Navbar;
