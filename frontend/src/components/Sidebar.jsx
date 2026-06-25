import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-green-700">
        <h1 className="text-2xl font-bold">Nurul Hidayah</h1>

        <p className="text-green-200 text-sm">Admin Panel</p>
      </div>

      {/* Menu */}
      <ul className="p-4 space-y-2">
        <li>
          <Link
            to="/admin"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            📊 Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/admin/ppdb"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            🧑‍🎓 Data PPDB
          </Link>
        </li>

        <li>
          <Link
            to="/admin/program"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            📚 Program Pondok
          </Link>
        </li>

        <li>
          <Link
            to="/admin/galeri"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            🖼️ Galeri
          </Link>
        </li>

        <li>
          <Link
            to="/admin/pesan"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            💬 Pesan Masuk
          </Link>
        </li>

        <li>
          <Link
            to="/admin/settings"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            ⚙️ Pengaturan
          </Link>
        </li>

        <li>
          <Link
            to="/admin/admin-management"
            className="block px-4 py-3 rounded-lg hover:bg-green-700 transition"
          >
            👥 Management Admin
          </Link>
        </li>

        <li className="pt-6">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition">
            🚪 Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
