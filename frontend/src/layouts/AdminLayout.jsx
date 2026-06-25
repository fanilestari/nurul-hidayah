import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/NavbarAdmin";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
