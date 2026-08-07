import DashboardCard from "../components/DashboardCard";
import { Users, Star, Heart, Upload } from "lucide-react";

const stats = [
  { title: "Total Talents", value: "24", icon: <Upload className="w-6 h-6" /> },
  { title: "Followers", value: "128", icon: <Users className="w-6 h-6" /> },
  { title: "Likes Received", value: "340", icon: <Heart className="w-6 h-6" /> },
  { title: "Avg Rating", value: "4.8", icon: <Star className="w-6 h-6" /> },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">👋 Welcome Back</h1>
      <p className="text-gray-500 mt-2">
        Manage your talents and explore new opportunities.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
