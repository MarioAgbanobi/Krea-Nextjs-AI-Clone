"use client";
import React from "react";
import { GenerateTool } from "@/libs/toolsData";

export default function ToolCard({ tool, isDarkMode }: { tool: GenerateTool; isDarkMode: boolean }) {
  return (
    <div className={`pt-4 rounded-lg transition-all hover:scale-100 cursor-pointer ${isDarkMode ? "border-gray-700" : "border-gray-200"} group`}>
      <div className="flex items-start justify-between gap-4">
        <div className={`p-5 rounded-md ${tool.color} group-hover:scale-110 transition-transform`}>{tool.icon}</div>
        <div className="flex flex-col items-start text-left w-full mb-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium">{tool.title}</h3>
            {tool.tag && (
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${tool.tag === "Free" ? "bg-green-100 text-green-700" : tool.tag === "New" ? "bg-blue-100 text-blue-700" : tool.tag === "Pro" ? "bg-purple-100 text-purple-700" : ""}`}>
                {tool.tag}
              </span>
            )}
          </div>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{tool.description}</p>
        </div>
        <button className={`mt-3 text-sm font-medium px-6 py-2.5 rounded-full ${isDarkMode ? "bg-gray-800 hover:text-blue-300 text-white" : "bg-gray-100 text-black hover:text-blue-700"}`}>Open</button>
      </div>
    </div>
  );
}