const programs = [
  {
    kategori: "Harian",
    items: [
      "Tahfidz Al-Qur'an",
      "Qiroatul Kutub",
      "Ngaji Pagi (Umum)",
      "Ngaji Sore (Diniyah)",
      "Ngaji Malam (Diniyah)",
      "Sholat Berjamaah",
    ],
  },
  {
    kategori: "Mingguan",
    items: [
      "Simaan Tahfidz",
      "Muhadhoroh",
      "Sholawatan",
      "Ro'an Pondok",
      "Ziarah Dzuriyah",
    ],
  },
  {
    kategori: "Bulanan",
    items: ["Mujahadah Malam Ahad Pahing", "Manaqib (malam 11)"],
  },
  {
    kategori: "Tahunan",
    items: ["Haflah Akhirussanah", "Ziarah Waliullah"],
  },
];

function Programs() {
  return (
    <section id="program" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Program Pondok Pesantren
      </h2>

      {/* GRID UTAMA (kayak tabel modern) */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {programs.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* HEADER KATEGORI */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-green-700">
                {group.kategori}
              </h3>

              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {group.items.length} program
              </span>
            </div>

            {/* LIST */}
            <div className="space-y-2">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition"
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
