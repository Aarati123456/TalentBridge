import { Search, Bell, Mail, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-indigo-600"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search talents..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
          <Mail className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-500"></span>
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="Aarati Angbuhang"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              Aarati Angbuhang
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
