import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";
import RegistrationChart from "../components/RegistrationChart";

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Selamat datang di Dashboard Pondok Pesantren Nurul Hidayah 👋
          </p>
        </div>

        {/* Statistik */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Total Santri" value="150" />

          <StatCard title="Pendaftar Baru" value="35" />

          <StatCard title="Pesan Masuk" value="12" />

          <StatCard title="Program Aktif" value="8" />
        </div>

        {/* Grafik + Aktivitas */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RegistrationChart />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-5">Aktivitas Terbaru</h2>

            <div className="space-y-4">
              <div className="border-b pb-3">Ahmad mendaftar PPDB</div>

              <div className="border-b pb-3">Fatimah mengirim pesan</div>

              <div className="border-b pb-3">Admin menambah galeri</div>

              <div>Program Tahfidz diperbarui</div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
