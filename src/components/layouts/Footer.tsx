"use client";

export default function Footer({ isDarkMode }: { isDarkMode: boolean; }) {
    return (
        <footer className={`border-t mt-12 transition-colors duration-300 ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
            <div className="max-w-8xl mx-auto px-5 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                        <span className="text-black font-bold text-xs">K</span>
                    </div>
                    <span className="text-md font-medium">Krea AI</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="text-md">curated by</span>
                    <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="font-medium text-md">Mobbin</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
