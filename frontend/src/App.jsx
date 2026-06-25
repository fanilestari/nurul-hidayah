import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import PPDB from "./components/PPDB";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="space-y-24">
        <Hero />
        <Profile />
        <Programs />
        <Gallery />
        <PPDB />
        <Contact />
      </div>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") === "admin-token",
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
