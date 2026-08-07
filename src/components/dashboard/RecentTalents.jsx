import { Link } from "react-router-dom";
import { Eye, Heart, MessageCircle } from "lucide-react";
import { recentTalents } from "./data.jsx";

const RecentTalents = () => {
  return (
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
  );
};

export default RecentTalents;
