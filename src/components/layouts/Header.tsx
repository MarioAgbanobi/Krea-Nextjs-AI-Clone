"use client";
import { ChevronDown, Home, Image, Video, PenTool, Folder, Bell, Sun, Moon, Headset } from "lucide-react";

export default function Header({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void }) {
    return (
        <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
            <div className="max-w-8xl mx-auto px-5 h-14 flex items-center justify-between">

                {/* Left side */}
                <div className="flex items-center space-x-4">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center shadow ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
                        <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-700" }`}>
                            K
                        </span>
                    </div>

                    {/* Username (hidden on small screens) */}
                    <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center"></div>
                        <span className={`text-sm font-medium ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}>
                            benevolentmindset
                        </span>
                        <ChevronDown className={`w-4 h-4 pt-1 ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}/>
                    </div>
                </div>

                {/* Center nav icons (hidden on small, flex on md+) */}
                <div className={`hidden md:flex items-center space-x-6 px-3 py-1 rounded-md shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                    <button className="p-2 rounded-md transition bg-white">
                        <Home className="w-4 h-4 text-gray-800" />
                    </button>

                    <button
                        className={`p-2 rounded-full transition ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-white"
                            }`}
                    >
                        <Image
                            className={`w-4 h-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"
                                }`}
                        />
                    </button>
                    <button
                        className={`p-2 rounded-full transition ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-white"
                            }`}
                    >
                        <Video
                            className={`w-4 h-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"
                                }`}
                        />
                    </button>
                    <button
                        className={`p-2 rounded-full transition ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-white"
                            }`}
                    >
                        <PenTool
                            className={`w-4 h-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"
                                }`}
                        />
                    </button>
                    <button
                        className={`p-2 rounded-full transition ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-white"
                            }`}
                    >
                        <Folder
                            className={`w-4 h-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"
                                }`}
                        />
                    </button>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-3">
                    <button
                        className={`hidden md:flex items-center space-x-1 text-sm px-3 py-1 rounded-md ${isDarkMode
                            ? "text-gray-200 bg-gray-800"
                            : "text-gray-700 bg-gray-100"
                            }`}
                    >
                        <Image className="w-4 h-4" />
                        <span>Gallery</span>
                    </button>

                    <button
                        className={`hidden md:flex items-center space-x-1 text-sm px-3 py-1 rounded-md ${isDarkMode
                            ? "text-gray-200 bg-gray-800"
                            : "text-gray-700 bg-gray-100"
                            }`}
                    >
                        <Headset className="w-4 h-4" />
                        <span>Support</span>
                    </button>

                    <button
                        className={`relative p-2 rounded-full transition ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
                            }`}
                    >
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
                            }`}
                    >
                        {isDarkMode ? (
                            <Sun className="w-4 h-4 text-yellow-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-gray-600" />
                        )}
                    </button>

                    {/* User avatar (always visible) */}
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-400 to-blue-500"></div>
                </div>
            </div>
        </header>
    );
}
