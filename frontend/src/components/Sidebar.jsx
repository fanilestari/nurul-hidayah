import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-green-700 text-white">
      <ul className="p-4 space-y-2">
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin/ppdb">Data PPDB</Link>
        </li>

        <li>
          <Link to="/admin/program">Program Pondok</Link>
        </li>

        <li>
          <Link to="/admin/galeri">Galeri</Link>
        </li>

        <li>
          <Link to="/admin/pesan">Pesan Masuk</Link>
        </li>

        <li>
          <Link to="/admin/settings">Pengaturan</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;