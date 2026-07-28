import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import UploadTalent from "./pages/UploadTalent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* Navbar सबै pages मा देखिन्छ */}
      <Navbar />

      {/* URL अनुसार page change हुन्छ */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/upload" element={<UploadTalent />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Footer सबै pages मा देखिन्छ */}
      <Footer />
    </>
  );
}

export default App;