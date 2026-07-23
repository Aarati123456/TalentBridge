import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import TalentCategories from "../components/home/TalentCategories";
import FeaturedTalents from "../components/home/FeaturedTalents";
import TrendingTalents from "../components/home/TrendingTalents";
import WhyChoose from "../components/home/WhyChoose";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <SearchSection /> 

      {/* Featured Talents */}
      <FeaturedTalents />

     {/* Talent Categories */} 
     <TalentCategories />

      {/* Trending Talents */}
      <section className="py-16 flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">
          Trending Talents
        </h1>
      </section>

      {/* Why Choose TalentBridge */}
      <section className="py-16 flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">
          Why Choose TalentBridge
        </h1>
      </section>

      {/* Call To Action */}
      <section className="py-16 flex items-center justify-center bg-blue-600">
        <h1 className="text-4xl font-bold text-white">
          Call To Action
        </h1>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <h1 className="text-2xl font-semibold">
          Footer
        </h1>
        <p className="mt-2 text-gray-400">
          © 2026 TalentBridge. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;