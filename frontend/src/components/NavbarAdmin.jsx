function NavbarAdmin() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-800">Dashboard Admin</h1>

        <p className="text-gray-500 text-sm">Pondok Pesantren Nurul Hidayah</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-2xl">🔔</button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">Admin</p>

            <p className="text-sm text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarAdmin;
