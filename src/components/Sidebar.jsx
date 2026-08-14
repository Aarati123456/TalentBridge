import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiStar,
  FiHome,
  FiCompass,
  FiUser,
  FiGrid,
  FiMessageSquare,
  FiBell,
  FiUsers,
  FiBarChart2,
  FiUploadCloud,
} from "react-icons/fi";

const mainItems = [
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
    name: "Categories",
    path: "/categories",
    icon: FiGrid,
  },
];

const accountItems = [
  {
    name: "My Talents",
    path: "/my-talents",
    icon: FiUser,
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

const adminItems = [
  {
    name: "User Management",
    path: "/user-management",
    icon: FiUsers,
  },
  {
    name: "Talent Management",
    path: "/talent-management",
    icon: FiGrid,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FiBarChart2,
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

      {/* MAIN */}
      <div className="sidebar-section">
        <div className="sidebar-section-heading">MAIN</div>

        <nav className="sidebar-nav">
          {mainItems.map((item) => {
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
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* MY ACCOUNT */}
      <div className="sidebar-section">
        <div className="sidebar-section-heading">MY ACCOUNT</div>

        <nav className="sidebar-nav">
          {accountItems.map((item) => {
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
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* ADMIN */}
      <div className="sidebar-section">
        <div className="sidebar-section-heading">ADMIN</div>

        <nav className="sidebar-nav">
          {adminItems.map((item) => {
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
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Card */}
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