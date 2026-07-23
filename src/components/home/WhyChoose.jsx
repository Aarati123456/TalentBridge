import {
  Search,
  Star,
  Users,
  Compass,
} from "lucide-react";

const features = [
  {
    icon: <Search size={40} />,
    title: "Discover Talents",
    description:
      "Explore talented people from different categories and connect with them easily.",
  },
  {
    icon: <Star size={40} />,
    title: "Showcase Skills",
    description:
      "Upload your talents and let the world discover your creativity.",
  },
  {
    icon: <Users size={40} />,
    title: "Community Recognition",
    description:
      "Receive appreciation, feedback, and recognition from the community.",
  },
  {
    icon: <Compass size={40} />,
    title: "Easy Exploration",
    description:
      "Browse talents quickly using categories and search features.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose TalentBridge?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything you need to discover, showcase, and grow your talent.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;