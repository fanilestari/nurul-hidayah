import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayouts.jsx";
import API_URL from "../services/api";

function PPDBAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/ppdb`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Data PPDB</h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3">ID</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Umur</th>
              <th className="p-3">Asal</th>
              <th className="p-3">Pesan</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.umur}</td>
                <td className="p-3">{item.asal}</td>
                <td className="p-3">{item.pesan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default PPDBAdmin;
