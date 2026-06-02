import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import PPDB from "./components/PPDB";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

// LANDING PAGE
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
    </>
  );
}

// APP ROUTER
export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/admin"
          element={isAuth ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
