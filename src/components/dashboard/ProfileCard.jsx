import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="Aarati Angbuhang"
          className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-100"
        />
        <h3 className="mt-4 font-bold text-gray-900 text-lg">
          Aarati Angbuhang
        </h3>
        <p className="text-sm text-indigo-600">@aarati_48</p>
        <p className="text-sm text-gray-500 mt-3">
          Creative soul passionate about singing, photography and building
          beautiful web experiences.
        </p>
        <div className="flex items-center justify-center gap-6 w-full mt-5 border-y border-gray-100 py-3">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 leading-none">128</p>
            <p className="text-xs text-gray-400 mt-1">Followers</p>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 leading-none">56</p>
            <p className="text-xs text-gray-400 mt-1">Following</p>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 leading-none">24</p>
            <p className="text-xs text-gray-400 mt-1">Talents</p>
          </div>
        </div>
        <Link
          to="/dashboard"
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
