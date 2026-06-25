import AdminLayout from "../layouts/AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Selamat Datang 👋</h1>

          <p className="text-gray-500 mt-2">
            Selamat datang di Dashboard Admin Pondok Pesantren Nurul Hidayah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
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
    </AdminLayout>
  );
}

export default AdminDashboard;
