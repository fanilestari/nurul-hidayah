function Contact() {
  return (
    <section id="kontak" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Hubungi Kami</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu memberikan informasi mengenai Pondok Pesantren
            Nurul Hidayah, program pendidikan, serta proses pendaftaran santri
            baru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* INFORMASI KONTAK */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-green-700">📍 Alamat</h4>

                <p className="mt-2 text-gray-600 leading-7">
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

              <div>
                <h4 className="font-semibold text-green-700">
                  📞 Telepon / WhatsApp
                </h4>

                <p className="mt-2 text-gray-600">+62 812-4669-3401</p>
              </div>

              <div>
                <h4 className="font-semibold text-green-700">✉️ Email</h4>

                <p className="mt-2 text-gray-600">info@nurulhidayah.com</p>
              </div>

              <a
                href="https://wa.me/6281246693401"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Kirim Pesan
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama"
                  className="
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Pesan
                </label>

                <textarea
                  rows="5"
                  placeholder="Tuliskan pesan..."
                  className="
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                  "
                ></textarea>
              </div>

              <button
                className="
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-sm border">
          <iframe
            title="Lokasi Pondok"
            src="https://maps.google.com/maps?q=Wonosobo&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
