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
import ProtectedRoute from "./routes/ProtectedRoute";

import PPDBAdmin from "./pages/PPDBAdmin";
import ProgramAdmin from "./pages/ProgramAdmin";
import GaleriAdmin from "./pages/GaleriAdmin";
import PesanAdmin from "./pages/PesanAdmin";
import SettingsAdmin from "./pages/SettingsAdmin";
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
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/ppdb"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <PPDBAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/programs"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProgramAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/galeri"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <GaleriAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pesan"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <PesanAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <SettingsAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
