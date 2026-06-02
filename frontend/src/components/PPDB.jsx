import { useState } from "react";

export default function PPDB() {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    asal: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/ppdb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Response:", data);

    alert("Pendaftaran berhasil!");

    // reset form
    setForm({
      nama: "",
      umur: "",
      asal: "",
      pesan: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form PPDB</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="border p-2 w-full"
        />

        <input
          name="umur"
          value={form.umur}
          onChange={handleChange}
          placeholder="Umur"
          className="border p-2 w-full"
        />

        <input
          name="asal"
          value={form.asal}
          onChange={handleChange}
          placeholder="Asal"
          className="border p-2 w-full"
        />

        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          placeholder="Pesan"
          className="border p-2 w-full"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </form>
    </div>
  );
}
