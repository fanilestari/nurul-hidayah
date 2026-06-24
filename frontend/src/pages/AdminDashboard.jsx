import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // EDIT STATE
  const [editData, setEditData] = useState(null);

  // FETCH DATA
  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/ppdb`);
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/ppdb/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  // OPEN EDIT
  const openEdit = (item) => {
    setEditData(item);
  };

  // SAVE EDIT
  const handleUpdate = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/ppdb/${editData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    setEditData(null);
    fetchData();
  };

  // FILTER SEARCH
  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin PPDB</h1>

        <input
          className="p-2 border rounded w-64"
          placeholder="Cari santri..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-600 text-white p-4 rounded-xl">
          Total Pendaftar
          <h1 className="text-2xl font-bold">{data.length}</h1>
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-xl">
          Terfilter
          <h1 className="text-2xl font-bold">{filteredData.length}</h1>
        </div>

        <div className="bg-purple-600 text-white p-4 rounded-xl">
          Status
          <h1 className="text-xl font-bold">Aktif</h1>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Umur</th>
              <th className="p-3 text-left">Asal</th>
              <th className="p-3 text-left">Pesan</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.umur}</td>
                <td className="p-3">{item.asal}</td>
                <td className="p-3">{item.pesan}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => openEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL EDIT */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Edit Data</h2>

            <input
              className="border p-2 w-full mb-2"
              value={editData.nama}
              onChange={(e) =>
                setEditData({ ...editData, nama: e.target.value })
              }
              placeholder="Nama"
            />

            <input
              className="border p-2 w-full mb-2"
              value={editData.umur}
              onChange={(e) =>
                setEditData({ ...editData, umur: e.target.value })
              }
              placeholder="Umur"
            />

            <input
              className="border p-2 w-full mb-2"
              value={editData.asal}
              onChange={(e) =>
                setEditData({ ...editData, asal: e.target.value })
              }
              placeholder="Asal"
            />

            <textarea
              className="border p-2 w-full mb-4"
              value={editData.pesan}
              onChange={(e) =>
                setEditData({ ...editData, pesan: e.target.value })
              }
              placeholder="Pesan"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditData(null)}
                className="px-3 py-1 bg-gray-400 text-white rounded"
              >
                Batal
              </button>

              <button
                onClick={handleUpdate}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
