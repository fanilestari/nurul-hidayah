function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">
        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Pondok Pesantren
            <br />
            Nurul Hidayah
          </h2>

          <div className="w-16 h-1 bg-green-600 rounded-full mt-4 mb-5"></div>

          <p className="leading-7 text-gray-400">
            Mencetak generasi Qur'ani yang berilmu, berakhlak, mandiri, dan siap
            menghadapi tantangan zaman dengan nilai-nilai Islam.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Menu</h3>

          <ul className="space-y-3">
            <li>
              <a href="#beranda" className="hover:text-green-500 transition">
                Beranda
              </a>
            </li>

            <li>
              <a href="#profil" className="hover:text-green-500 transition">
                Profil
              </a>
            </li>

            <li>
              <a href="#program" className="hover:text-green-500 transition">
                Program
              </a>
            </li>

            <li>
              <a href="#galeri" className="hover:text-green-500 transition">
                Galeri
              </a>
            </li>

            <li>
              <a href="#ppdb" className="hover:text-green-500 transition">
                PPDB
              </a>
            </li>

            <li>
              <a href="#kontak" className="hover:text-green-500 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Kontak</h3>

          <div className="space-y-4">
            <p>📞 +62 812-4669-3401</p>

            <p>✉️ info@nurulhidayah.com</p>

            <a
              href="https://wa.me/6281246693401"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                mt-2
                px-5
                py-3
                rounded-lg
                bg-green-600
                hover:bg-green-700
                text-white
                font-medium
                transition
              "
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>

        {/* ALAMAT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Alamat Pondok
          </h3>

          <p className="leading-8 text-gray-400">
            Jl. Pramuka RT 03 RW 11
            <br />
            Munggang Bawah, Kalibeber
            <br />
            Kecamatan Mojotengah
            <br />
            Kabupaten Wonosobo
            <br />
            Jawa Tengah, Indonesia
          </p>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Wonosobo&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-52 rounded-2xl border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Pondok Pesantren Nurul Hidayah. All
            Rights Reserved.
          </p>

          <p>Built with ❤️ by Pondok Pesantren Nurul Hidayah</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
