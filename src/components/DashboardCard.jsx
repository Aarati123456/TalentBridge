const DashboardCard = ({ title, value, icon, accent = "bg-blue-100 text-blue-700" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${accent}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
