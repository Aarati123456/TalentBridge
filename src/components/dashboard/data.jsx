import {
  LayoutDashboard,
  Compass,
  FolderOpen,
  Upload,
  PenTool,
  MessageSquare,
  Mail,
  Bell,
  User,
  Settings,
  Eye,
  Heart,
  MessageCircle,
  Music,
  Code,
  Camera,
  Palette,
  TrendingUp,
} from "lucide-react";

export const sidebarItems = [
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

export const stats = [
  {
    title: "Total Talents",
    value: "24",
    icon: <Upload className="w-6 h-6" />,
    accent: "bg-blue-100 text-blue-700",
  },
  {
    title: "Followers",
    value: "128",
    icon: <User className="w-6 h-6" />,
    accent: "bg-purple-100 text-purple-700",
  },
  {
    title: "Likes Received",
    value: "340",
    icon: <Heart className="w-6 h-6" />,
    accent: "bg-red-100 text-red-600",
  },
  {
    title: "Avg Rating",
    value: "4.8",
    icon: <TrendingUp className="w-6 h-6" />,
    accent: "bg-green-100 text-green-600",
  },
];

export const recentTalents = [
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

export const quickActions = [
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

export const categories = [
  { label: "Singing", icon: <Music className="w-6 h-6 text-indigo-600" />, bg: "bg-indigo-50" },
  { label: "Dancing", icon: <TrendingUp className="w-6 h-6 text-pink-500" />, bg: "bg-pink-50" },
  { label: "Web Development", icon: <Code className="w-6 h-6 text-green-600" />, bg: "bg-green-50" },
  { label: "Photography", icon: <Camera className="w-6 h-6 text-blue-500" />, bg: "bg-blue-50" },
  { label: "Art", icon: <Palette className="w-6 h-6 text-yellow-500" />, bg: "bg-yellow-50" },
  { label: "More", icon: <Compass className="w-6 h-6 text-purple-600" />, bg: "bg-purple-50" },
];

export const activities = [
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
