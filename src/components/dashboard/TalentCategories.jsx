import { categories } from "./data.jsx";

const TalentCategories = () => {
  return (
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
  );
};

export default TalentCategories;
