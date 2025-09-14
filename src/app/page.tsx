"use client";
import { useState } from "react";
import Header from "@/components/layouts/Header";
import ToolCard from "@/components/ui/ToolCard";
import { generateTools } from "@/libs/toolsData";
import Footer from "@/components/layouts/Footer";
import Gallery from "@/components/layouts/Gallery";
import Hero from "@/components/layouts/Hero";
import { ChevronDown } from "lucide-react";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="max-w-8xl mx-auto px-5 py-8">
        <Hero isDarkMode={isDarkMode} />

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Generate</h2>
            <div className="flex space-x-2">

              <ChevronDown className={`w-4 h-4 pt-1 ${isDarkMode ? "text-gray-100" : "text-gray-600"}`} />

              <button className={`text-sm transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}>
                Show all
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {generateTools.map((tool, i) => <ToolCard key={i} tool={tool} isDarkMode={isDarkMode} />)}
          </div>
        </section>

        <Gallery isDarkMode={isDarkMode} />

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
