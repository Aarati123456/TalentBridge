import { activities } from "./data.jsx";

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-5">Recent Activity</h2>
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
  );
};

export default RecentActivity;
