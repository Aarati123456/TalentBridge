import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Showcase Your Talent?
        </h2>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          Join TalentBridge today, share your skills with the world, and
          discover talented individuals from different categories.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-xl hover:bg-blue-100 transition duration-300">
            Join Now
          </button>

          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-800 transition duration-300 flex items-center justify-center gap-2">
            Explore Talents
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;