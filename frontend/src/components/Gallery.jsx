const images = [
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Kegiatan Ngaji Santri",
  },
  {
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed",
    title: "Suasana Pondok",
  },
  {
    src: "https://images.unsplash.com/photo-1606293459339-1c5f3b8c9c1f",
    title: "Sholat Berjamaah",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title: "Kajian Kitab Kuning",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    title: "Santri Belajar",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    title: "Kegiatan Pondok",
  },
];

function Gallery() {
  return (
    <section id="galeri" className="py-20 px-6 bg-white">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800">
          Galeri Kegiatan Pondok
        </h2>
        <p className="text-gray-500 mt-3">
          Dokumentasi aktivitas santri di Pondok Pesantren Nurul Hidayah
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md group"
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-sm font-medium">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
