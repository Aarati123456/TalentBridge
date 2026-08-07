import { Link } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import { sidebarItems } from "./data.jsx";

const DashboardSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 transform transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 shrink-0">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            TalentBridge
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2.5 mt-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default DashboardSidebar;
