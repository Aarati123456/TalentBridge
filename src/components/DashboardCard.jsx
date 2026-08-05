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
      {/* Recent Talents */}

      <div className="flex justify-between items-center mt-12">

        <h2 className="text-3xl font-bold">
          Recent Talents
        </h2>

        <Link
          to="/upload"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >
          + Upload Talent
        </Link>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {recentTalents.map((talent) => (
          <RecentTalentCard
            key={talent.id}
            title={talent.title}
            user={talent.user}
            category={talent.category}
          />
        ))}

      </div>
           </div>
  );
}

export default Dashboard;
