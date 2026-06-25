import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "admin-token");

      setIsAuth(true);
      navigate("/admin");
    } else {
      alert("Username atau password salah.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Login Admin
        </h1>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
