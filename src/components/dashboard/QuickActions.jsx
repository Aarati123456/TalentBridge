import { Link } from "react-router-dom";
import { quickActions } from "./data.jsx";

const QuickActions = () => {
  return (
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
  );
};

export default QuickActions;
