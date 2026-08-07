import { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Header from "../components/dashboard/Header";
import StatsSection from "../components/dashboard/StatsSection";
import RecentTalents from "../components/dashboard/RecentTalents";
import ProfileCard from "../components/dashboard/ProfileCard";
import QuickActions from "../components/dashboard/QuickActions";
import TalentCategories from "../components/dashboard/TalentCategories";
import RecentActivity from "../components/dashboard/RecentActivity";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 lg:flex">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(true)} />

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
        <StatsSection />

        {/* RECENT TALENTS + PROFILE CARD */}
        <div className="px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentTalents />
          <ProfileCard />
        </div>

        {/* QUICK ACTIONS + TALENT CATEGORIES */}
        <div className="px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickActions />
          <TalentCategories />
        </div>

        {/* RECENT ACTIVITY */}
        <div className="px-6 mt-8 pb-10">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
