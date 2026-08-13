import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiStar,
  FiHome,
  FiCompass,
  FiUser,
  FiUpload,
  FiGrid,
  FiMessageSquare,
  FiBell,
  FiUploadCloud,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Explore Talents",
    path: "/explore-talents",
    icon: FiCompass,
  },
  {
    name: "My Talents",
    path: "/my-talents",
    icon: FiUser,
  },
  {
    name: "Upload Talent",
    path: "/upload-talent",
    icon: FiUpload,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: FiGrid,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: FiMessageSquare,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: FiBell,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FiUser,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <FiStar />
        <span>TalentBridge</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-item${isActive ? " active" : ""}`
              }
            >
              <Icon />
              <span>{item.name}</span>

              {item.badge && (
                <span className="badge">{item.badge}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom card */}
      <div className="profile-card">
        <div className="trophy">
          <FiUploadCloud />
        </div>

        <h4>Showcase your talent</h4>

        <p>Upload your talent and get discovered.</p>

        <NavLink to="/upload-talent">
          <button>Upload Now</button>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;