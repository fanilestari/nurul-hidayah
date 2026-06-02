function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/foto-pondok.png')",
        }}
      ></div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Pondok Pesantren Nurul Hidayah
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Mencetak generasi Qur'ani, berilmu, berakhlak, dan siap menghadapi
          zaman.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Daftar Sekarang
          </button>

          <a
            href="https://wa.me/6281246693401"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
