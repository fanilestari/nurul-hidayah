import { useEffect, useState } from "react";
import api from "../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({
    total_santri: 0,
    pendaftar_baru: 0,
    pesan_masuk: 0,
    program_aktif: 0,
  });

  const [ppdb, setPpdb] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const statsRes = await api.get("/dashboard/stats");

      const ppdbRes = await api.get("/ppdb");

      setStats(statsRes.data);
      setPpdb(ppdbRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/ppdb/${id}`);
      loadDashboard();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-green-700">Dashboard Admin</h1>

          <p className="text-gray-500 mt-2">Pondok Pesantren Nurul Hidayah</p>
        </div>

        <button
          onClick={loadDashboard}
          className="bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Refresh
        </button>
      </div>

      {/* CARD */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Santri</p>

          <h2 className="text-5xl font-bold text-green-700 mt-3">
            {stats.total_santri}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Pendaftar Baru</p>

          <h2 className="text-5xl font-bold text-green-700 mt-3">
            {stats.pendaftar_baru}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Pesan Masuk</p>

          <h2 className="text-5xl font-bold text-green-700 mt-3">
            {stats.pesan_masuk}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Program Aktif</p>

          <h2 className="text-5xl font-bold text-green-700 mt-3">
            {stats.program_aktif}
          </h2>
        </div>
      </div>

      {/* AKTIVITAS */}
      <div className="bg-white rounded-2xl shadow p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Aktivitas Terbaru</h2>

        {ppdb.length === 0 ? (
          <p className="text-gray-500">Belum ada pendaftar.</p>
        ) : (
          <div className="space-y-4">
            {ppdb
              .slice()
              .reverse()
              .slice(0, 5)
              .map((item) => (
                <div key={item.id} className="border-b pb-3">
                  <p className="font-semibold">{item.nama}</p>

                  <p className="text-gray-500">Mendaftar dari {item.asal}</p>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* DATA PPDB */}
      <div className="bg-white rounded-2xl shadow p-6 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Data PPDB</h2>

          <span className="text-gray-500">Total: {ppdb.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-4 text-left">Nama</th>

                <th className="p-4 text-left">Umur</th>

                <th className="p-4 text-left">Asal</th>

                <th className="p-4 text-left">Pesan</th>

                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {ppdb.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.nama}</td>

                  <td className="p-4">{item.umur}</td>

                  <td className="p-4">{item.asal}</td>

                  <td className="p-4">{item.pesan}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteData(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
