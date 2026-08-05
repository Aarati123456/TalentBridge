import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import RecentTalentCard from "../components/RecentTalentCard";
import { stats, recentTalents } from "../data/dashboardData"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold">
        👋 Welcome Back
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your talents and explore new opportunities.
      </p>

      {/* Stats */}

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
