import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import {
  LayoutDashboard,
  Compass,
  FolderOpen,
  Upload,
  MessageSquare,
  Mail,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  Eye,
  Heart,
  MessageCircle,
  Music,
  Code,
  Camera,
  Palette,
  PenTool,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    to: "/dashboard",
    active: true,
  },
  { label: "Explore Talents", icon: <Compass className="w-5 h-5" />, to: "/explore" },
  { label: "Categories", icon: <FolderOpen className="w-5 h-5" />, to: "/explore" },
  { label: "My Talents", icon: <PenTool className="w-5 h-5" />, to: "/dashboard" },
  { label: "Upload Talent", icon: <Upload className="w-5 h-5" />, to: "/upload" },
  { label: "Comments", icon: <MessageSquare className="w-5 h-5" />, to: "/dashboard" },
  { label: "Messages", icon: <Mail className="w-5 h-5" />, to: "/dashboard" },
  { label: "Notifications", icon: <Bell className="w-5 h-5" />, to: "/dashboard" },
  { label: "Profile", icon: <User className="w-5 h-5" />, to: "/dashboard" },
  { label: "Settings", icon: <Settings className="w-5 h-5" />, to: "/dashboard" },
];

const stats = [
  { title: "Total Talents", value: "24", icon: <Upload className="w-6 h-6" /> },
  { title: "Followers", value: "128", icon: <User className="w-6 h-6" /> },
  { title: "Likes Received", value: "340", icon: <Heart className="w-6 h-6" /> },
  { title: "Avg Rating", value: "4.8", icon: <TrendingUp className="w-6 h-6" /> },
];

const recentTalents = [
  {
    id: 1,
    title: "A Soulful Singing Performance",
    category: "Singing",
    image: "https://picsum.photos/seed/singing/400/250",
    views: 1240,
    likes: 320,
    comments: 45,
  },
  {
    id: 2,
    title: "E-commerce Website Development",
    category: "Web Development",
    image: "https://picsum.photos/seed/webdev/400/250",
    views: 980,
    likes: 210,
    comments: 32,
  },
  {
    id: 3,
    title: "Nature Photography Collection",
    category: "Photography",
    image: "https://picsum.photos/seed/nature/400/250",
    views: 1560,
    likes: 410,
    comments: 67,
  },
  {
    id: 4,
    title: "Pencil Sketch Art",
    category: "Art",
    image: "https://picsum.photos/seed/art/400/250",
    views: 870,
    likes: 185,
    comments: 28,
  },
];

const quickActions = [
  {
    label: "Upload Talent",
    icon: <Upload className="w-5 h-5" />,
    color: "bg-blue-600",
    link: "/upload",
  },
  {
    label: "Explore Talents",
    icon: <Compass className="w-5 h-5" />,
    color: "bg-indigo-600",
    link: "/explore",
  },
  {
    label: "My Profile",
    icon: <User className="w-5 h-5" />,
    color: "bg-purple-600",
    link: "/dashboard",
  },
  {
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-gray-600",
    link: "/dashboard",
  },
];

const categories = [
  { label: "Singing", icon: <Music className="w-6 h-6 text-indigo-600" />, bg: "bg-indigo-50" },
  { label: "Dancing", icon: <TrendingUp className="w-6 h-6 text-pink-500" />, bg: "bg-pink-50" },
  { label: "Web Development", icon: <Code className="w-6 h-6 text-green-600" />, bg: "bg-green-50" },
  { label: "Photography", icon: <Camera className="w-6 h-6 text-blue-500" />, bg: "bg-blue-50" },
  { label: "Art", icon: <Palette className="w-6 h-6 text-yellow-500" />, bg: "bg-yellow-50" },
  { label: "More", icon: <Compass className="w-6 h-6 text-purple-600" />, bg: "bg-purple-50" },
];

const activities = [
  {
    text: "Your talent received 12 new likes",
    time: "2 minutes ago",
    icon: <Heart className="w-4 h-4" />,
    color: "bg-red-100 text-red-500",
  },
  {
    text: "Someone commented on your talent",
    time: "1 hour ago",
    icon: <MessageCircle className="w-4 h-4" />,
    color: "bg-blue-100 text-blue-500",
  },
  {
    text: "Your talent received 25 new views",
    time: "3 hours ago",
    icon: <Eye className="w-4 h-4" />,
    color: "bg-green-100 text-green-600",
  },
  {
    text: "Your talent was published successfully",
    time: "Yesterday",
    icon: <Upload className="w-4 h-4" />,
    color: "bg-purple-100 text-purple-600",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 lg:flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 transform transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 shrink-0">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            TalentBridge
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
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
              onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 mt-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* TOP HEADER */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
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

        {/* WELCOME SECTION */}
        <div className="px-6 pt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Welcome back, Aarati!
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your talents and explore new opportunities.
          </p>
        </div>

        {/* STATISTICS */}
        <div className="px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <DashboardCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>

        {/* RECENT TALENTS + PROFILE CARD */}
        <div className="px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Talents */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-900">Recent Talents</h2>
              <Link
                to="/explore"
                className="text-sm text-indigo-600 font-medium hover:text-indigo-700"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentTalents.map((talent) => (
                <div
                  key={talent.id}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                >
                  <img
                    src={talent.image}
                    alt={talent.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                      {talent.category}
                    </span>
                    <h3 className="mt-2 font-semibold text-gray-800 text-sm leading-snug">
                      {talent.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {talent.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" />
                        {talent.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {talent.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Aarati Angbuhang"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-100"
              />
              <h3 className="mt-4 font-bold text-gray-900 text-lg">
                Aarati Angbuhang
              </h3>
              <p className="text-sm text-indigo-600">@aarati_48</p>
              <p className="text-sm text-gray-500 mt-3">
                Creative soul passionate about singing, photography and building
                beautiful web experiences.
              </p>
              <div className="grid grid-cols-3 gap-4 w-full mt-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">128</p>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">56</p>
                  <p className="text-xs text-gray-500">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">24</p>
                  <p className="text-xs text-gray-500">Talents</p>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS + TALENT CATEGORIES */}
        <div className="px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.link}
                  className={`${action.color} text-white rounded-xl p-4 flex flex-col items-center gap-2 hover:opacity-90 transition-opacity`}
                >
                  {action.icon}
                  <span className="text-sm font-semibold">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Talent Categories */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Talent Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className={`${cat.bg} rounded-xl p-4 flex flex-col items-center gap-2 text-center`}
                >
                  {cat.icon}
                  <span className="text-sm font-semibold text-gray-700">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="px-6 mt-8 pb-10">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}
                  >
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
