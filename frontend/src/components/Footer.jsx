function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">
        {/* KOLOM 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Pondok Pesantren
            <br />
            Nurul Hidayah
          </h2>

          <p className="text-green-100 leading-relaxed">
            Mencetak generasi Qur'ani, berilmu, berakhlak, dan siap menghadapi
            tantangan zaman.
          </p>
        </div>

        {/* KOLOM 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>

          <ul className="space-y-3 text-green-100">
            <li>
              <a href="#beranda" className="hover:text-white">
                Beranda
              </a>
            </li>

            <li>
              <a href="#profil" className="hover:text-white">
                Profil
              </a>
            </li>

            <li>
              <a href="#program" className="hover:text-white">
                Program
              </a>
            </li>

            <li>
              <a href="#galeri" className="hover:text-white">
                Galeri
              </a>
            </li>

            <li>
              <a href="#ppdb" className="hover:text-white">
                PPDB
              </a>
            </li>

            <li>
              <a href="#kontak" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* KOLOM 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>

          <div className="space-y-3 text-green-100">
            <p>
              📍 Jl. Pramuka Rt 03 Rw 11 Munggang Bawah Kalibeber Mojotengah
            </p>

            <p>📞 +62 812-4669-3401</p>

            <p>✉️ info@nurulhidayah.com</p>
          </div>

          <a
            href="https://wa.me/6281246693401"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-6
              bg-green-800
              hover:bg-green-500
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-8 py-5 text-center text-green-200">
          © {new Date().getFullYear()} Pondok Pesantren Nurul Hidayah. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
