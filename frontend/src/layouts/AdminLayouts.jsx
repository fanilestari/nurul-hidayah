import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/NavbarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        <NavbarAdmin />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
