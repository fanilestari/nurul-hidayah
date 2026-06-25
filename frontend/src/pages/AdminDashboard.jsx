import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const [dataPPDB, setDataPPDB] = useState([]);

  const [form, setForm] = useState({
    nama: "",
    umur: "",
    asal: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPPDB();
  }, []);

  const getPPDB = async () => {
    try {
      const res = await fetch(`${API_URL}/ppdb`);
      const data = await res.json();
      setDataPPDB(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ppdb`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: form.nama,
          umur: Number(form.umur),
          asal: form.asal,
          pesan: form.pesan,
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal menyimpan");
      }

      setForm({
        nama: "",
        umur: "",
        asal: "",
        pesan: "",
      });

      await getPPDB();

      alert("Pendaftaran berhasil");
    } catch (err) {
      console.log(err);
      alert("Terjadi kesalahan");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    const yakin = window.confirm("Yakin ingin menghapus data?");

    if (!yakin) return;

    try {
      await fetch(`${API_URL}/ppdb/${id}`, {
        method: "DELETE",
      });

      getPPDB();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-green-700">Dashboard Admin</h1>

        <p className="text-gray-500 mt-2">
          Sistem Informasi Pondok Pesantren Nurul Hidayah
        </p>
      </div>

      {/* CARD STATISTIK */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-gray-500">Total Pendaftar</h3>

          <p className="text-4xl font-bold text-green-700 mt-3">
            {dataPPDB.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-gray-500">Pendaftar Baru</h3>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            {dataPPDB.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-gray-500">Pesan Masuk</h3>

          <p className="text-4xl font-bold text-orange-500 mt-3">0</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-gray-500">Program Aktif</h3>

          <p className="text-4xl font-bold text-purple-600 mt-3">0</p>
        </div>
      </div>

      {/* FORM TAMBAH */}
      <div className="bg-white rounded-2xl shadow p-8 mb-10">
        <h2 className="text-2xl font-bold mb-6">Tambah Pendaftar PPDB</h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="umur"
            value={form.umur}
            onChange={handleChange}
            placeholder="Umur"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="asal"
            value={form.asal}
            onChange={handleChange}
            placeholder="Asal"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="pesan"
            value={form.pesan}
            onChange={handleChange}
            placeholder="Pesan"
            className="border p-3 rounded-lg"
            required
          />

          <button
            disabled={loading}
            className="
              md:col-span-2
              bg-green-700
              text-white
              py-3
              rounded-lg
              hover:bg-green-800
              disabled:bg-gray-400
            "
          >
            {loading ? "Menyimpan..." : "Simpan Pendaftar"}
          </button>
        </form>
      </div>

      {/* DATA PPDB */}
      <div className="bg-white rounded-2xl shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Data Pendaftar</h2>

          <span className="text-gray-500">Total : {dataPPDB.length}</span>
        </div>

        {dataPPDB.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            Belum ada data pendaftar
          </div>
        ) : (
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
                {dataPPDB.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">{item.nama}</td>

                    <td className="p-4">{item.umur}</td>

                    <td className="p-4">{item.asal}</td>

                    <td className="p-4">{item.pesan}</td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                        "
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
