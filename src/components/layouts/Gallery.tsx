"use client";
import { Eye, Play } from "lucide-react";

export default function Gallery({ isDarkMode }: { isDarkMode: boolean; }) {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Gallery</h2>
                <div className="flex items-center space-x-4">
                    <button className={`flex items-center space-x-2 text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}>
                        <Eye className="w-4 h-4" />
                        <span>Latest</span>
                    </button>
                    <button className={`flex items-center space-x-2 text-sm transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}>
                        <Play className="w-4 h-4" />
                        <span>Following</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
