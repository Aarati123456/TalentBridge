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
    path: "/explore",
    icon: FiCompass,
  },
  {
    name: "My Talents",
    path: "/my-talents",
    icon: FiUser,
  },
  {
    name: "Upload Talent",
    path: "/upload",
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
    badge: 3,
  },
];

function Sidebar() {
  return (
    <aside className="w-[325px] min-h-screen bg-white border-r border-gray-200 px-3 py-8 flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-4 px-3 mb-10">
        <FiStar className="text-blue-600 text-[34px]" />
        <h1 className="text-[28px] font-bold text-[#17335f]">
          TalentBridge
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative flex items-center gap-5 px-4 py-4 rounded-xl text-[18px] transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-[#17243a] hover:bg-gray-50"
                }`
              }
            >
              <Icon className="text-[25px]" />

              <span>{item.name}</span>

              {item.badge && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs min-w-[27px] h-[27px] flex items-center justify-center rounded-lg">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="bg-[#f2f2ff] rounded-xl p-5 mt-5">
        <div className="flex justify-center mb-4">
          <FiUploadCloud className="text-yellow-500 text-[52px]" />
        </div>

        <h3 className="text-[18px] font-medium text-gray-900 mb-3">
          Showcase your talent
        </h3>

        <p className="text-gray-600 leading-7 mb-5">
          Upload your talent and get discovered.
        </p>

        <NavLink
          to="/upload"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Upload Now
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;