import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-green-700">Dashboard Admin</h1>

          <p className="text-gray-500 mt-2">Pondok Pesantren Nurul Hidayah</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Statistik */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Santri</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">150</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Pendaftar Baru</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">35</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Pesan Masuk</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">12</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Program Aktif</p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">8</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
