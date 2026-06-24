import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavbarAdmin() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-xl">Dashboard Admin</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
