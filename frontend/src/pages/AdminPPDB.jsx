import { useEffect, useState } from "react";

function AdminPPDB() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  // ambil data
  const fetchData = async () => {
    const res = await fetch("http://127.0.0.1:8000/ppdb");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // submit update
  const handleUpdate = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/ppdb/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });

    const result = await res.json();
    alert(result.message);

    setEditData(null);
    fetchData();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin PPDB</h1>

      {data.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg">
          <p>
            <b>Nama:</b> {item.nama}
          </p>
          <p>
            <b>Umur:</b> {item.umur}
          </p>
          <p>
            <b>Asal:</b> {item.asal}
          </p>
          <p>
            <b>Pesan:</b> {item.pesan}
          </p>

          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setEditData(item)}
          >
            Edit
          </button>

          {/* FORM EDIT */}
          {editData && editData.id === item.id && (
            <div className="mt-4 space-y-2">
              <input
                className="border p-2 w-full"
                value={editData.nama}
                onChange={(e) =>
                  setEditData({ ...editData, nama: e.target.value })
                }
              />

              <input
                className="border p-2 w-full"
                value={editData.umur}
                onChange={(e) =>
                  setEditData({ ...editData, umur: e.target.value })
                }
              />

              <input
                className="border p-2 w-full"
                value={editData.asal}
                onChange={(e) =>
                  setEditData({ ...editData, asal: e.target.value })
                }
              />

              <textarea
                className="border p-2 w-full"
                value={editData.pesan}
                onChange={(e) =>
                  setEditData({ ...editData, pesan: e.target.value })
                }
              />

              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={() => handleUpdate(item.id)}
              >
                Simpan
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminPPDB;
