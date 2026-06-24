import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      setIsAuth(true);
      navigate("/admin");
    } else {
      alert("Login gagal");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow rounded w-80">
        <h1 className="text-xl font-bold mb-4">Login Admin</h1>

        <input
          className="border p-2 w-full mb-2"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-600 text-white w-full p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
