import {
  LayoutDashboard,
  Users,
  Image,
  BookOpen,
  Mail,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-10">Nurul Hidayah</h2>

      <ul className="space-y-5">
        <li className="flex gap-3">
          <LayoutDashboard size={20} />
          Dashboard
        </li>

        <li className="flex gap-3">
          <Users size={20} />
          PPDB
        </li>

        <li className="flex gap-3">
          <BookOpen size={20} />
          Program
        </li>

        <li className="flex gap-3">
          <Image size={20} />
          Galeri
        </li>

        <li className="flex gap-3">
          <Mail size={20} />
          Pesan
        </li>

        <li className="flex gap-3">
          <Settings size={20} />
          Pengaturan
        </li>
      </ul>
    </aside>
  );
}
