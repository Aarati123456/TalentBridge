import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ExploreTalents from "./pages/ExploreTalents";
import Dashboard from "./pages/Dashboard";
import UploadTalent from "./pages/UploadTalent";
import MyTalents from "./pages/MyTalents";
import Categories from "./pages/Categories";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import UserManagement from "./pages/UserManagement";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Pages with Sidebar */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore-talents" element={<ExploreTalents />} />
        <Route path="/my-talents" element={<MyTalents />} />
        <Route path="/upload-talent" element={<UploadTalent />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/user-management"
          element={<UserManagement />}
        />
      </Route>
    </Routes>
  );
}

export default App;