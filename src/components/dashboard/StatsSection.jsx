import DashboardCard from "../DashboardCard";
import { stats } from "./data.jsx";

const StatsSection = () => {
  return (
    <div className="px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          accent={item.accent}
        />
      ))}
    </div>
  );
};

export default StatsSection;
